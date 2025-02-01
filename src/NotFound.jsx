import React from 'react';
import './App.css';

function NotFound() {
    return (
        <div className='div-notfound'>
            <h1>Página não encontrada.</h1>
            <br />
            <h2>Por favor, retorne para a <a className='notfound-anchor' href="/">Home</a></h2>
        </div>
    );
}

export default NotFound;