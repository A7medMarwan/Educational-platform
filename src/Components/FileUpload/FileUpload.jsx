import React, { useState, useRef, useEffect } from "react";
import { supabase } from "../../supabaseClient.js";

export default function FileUpload({ onFilesAdded, folderName = 'math151', onFilesListed }) {
  const [files, setFiles] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef();

  // Fetch files from Supabase Storage
  useEffect(() => {
    const fetchFiles = async () => {
      if (!authorized) return;
      const { data, error } = await supabase.storage
        .from('uploads')
        .list(folderName + '/', { limit: 100, offset: 0 });
      if (onFilesListed) onFilesListed(data ? data.filter(f => f.name) : [], uploading);
    };
    fetchFiles();
    // eslint-disable-next-line
  }, [folderName, authorized, uploading]);

  // Handle file upload to Supabase
  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    if (onFilesAdded) {
      onFilesAdded(selectedFiles);
    }
    setUploading(true);
    for (const file of selectedFiles) {
      await supabase.storage
        .from('uploads')
        .upload(`${folderName}/${file.name}`, file, { upsert: true });
    }
    setUploading(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    if (onFilesAdded) {
      onFilesAdded(droppedFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "Math4MBH") {
      setAuthorized(true);
      setError("");
    } else {
      setError("كلمة المرور غير صحيحة. الرجاء المحاولة مرة أخرى.");
    }
  };

  // Get public URL for a file
  const getPublicUrl = (fileName) => {
    return supabase.storage.from('uploads').getPublicUrl(`${folderName}/${fileName}`).data.publicUrl;
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      {!authorized && (
        <form onSubmit={handlePasswordSubmit} style={{
          maxWidth: 350,
          margin: "0 auto 2rem auto",
          background: "#fff",
          borderRadius: 14,
          boxShadow: "0 2px 12px 0 rgba(30,140,89,0.07)",
          padding: "2rem 1.5rem 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <span style={{ fontWeight: 600, color: "#1e8c59", fontSize: "1.15rem", marginBottom: 12 }}>
            إضافة الملفات غير مسموح بدون إذن
          </span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: 8,
              border: "1.5px solid #1e8c59",
              fontSize: "1.1rem",
              outline: "none",
              marginBottom: 10,
              width: "100%"
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.7rem 2.2rem",
              fontWeight: "bold",
              fontSize: "1.08rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(30,140,89,0.13)",
              transition: "background 0.18s, color 0.18s, box-shadow 0.18s"
            }}
          >
            دخول
          </button>
          {error && <div style={{ color: "#e53935", marginTop: 10, fontWeight: 500 }}>{error}</div>}
        </form>
      )}
      {authorized && (
        <>
          <div
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              border: "2px dashed #1e8c59",
              borderRadius: 16,
              background: "linear-gradient(135deg, #f8fffc 80%, #e8f5ee 100%)",
              padding: "2.5rem 1rem 1.5rem 1rem",
              textAlign: "center",
              cursor: "pointer",
              transition: "border 0.18s, box-shadow 0.18s",
              boxShadow: "0 2px 12px 0 rgba(30,140,89,0.07)",
              position: "relative",
            }}
          >
            <input
              type="file"
              accept=".mp4,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              multiple
              onChange={handleFileChange}
              ref={inputRef}
              style={{ display: "none" }}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <svg width="2.5em" height="2.5em" viewBox="0 0 48 48" fill="none" style={{ color: "#1e8c59", marginBottom: 8 }}>
                <rect x="8" y="8" width="32" height="32" rx="8" fill="#e8f5ee"/>
                <path d="M16 32V20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" stroke="#1e8c59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 16v16" stroke="#1e8c59" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 28l4 4 4-4" stroke="#1e8c59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontWeight: 600, color: "#1e8c59", fontSize: "1.15rem", marginBottom: 4 }}>
                اسحب الملفات هنا أو اضغط للاختيار
              </span>
              <span style={{ color: "#555", fontSize: "0.98rem" }}>
                يمكنك رفع فيديو، PDF أو Word
              </span>
            </div>
          </div>
          {files.length > 0 && (
            <div style={{ marginTop: "1.2rem", background: "#f8fffc", borderRadius: 12, boxShadow: "0 1px 6px rgba(30,140,89,0.07)", padding: "1rem" }}>
              <strong style={{ color: "#1e8c59" }}>الملفات المختارة:</strong>
              <ul style={{ listStyle: "none", padding: 0, margin: "0.7rem 0 0 0" }}>
                {files.map((file, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, background: "#fff", borderRadius: 8, padding: "6px 12px", boxShadow: "0 1px 4px rgba(30,140,89,0.06)" }}>
                    {/* Icon by type */}
                    <span style={{ fontSize: "1.3em", color: file.type.includes("pdf") ? "#e53935" : file.type.includes("word") || file.name.endsWith(".doc") || file.name.endsWith(".docx") ? "#1976d2" : file.type.includes("video") || file.name.endsWith(".mp4") ? "#43a047" : "#1e8c59" }}>
                      {file.type.includes("pdf") ? (
                        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M6 2c-1.104 0-2 .896-2 2v24c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V10.828A2 2 0 0027.414 9.414l-6.828-6.828A2 2 0 0018.172 2H6zm0 2h12v7c0 1.104.896 2 2 2h7v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm14 0.414L25.586 10H20a1 1 0 01-1-1V4.414zM9 15h2.5c1.379 0 2.5 1.121 2.5 2.5S12.879 20 11.5 20H9v-5zm1 1v3h1.5a1.5 1.5 0 000-3H10zm5 0h1.25c.414 0 .75.336.75.75V20h-1v-1h-1v1h-1v-3.25c0-.414.336-.75.75-.75zm.75 1.5H16v1h-1v-1zm3.25-1.5h2c.414 0 .75.336.75.75v.5a.75.75 0 01-.75.75h-1.25V20h-1v-5zm1 1v1h1v-1h-1z"></path></svg>
                      ) : file.type.includes("word") || file.name.endsWith(".doc") || file.name.endsWith(".docx") ? (
                        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M6 2c-1.104 0-2 .896-2 2v24c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V10.828A2 2 0 0027.414 9.414l-6.828-6.828A2 2 0 0018.172 2H6zm0 2h12v7c0 1.104.896 2 2 2h7v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm14 0.414L25.586 10H20a1 1 0 01-1-1V4.414zM8.5 15h1.25l1.25 5 1.25-5h1.25l1.25 5 1.25-5h1.25l-2 7h-1.25l-1.25-5-1.25 5H10.5l-2-7z"></path></svg>
                      ) : file.type.includes("video") || file.name.endsWith(".mp4") ? (
                        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M6 4v24l20-12L6 4z"></path></svg>
                      ) : (
                        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="14" /></svg>
                      )}
                    </span>
                    <span style={{ flex: 1, fontSize: "1.04em", color: "#222", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{file.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {uploading && <p>Uploading...</p>}
        </>
      )}
    </div>
  );
} 