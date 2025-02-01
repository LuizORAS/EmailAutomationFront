import React, { useEffect, useState } from 'react';
import api from './api';
import './App.css';

function ImproductiveEmail() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await api.get('/history');
                if (response.data && Array.isArray(response.data.emails)) {
                    const filteredEmails = response.data.emails.filter(email => email.classification === 'not important');
                    setEmails(filteredEmails);
                } else {
                    console.error("Unexpected response data format:", response.data);
                }
            } catch (error) {
                console.error("Erro ao buscar histórico de emails:", error);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div className="all-emails-container">
            <h1 className="h1-allEmailcontainer">Aqui estão os emails improdutivos</h1>
            <div className="emails-list">
                {emails.map(email => (
                    <div key={email.id} className="email-card">
                        <h3>{email.subject}</h3>
                        <p>Classificação: {email.classification}</p>
                        <p>Data de Envio: {email.processed_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImproductiveEmail;