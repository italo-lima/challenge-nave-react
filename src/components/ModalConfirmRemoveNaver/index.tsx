import React from "react";

import { ModalProps } from "react-bootstrap";
import { Container, Header, Title, Body, Cancel } from "./styles";
import Button from "../Button";

interface Props extends ModalProps {
  show: boolean;
  onHide: () => void;
  onDelete: () => void;
}

const ModalConfirmRemoveNaver: React.FC<Props> = ({
  show,
  onHide,
  onDelete,
}) => {
  return (
    <Container show={show} backdrop="static" keyboard={false} className="xs">
      <Header>
        <Title>Excluir naver</Title>
      </Header>
      <Body>
        <p>Tem certeza que deseja excluir este naver?</p>
        <div>
          <Cancel type="button" onClick={onHide}>
            Cancelar
          </Cancel>
          <Button onClick={onDelete}>Excluir</Button>
        </div>
      </Body>
    </Container>
  );
};

export default ModalConfirmRemoveNaver;
