import React, { useState } from 'react';
import api from './api';
import './App.css';

function ServiceEmail() {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");
    const [classification, setClassification] = useState("");
    const [showClassificationButton, setShowClassificationButton] = useState(false);

    const handleSendEmail = async () => {
        try {
            const response = await api.post(`/classify?email=${encodeURIComponent(subject)}`);
            setMessage("Email enviado com sucesso.");
            setShowClassificationButton(true);
        } catch (error) {
            setMessage("Erro ao enviar email. Tente novamente.");
        }
    };

    const fetchClassification = async () => {
        try {
            const response = await api.get('/history');
            if (response.data) {
                setClassification(response.data.emails[0].classification);
            }
        } catch (error) {
            console.error("Erro ao buscar classificação:", error);
        }
    };

    return (
        <div className="service-email">
            <h1 className="title">Aqui você pode escrever um email manualmente e enviar para o servidor e receber sua avaliação</h1>
            <input 
                type="text" 
                className="input-subject"
                placeholder="Subject" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
            />
            <textarea 
                className="textarea-body"
                placeholder="Body" 
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
            />
            <button className="button-send" onClick={handleSendEmail}>Enviar</button>
            {message && <p className="message">{message}</p>}
            {showClassificationButton && (
                <button className="button-fetch-classification" onClick={fetchClassification}>
                    Mostrar classificação do email
                </button>
            )}
            {classification && <h3 className="classification">Esse email é {classification}</h3>}
        </div>
    );
}

export default ServiceEmail;
