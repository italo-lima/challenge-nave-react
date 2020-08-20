import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/logo.png";

import { useAuth } from "../../context/AuthContext";

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Nave" />
      </Link>

      <button type="button" onClick={signOut}>
        <p>Sair</p>
      </button>
    </Container>
  );
};

export default Header;
