import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Test: React.FC = () => {
  return (
    <div className="container">
      <header>
        <div className="block first-block">
          <h1>Prova de Conhecimentos Gerais</h1>

          <span>Sua resposta foi registrada.</span>

          <div className="link-goback">
            <Link to="/">Enviar outra resposta</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Test;
