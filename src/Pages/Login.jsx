import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function submitLogin(values) {
    const correctEmail = "Muharraq.Math25@gmail.com";
    const correctPassword = "Math2025";

    if (
      values.email.trim().toLowerCase() === correctEmail.toLowerCase() &&
      values.password === correctPassword
    ) {
      login("admin"); // Login as admin
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
    <div
      className="container py-5 login-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, var(--secondary) 0%, #e8f5e8 100%)",
      }}
    >
      <div
        className="w-100 mx-auto p-5 rounded shadow login-card"
        style={{
          maxWidth: "450px",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
          border: "2px solid var(--primary)",
          boxShadow: "0 8px 32px rgba(30,140,89,0.15)",
          borderRadius: "20px",
        }}
      >
        {error && (
          <div
            className="alert text-center mb-4"
            style={{
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              color: "#721c24",
              borderRadius: "10px",
              padding: "12px",
            }}
          >
            {error}
          </div>
        )}

        <h3
          className="text-center mb-4"
          style={{
            color: "var(--primary-dark)",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          تسجيل الدخول
        </h3>

        <form onSubmit={formik.handleSubmit}>
          <label
            htmlFor="email"
            className="form-label"
            style={{
              color: "var(--primary-dark)",
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginBottom: "0.5rem",
            }}
          >
            البريد الإلكتروني:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control mb-3"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.boxShadow = "none";
            }}
            style={{
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              direction: "ltr",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--primary)";
              e.target.style.boxShadow = "0 0 0 3px rgba(30,140,89,0.1)";
            }}
          />
          {formik.errors.email && formik.touched.email && (
            <div
              className="alert p-2 mb-3"
              style={{
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c6cb",
                color: "#721c24",
                borderRadius: "8px",
                fontSize: "0.9rem",
              }}
            >
              {formik.errors.email}
            </div>
          )}

          <label
            htmlFor="pass"
            className="form-label"
            style={{
              color: "var(--primary-dark)",
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginBottom: "0.5rem",
            }}
          >
            كلمة المرور:
          </label>
          <input
            id="pass"
            name="password"
            type="password"
            className="form-control mb-3"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.boxShadow = "none";
            }}
            style={{
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              direction: "ltr",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--primary)";
              e.target.style.boxShadow = "0 0 0 3px rgba(30,140,89,0.1)";
            }}
          />
          {formik.errors.password && formik.touched.password && (
            <div
              className="alert p-2 mb-3"
              style={{
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c6cb",
                color: "#721c24",
                borderRadius: "8px",
                fontSize: "0.9rem",
              }}
            >
              {formik.errors.password}
            </div>
          )}

          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className="btn w-100 mt-4"
            style={{
              background:
                formik.isValid && formik.dirty
                  ? "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)"
                  : "linear-gradient(90deg, #6c757d 60%, #5a6268 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "14px 20px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              boxShadow:
                formik.isValid && formik.dirty
                  ? "0 4px 15px rgba(30,140,89,0.3)"
                  : "0 2px 8px rgba(108,117,125,0.3)",
              transition: "all 0.3s ease",
              cursor:
                formik.isValid && formik.dirty ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (formik.isValid && formik.dirty) {
                e.target.style.background =
                  "linear-gradient(90deg, #1e8c59 60%, #2d9a6b 100%)";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(30,140,89,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (formik.isValid && formik.dirty) {
                e.target.style.background =
                  "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(30,140,89,0.3)";
              }
            }}
          >
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}
