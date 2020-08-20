import React from "react";

import { ModalProps } from "react-bootstrap";
import { Container, Header, Title, Body } from "./styles";

interface Props extends ModalProps {
  title: string;
  message: string;
  show: boolean;
  onHide: () => void;
}

const ModalMessage: React.FC<Props> = ({ show, onHide, title, message }) => {
  return (
    <Container
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      className="xs"
    >
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>{message}</Body>
    </Container>
  );
};

export default ModalMessage;
