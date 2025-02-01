import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { ImHome } from "react-icons/im";
import { FaUpload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdHelpCircle } from "react-icons/io";
import api from './api';

function Header() {
    const navigate = useNavigate();
    const [emailCount, setEmailCount] = useState(0);
    const [productiveCount, setProductiveCount] = useState(0);
    const [improductiveCount, setImproductiveCount] = useState(0);

    useEffect(() => {
        const fetchEmailCounts = async () => {
            try {
                const response = await api.get('/history');
                if (response.data && Array.isArray(response.data.emails)) {
                    const emails = response.data.emails;
                    setEmailCount(emails.length);
                    setProductiveCount(emails.filter(email => email.classification === 'important').length);
                    setImproductiveCount(emails.filter(email => email.classification === 'not important').length);
                } else {
                    console.error("Unexpected response data format:", response.data);
                }
            } catch (error) {
                console.error("Erro ao buscar histórico de emails:", error);
            }
        };

        fetchEmailCounts();
    }, []);

    return (
        <header id="header">
            <p id="pHeader">AUTOMATIZADOR DE EMAILS - AutoMail</p>
            <nav id="navHeader">
                <ImHome size={80} className="home-icon" onClick={() => navigate('/home')} title="Home" />
                <ul className="ul-emails">
                    <li>
                        <Link to="/AllEmail" >TODOS <span id="countAll">({emailCount})</span></Link>
                    </li>
                    <li>
                        <Link to="/ProductiveEmail">PRODUTIVOS <span id="countProd">({productiveCount})</span></Link>
                    </li>
                    <li>
                        <Link to="ImproductiveEmail">IMPRODUTIVOS <span id="countImprod">({improductiveCount})</span></Link>
                    </li>
                </ul>
                <ul className="ul-options">
                    <li onClick={() => navigate('/UploadEmail')}>
                        Upload de Emails<span className="icon-li-header"><FaUpload size={22}/></span>
                    </li>
                    <li onClick={() => navigate('/ServiceEmail')}>
                        Escrever um Email<span className="icon-li-header"><HiOutlineMail size={22}/></span>
                    </li>
                    <li onClick={() => navigate('/Guide')}>
                        Ajuda<span className="icon-li-header"><IoMdHelpCircle size={22}/></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;