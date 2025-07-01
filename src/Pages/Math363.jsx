import React, { useState } from "react";
import FileUpload from "../Components/FileUpload/FileUpload";

const pdfFiles = [
  { name: "بطاقة عمل علاجية التكامل غير المحدد2.pdf", display: "بطاقة عمل علاجية: التكامل غير المحدد 2" },
  { name: "‫‫بطاقة عمل علاجية التكامل غير المحدد 1.pdf", display: "بطاقة عمل علاجية: التكامل غير المحدد 1" },
  { name: "‫‫بطاقة علاجية تعيين النقاط على المستوى البياني.pdf", display: "بطاقة علاجية: تعيين النقاط على المستوى البياني" },
  { name: "‫‫بطاقة علاجية تفاعلية حل المعادلة الخطية 1.pdf", display: "بطاقة علاجية: حل المعادلة الخطية 1" },
  { name: "‫‫بطاقة علاجيةتمثيل الدالة الخطية.pdf", display: "بطاقة علاجية: تمثيل الدالة الخطية" },
  { name: "‫‫‫بطاقة علاجية التحليل 1.pdf", display: "بطاقة علاجية: التحليل 1" },
  { name: "‫‫‫بطاقة علاجيةالنسب المثلثية.pdf", display: "بطاقة علاجية: النسب المثلثية" },
  { name: "‫‫‫بطاقة علاجيةقواعد الإشتقاق.pdf", display: "بطاقة علاجية: قواعد الإشتقاق" },
  { name: "‫‫‫‫بطاقة علاجية التحليل 2.pdf", display: "بطاقة علاجية: التحليل 2" },
];

const cardStyle = {
  boxShadow: "0 4px 24px 0 rgba(30,140,89,0.13)",
  borderRadius: "18px",
  padding: "2.2rem 1.5rem 1.5rem 1.5rem",
  background: "#fff",
  margin: "0.8rem",
  flex: "1 1 260px",
  minWidth: "240px",
  maxWidth: "340px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1.5px solid #1e8c59",
  transition: "transform 0.18s, box-shadow 0.18s, border 0.18s",
  position: "relative",
  cursor: "pointer",
};

// const cardHoverStyle = {
//   boxShadow: "0 8px 32px 0 rgba(30,140,89,0.22)",
//   border: "2px solid #0d2c1f",
//   transform: "translateY(-6px) scale(1.03)",
// };

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.2rem",
  padding: "1.5rem 0",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  marginTop: "1.2rem",
  border: "none",
  borderRadius: "8px",
  padding: "0.7rem 2.2rem",
  background: "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)",
  boxShadow: "0 2px 8px rgba(30,140,89,0.13)",
  transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
  display: "inline-block",
  cursor: "pointer",
  letterSpacing: "0.5px",
};

const cardTitleStyle = {
  fontSize: "1.18rem",
  marginBottom: "0.7rem",
  textAlign: "center",
  color: "#0d2c1f",
  fontWeight: "bold",
  minHeight: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
const cardHoverStyle = {
  boxShadow: "0 8px 32px 0 rgba(30,140,89,0.22)",
  border: "2px solid #1e8c59",
  transform: "translateY(-8px) scale(1.045)",
  background: "linear-gradient(135deg, #f1fff8 60%, #d0f5e8 100%)"
};
export default function Math363() {
  const [hovered, setHovered] = useState(null);
  const [search, setSearch] = useState("");
  const filteredPdfs = pdfFiles.filter(f => f.display.toLowerCase().includes(search.toLowerCase()));
  return (
    <div style={{ background: "var(--secondary)", paddingBlock: "20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ textAlign: "center", color: "#0d2c1f", marginBottom: "2rem", fontSize: "2rem", fontWeight: 700 }}>
          تحميل الملفات
        </h1>
        <FileUpload />
         <input
        type="text"
        placeholder="ابحث عن ملف..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={searchInputStyle}
      />
      <div style={containerStyle}>
        {filteredPdfs.map((file, idx) => (
          <div
            key={file.name}
            style={hovered === idx ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={pdfIconStyle}>
              <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M6 2c-1.104 0-2 .896-2 2v24c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V10.828A2 2 0 0027.414 9.414l-6.828-6.828A2 2 0 0018.172 2H6zm0 2h12v7c0 1.104.896 2 2 2h7v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm14 0.414L25.586 10H20a1 1 0 01-1-1V4.414zM9 15h2.5c1.379 0 2.5 1.121 2.5 2.5S12.879 20 11.5 20H9v-5zm1 1v3h1.5a1.5 1.5 0 000-3H10zm5 0h1.25c.414 0 .75.336.75.75V20h-1v-1h-1v1h-1v-3.25c0-.414.336-.75.75-.75zm.75 1.5H16v1h-1v-1zm3.25-1.5h2c.414 0 .75.336.75.75v.5a.75.75 0 01-.75.75h-1.25V20h-1v-5zm1 1v1h1v-1h-1z"></path></svg>
            </span>
            <span style={cardTitleStyle}>{file.display}</span>
            <a
              href={`/Assets/Materials/ريض 363/${encodeURIComponent(file.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              فتح وتحميل
            </a>
          </div>
        ))}
      </div>
      </div>
      
    
      
     
    </div>
    
  );
}
