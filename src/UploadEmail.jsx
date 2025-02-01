import React, { useState } from 'react';
import api from './api';
import './App.css';

const UploadEmail = ({ refreshEmailCount }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [emailContent, setEmailContent] = useState({ subject: "", body: "" });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type === "application/pdf" || selectedFile.type === "text/plain")) {
      setFile(selectedFile);
      setMessage("");
    } else {
      setMessage("Por favor, selecione um arquivo PDF ou TXT.");
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Selecione um arquivo antes de enviar.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/update-file", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const { subject, body } = response.data;
      setEmailContent({ subject, body });
      setMessage("Arquivo enviado com sucesso.");
      refreshEmailCount(); // Call the function to refresh the email count
    } catch (error) {
      setMessage("Erro ao enviar arquivo. Tente novamente.");
    }
  };

  return (
    <div className="div-uploadEmail">
      <h2>Upload de Email (PDF ou TXT)</h2>
      <input type="file" onChange={handleFileChange} accept=".pdf, .txt" />
      <button className="button-uploadEmail" onClick={handleUpload}>Enviar</button>
      {message && (
        message === "Arquivo enviado com sucesso." ? (
          <p className='correctMessage'>{message}</p>
        ) : (
          <p>{message}</p>
        )
      )}
      {emailContent.subject && emailContent.body && (
        <div className="email-content">
          <h3>Subject: {emailContent.subject}</h3>
          <p>Body: {emailContent.body}</p>
        </div>
      )}
    </div>
  );
};

export default UploadEmail;