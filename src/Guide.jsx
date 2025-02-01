import React from 'react';
import './App.css'; // Certifique-se de criar e importar o arquivo CSS

function Guide() {
    return (
        <div className="guide-container">
            <div className="column">
                <h2>Passo a Passo: Upload de Arquivo</h2>
                <div className="guide-card">
                    <h3>Passo 1</h3>
                    <p>Selecione a opção acima de Upload de Emails</p>
                </div>
                <div className="guide-card">
                    <h3>Passo 2</h3>
                    <p>Clique em 'Escolher arquivo' e selecione um arquivo PDF ou TXT. Obs: O arquivo precisa estar formatado como 'Subject' e 'Body' para a leitura correta</p>
                </div>
                <div className="guide-card">
                    <h3>Passo 3</h3>
                    <p>Clique no botão de upload para enviar o arquivo.</p>
                </div>
            </div>
            <div className="column">
                <h2>Passo a Passo: Escrever um Email</h2>
                <div className="guide-card">
                    <h3>Passo 1</h3>
                    <p>Selecione a opção de 'Escrever um Email'</p>
                </div>
                <div className="guide-card">
                    <h3>Passo 2</h3>
                    <p>Preencha os campos com 'Subject' e 'Body' corretamente</p>
                </div>
                <div className="guide-card">
                    <h3>Passo 3</h3>
                    <p>Clique no botão de enviar. Importante notar que aparacerá um botão que verificará se o email enviado é importante ou não</p>
                </div>
            </div>
            <div className="column">
                <h2>FAQ</h2>
                <div className="guide-card">
                    <h3>O que acontece caso eu não insira corretamente um formato válido?</h3>
                    <p>A solicitação será recusada, por isso verifique bem o arquivo que for anexado.</p>
                </div>
                <div className="guide-card">
                    <h3>Como posso garantir que o email foi enviado / upado ?</h3>
                    <p>Ele aparecerá nas abas de email após seu processamento no servidor, sugiro que dê uma atualização na página para garantir a visualização.</p>
                </div>
                <div className="guide-card">
                    <h3>Como entro em contato com o suporte caso algo dê errado?</h3>
                    <p>Para entrar em contato para tratar de qualquer dúvidas a respeito das funcionalidades, pode me acionar nas redes sociais localizadas no rodapé da página.</p>
                </div>
            </div>
        </div>
    );
}

export default Guide;