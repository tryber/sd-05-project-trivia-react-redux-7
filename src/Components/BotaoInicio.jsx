import React from 'react';
import { Link } from 'react-router-dom';

const buttonHome = () => (
  <Link to="/pages/Inicio" datatest-id="btn-go-home">Voltar à Página Inicial</Link>
);

export default buttonHome;
