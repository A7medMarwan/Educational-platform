import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function submitLogin(values) {
    const correctEmail = "Muharraq.Math25@gmail.com";
    const correctPassword = "Math2025";

    if (
      values.email.trim().toLowerCase() === correctEmail.toLowerCase() &&
      values.password === correctPassword
    ) {
      login();
      navigate("/");
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  }

  let validationSchema = yup.object({
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: yup
      .string()
      .matches(/^[A-Z][a-z0-9]{5,10}/, "كلمة المرور غير صحيحة")
      .required("كلمة المرور مطلوبة"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submitLogin,
  });

  return (
    <div className="container py-5 login-page">
      <div className="w-100 mx-auto p-4 rounded shadow login-card">
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <h3 className="text-center mb-4 text-main">تسجيل الدخول</h3>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className="form-label text-main">
            البريد الإلكتروني:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control mb-2"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger p-2">{formik.errors.email}</div>
          )}

          <label htmlFor="pass" className="form-label text-main">
            كلمة المرور:
          </label>
          <input
            id="pass"
            name="password"
            type="password"
            className="form-control mb-2"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="alert alert-danger p-2">
              {formik.errors.password}
            </div>
          )}

          {isLoading ? (
            <button className="btn btn-secondary w-100 mt-3" disabled>
              <span className="spinner-border spinner-border-sm"></span> جارٍ
              التحميل...
            </button>
          ) : (
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="btn w-100 mt-3"
              style={{ backgroundColor: "var(--primary-dark)", color: "white" }}
            >
              دخول
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
