import React, { useEffect, useState, useCallback } from "react";

import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import CardNaver from "../../components/CardNaver";
import { useNaver, Naver } from "../../context/NaverContext";
import { Container, Content, HeaderContent, ListNavers } from "./styles";
import ModalConfirmRemoveNaver from "../../components/ModalConfirmRemoveNaver";
import ModalMessage from "../../components/ModalMessage";

const Navers: React.FC = () => {
  const [currentDeleteNaver, setCurrentDeleteNaver] = useState("");
  const [
    showMoldaConfirmDeleteNaver,
    setModalShowConfirmDeleteNaver,
  ] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [navers, setNavers] = useState<Naver[]>([]);

  const history = useHistory();
  const { loadNavers, deleteNaver } = useNaver();

  const loadAllNavers = useCallback(async () => {
    const navers = await loadNavers();

    setNavers(navers);
  }, [loadNavers]);

  useEffect(() => {
    loadAllNavers();
  }, [loadAllNavers]);

  function handleMoveToCreateNaver() {
    history.push("/create-naver");
  }

  const OpenModalRemoveNaver = useCallback((id: string) => {
    setCurrentDeleteNaver(id);
    setModalShowConfirmDeleteNaver(true);
  }, []);

  const CloseModalRemoveNaver = useCallback(() => {
    setCurrentDeleteNaver("");
    setModalShowConfirmDeleteNaver(false);
  }, []);

  const handleRemoveNaverAndOpenModalMessage = useCallback(async () => {
    setModalShowConfirmDeleteNaver(false);
    await deleteNaver(currentDeleteNaver);
    await loadAllNavers();
    setShowModalMessage(true);
  }, [currentDeleteNaver, deleteNaver, loadAllNavers]);

  const closeModalMessage = useCallback(async () => {
    setShowModalMessage(false);
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <HeaderContent>
            <h1>Navers</h1>
            <Button onClick={handleMoveToCreateNaver}>Adicionar Never</Button>
          </HeaderContent>
          <ListNavers>
            {navers.map((naver) => (
              <CardNaver
                key={naver.id}
                naver={naver}
                OpenModalRemoveNaver={OpenModalRemoveNaver}
              />
            ))}
          </ListNavers>
        </Content>
      </Container>
      <ModalConfirmRemoveNaver
        onDelete={handleRemoveNaverAndOpenModalMessage}
        show={showMoldaConfirmDeleteNaver}
        onHide={CloseModalRemoveNaver}
      />
      <ModalMessage
        show={showModalMessage}
        onHide={closeModalMessage}
        title="Naver excluído"
        message="Naver excluído com sucesso"
      />
    </>
  );
};

export default Navers;
