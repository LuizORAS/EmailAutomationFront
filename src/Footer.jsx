import React from "react";
import './App.css';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer id="footer">
            <p>PROJETO FEITO POR LUIZ FELIPE DE LIMA BARBOSA</p>
            <ul className="footer-icon">
                <li><a href="https://www.linkedin.com/in/luiz-felipe-de-lima-barbosa" target="_blank"><FaLinkedin size={22} /></a></li>
                <li><a href="https://www.instagram.com/luizlimabrb/" target="_blank"><FaInstagram size={22} /></a></li>
                <li><a href="https://github.com/LuizORAS" target="_blank"><FaGithub size={22} /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;