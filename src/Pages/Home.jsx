import React from "react";
import schoolname from "../Assets/Images/school-name.jpg";
import ministry from "../Assets/Images/ministry.png";
import { FaBolt } from "react-icons/fa";
import SubjectsCarousel from "../Components/Subjects/Subjects";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <section
        className="header position-relative px-3 pt-5 d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--secondary)",
          marginBottom: "-50px", // تقدر تشيله لو حابب
        }}
        id="homeFirstSection"
      >
        {/* شعار الوزارة */}
        <img
          src={ministry}
          alt="Ministry"
          className="position-absolute img-fluid animate-right-image d-none d-md-inline pb-5"
          style={{ height: "25%", right: 0, top: 0 }}
        />

        {/* النص */}
        <div
          className="pt-5"
          style={{
            maxWidth: "800px",
            zIndex: 2,
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              color: "var(--primary-dark)",
              fontSize: "clamp(1.6rem, 3vw, 3rem)",
            }}
          >
            مرحبًا بكم في منصة قسم الرياضيات
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              color: "var(--text)",
            }}
          >
            هذه المنصة التعليمية تهدف إلى دعم الطالبات في تعلّم ومراجعة مقررات
            الرياضيات لجميع المراحل بالمدرسة.
          </p>
        </div>

        {/* الكارت - تحت الكلام مباشرة */}
        <div
          className="card shadow p-4 border-0 mt-4 animate-fadeUp"
          style={{
            maxWidth: "800px",
            direction: "rtl",
            textAlign: "right",
            borderRadius: "16px",
            backgroundColor: "var(--secondary)",
            color: "var(--text)",
            zIndex: 2,
            marginBottom: "80px",
          }}
        >
          <h2
            className="fw-bold d-flex align-items-center gap-2 mb-3"
            style={{
              color: "var(--primary-dark)",
              fontSize: "1.8rem",
            }}
          >
            <FaBolt style={{ color: "var(--primary-dark)" }} />
            منصة قوة البدايات
          </h2>

          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundColor: "var(--primary-dark)",
              width: "60px",
              margin: "0 0 1rem",
            }}
          />

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            هو مشروع من مشاريع قسم الرياضيات بمدرسة المحرق الثانوية للبنات،
            بقيادة الأستاذة <strong>منى عبد الحميد</strong>. يهدف إلى ترسيخ
            المهارات الأساسية في مقررات الرياضيات، ودعم التعلم الذاتي للطالبات
            في مختلف المراحل الدراسية. كما تضم بطاقات تعليمية تسلط الضوء على أهم
            المفاهيم الأساسية في المقرر.
          </p>
        </div>

        {/* شعار المدرسة */}
        <img
          src={schoolname}
          alt="School"
          className="position-absolute img-fluid animate-right-image d-none d-md-inline z-999 pb-5"
          style={{ height: "25%", left: 0, top: 0 }}
        />
      </section>

      {/* الكاروسيل خارج الهيدر وتحت بوضوح */}
      <SubjectsCarousel />

      {/* فراغ بسيط إضافي قبل الفوتر (اختياري) */}
      <div style={{ height: "80px" }}></div>
    </>
  );
}
