import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} مدرسة المحرق الثانوية - قسم الرياضيات</p>
    </footer>
  );
}
