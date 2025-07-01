import React, { useState } from "react";
import FileUpload from "../Components/FileUpload/FileUpload";

const initialPdfFiles = [
  { name: "بطاقة علاجية التحليل 1", display: "بطاقة علاجية: التحليل 1" },
  { name: "‫‫‫‫بطاقة علاجية التحليل 2.pdf", display: "بطاقة علاجية: التحليل 2" },
  { name: "‫‫بطاقة علاجية تعيين النقاط على المستوى البياني.pdf", display: "بطاقة علاجية: تعيين النقاط على المستوى البياني" },
  { name: "بطاقة علاجية تفاعلية حل المتباينات الخطية في متغير واحد.pdf", display: "بطاقة علاجية: حل المتباينات الخطية في متغير واحد" },
  { name: "بطاقة علاجية تفاعلية على الدوال.pdf", display: "بطاقة علاجية: الدوال" },
  { name: "‫‫‫بطاقة علاجية حل المتباينات الخطية 2.pdf", display: "بطاقة علاجية: حل المتباينات الخطية 2" },
  { name: "بطاقة علاجية مجموعة الأعداد الحقيقية.pdf", display: "بطاقة علاجية: مجموعة الأعداد الحقيقية" },
  { name: "‫‫بطاقة علاجيةتمثيل الدالة الخطية.pdf", display: "بطاقة علاجية: تمثيل الدالة الخطية" },
  { name: "‫‫بطاقة عمل 1-حل المعادلة الخطية 1.pdf", display: "بطاقة عمل: حل المعادلة الخطية 1" },
  { name: "بطاقة عمل على القيمة المطلقة.pdf", display: "بطاقة عمل: مسائل على القيمة المطلقة" },
];

const cardStyle = {
  boxShadow: "0 2px 12px 0 rgba(30,140,89,0.10)",
  borderRadius: "18px",
  padding: "2.5rem 1.7rem 1.7rem 1.7rem",
  background: "linear-gradient(135deg, #fff 80%, #e8f5ee 100%)",
  margin: "1.2rem",
  flex: "1 1 260px",
  minWidth: "240px",
  maxWidth: "340px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1.5px solid #b2dfdb",
  transition: "transform 0.22s, box-shadow 0.22s, border 0.22s, background 0.22s",
  position: "relative",
  cursor: "pointer",
  overflow: "hidden"
};

const cardHoverStyle = {
  boxShadow: "0 8px 32px 0 rgba(30,140,89,0.22)",
  border: "2px solid #1e8c59",
  transform: "translateY(-8px) scale(1.045)",
  background: "linear-gradient(135deg, #f1fff8 60%, #d0f5e8 100%)"
};



const cardTitleStyle = {
  fontSize: "1.13rem",
  marginBottom: "0.7rem",
  textAlign: "center",
  color: "#0d2c1f",
  fontWeight: "bold",
  minHeight: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "90%",
  wordBreak: "break-word",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

const pdfIconStyle = {
  fontSize: "2.2rem",
  color: "#e53935",
  marginBottom: "0.7rem",
  marginTop: "-1.2rem",
};

const searchInputStyle = {
  width: "100%",
  maxWidth: 400,
  margin: "0 auto 2rem auto",
  display: "block",
  padding: "0.7rem 1.2rem",
  borderRadius: 8,
  border: "1.5px solid #1e8c59",
  fontSize: "1.1rem",
  outline: "none",
  boxShadow: "0 1px 6px rgba(30,140,89,0.07)",
  transition: "border 0.18s, box-shadow 0.18s",
  direction: "rtl",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.2rem",
  padding: "1.5rem 0",
  background: "var(--secondary)",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.08rem",
  marginTop: "1.2rem",
  border: "none",
  borderRadius: "8px",
  padding: "0.7rem 2.2rem",
  background: "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)",
  boxShadow: "0 2px 8px rgba(30,140,89,0.13)",
  transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
  letterSpacing: "0.5px",
};

const videoButtonStyle = {
  ...linkStyle,
  background: "linear-gradient(90deg, #1e8c59 60%, #0d2c1f 100%)",
  margin: "1.5rem auto 50px auto",
  display: "block",
  textAlign: "center",
};

export default function Math151() {
  const [hovered, setHovered] = useState(null);
  const [search, setSearch] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState(initialPdfFiles);
  const [showVideo, setShowVideo] = useState(false);

  const filteredPdfs = pdfFiles.filter(f => f.display.toLowerCase().includes(search.toLowerCase()));

  const handleFilesAdded = (files) => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleDeletePdf = (name) => {
    setPdfFiles(prev => prev.filter(f => f.name !== name));
  };

  return (
    <div  style={{ background: "var(--secondary)" , paddingBlock: "20px" }}>
    <div style={{ maxWidth: 1200,  margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ textAlign: "center", color: "#0d2c1f", marginBottom: "2rem", fontSize: "2rem", fontWeight: 700 }}>
        تحميل الملفات
      </h1>
      <FileUpload onFilesAdded={handleFilesAdded} />
      <input
        type="text"
        placeholder="ابحث عن ملف..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={searchInputStyle}
      />
      
      <div style={containerStyle}>
      
        {/* ملفات الـ PDF الأصلية */}
        {filteredPdfs.map((file, idx) => {
          const isHovered = hovered === idx;
          let fileName = file.name;
          if (file.display.includes('بطاقة علاجية: التحليل 1') && !fileName.endsWith('.pdf')) {
            fileName = 'بطاقة علاجية التحليل 1.pdf';
          }
          return (
            <div
              key={file.name}
              style={isHovered ? { ...cardStyle, ...cardHoverStyle, position: 'relative' } : { ...cardStyle, position: 'relative' }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Trash icon for delete removed */}
              <span style={pdfIconStyle}>
                <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M6 2c-1.104 0-2 .896-2 2v24c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V10.828A2 2 0 0027.414 9.414l-6.828-6.828A2 2 0 0018.172 2H6zm0 2h12v7c0 1.104.896 2 2 2h7v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm14 0.414L25.586 10H20a1 1 0 01-1-1V4.414zM9 15h2.5c1.379 0 2.5 1.121 2.5 2.5S12.879 20 11.5 20H9v-5zm1 1v3h1.5a1.5 1.5 0 000-3H10zm5 0h1.25c.414 0 .75.336.75.75V20h-1v-1h-1v1h-1v-3.25c0-.414.336-.75.75-.75zm.75 1.5H16v1h-1v-1zm3.25-1.5h2c.414 0 .75.336.75.75v.5a.75.75 0 01-.75.75h-1.25V20h-1v-5zm1 1v1h1v-1h-1z"></path></svg>
              </span>
              <span style={cardTitleStyle}>{file.display}</span>
              <a
                href={`/Assets/Materials/ريض 151/${encodeURIComponent(fileName)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="currentColor" style={{marginLeft: 6, verticalAlign:'middle'}}><path d="M5 20h14v-2H5v2zm7-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-1.51-5.96-4.34-.07-.39.23-.75.62-.75.31 0 .58.23.62.54.41 2.5 2.89 4.13 5.39 3.72 2.5-.41 4.13-2.89 3.72-5.39-.07-.39.23-.75.62-.75.31 0 .58.23.62.54.48 2.83-1.51 5.48-4.34 5.96z"/></svg>
                فتح وتحميل
              </a>
            </div>
          );
        })}
        {/* الملفات المرفوعة من المستخدم */}
        {uploadedFiles.map((file, idx) => {
          const isHovered = hovered === `u${idx}`;
          return (
            <div
              key={file.name + idx}
              style={isHovered ? { ...cardStyle, ...cardHoverStyle, position: 'relative' } : { ...cardStyle, position: 'relative' }}
              onMouseEnter={() => setHovered(`u${idx}`)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Trash icon for delete removed */}
              <span style={pdfIconStyle}>
                {/* أيقونة حسب نوع الملف */}
                {file.type.includes("pdf") ? (
                  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M6 2c-1.104 0-2 .896-2 2v24c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V10.828A2 2 0 0027.414 9.414l-6.828-6.828A2 2 0 0018.172 2H6zm0 2h12v7c0 1.104.896 2 2 2h7v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm14 0.414L25.586 10H20a1 1 0 01-1-1V4.414zM9 15h2.5c1.379 0 2.5 1.121 2.5 2.5S12.879 20 11.5 20H9v-5zm1 1v3h1.5a1.5 1.5 0 000-3H10zm5 0h1.25c.414 0 .75.336.75.75V20h-1v-1h-1v1h-1v-3.25c0-.414.336-.75.75-.75zm.75 1.5H16v1h-1v-1zm3.25-1.5h2c.414 0 .75.336.75.75v.5a.75.75 0 01-.75.75h-1.25V20h-1v-5zm1 1v1h1v-1h-1z"></path></svg>
                ) : file.type.includes("word") || file.name.endsWith(".doc") || file.name.endsWith(".docx") ? (
                  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M6 2c-1.104 0-2 .896-2 2v24c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V10.828A2 2 0 0027.414 9.414l-6.828-6.828A2 2 0 0018.172 2H6zm0 2h12v7c0 1.104.896 2 2 2h7v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm14 0.414L25.586 10H20a1 1 0 01-1-1V4.414zM8.5 15h1.25l1.25 5 1.25-5h1.25l1.25 5 1.25-5h1.25l-2 7h-1.25l-1.25-5-1.25 5H10.5l-2-7z"></path></svg>
                ) : file.type.includes("video") || file.name.endsWith(".mp4") ? (
                  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M6 4v24l20-12L6 4z"></path></svg>
                ) : (
                  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign:'middle'}}><circle cx="16" cy="16" r="14" /></svg>
                )}
              </span>
              <span style={cardTitleStyle}>{file.name}</span>
              <a
                href={URL.createObjectURL(file)}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="currentColor" style={{marginLeft: 6, verticalAlign:'middle'}}><path d="M5 20h14v-2H5v2zm7-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-1.51-5.96-4.34-.07-.39.23-.75.62-.75.31 0 .58.23.62.54.41 2.5 2.89 4.13 5.39 3.72 2.5-.41 4.13-2.89 3.72-5.39-.07-.39.23-.75.62-.75.31 0 .58.23.62.54.48 2.83-1.51 5.48-4.34 5.96z"/></svg>
                فتح وتحميل
              </a>
            </div>
          );
        })}
        
      </div>
      <button
        style={videoButtonStyle}
        onClick={() => setShowVideo((v) => !v)}
      >
        {showVideo ? "إخفاء الفيديو" : "عرض فيديو: أعمال الطالبات"}
      </button>
      {showVideo && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <video
            src={"/Assets/Materials/ريض 151/عمل الطالبات/حل معادلات القيمة المطلقة المعلمة الصغيرة.mp4"}
            controls
            style={{ width: "100%", maxWidth: 600, borderRadius: 12, boxShadow: "0 2px 12px rgba(30,140,89,0.15)" }}
          >
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
      )}
    </div>
    </div>
  );
}
