import React, { useState, useCallback } from "react";

import {
  Container,
  ActionsNaver,
  Content,
  ContentNaver,
  NaverName,
  NaverJob,
} from "./styles";
import { IoMdTrash, IoMdCreate } from "react-icons/io";
import ModalInfoNaver from "../ModalInfoNaver";
import { Naver } from "../../context/NaverContext";
import { useHistory } from "react-router-dom";

interface Props {
  naver: Naver;
  OpenModalRemoveNaver: (id: string) => void;
}

const CardNaver: React.FC<Props> = ({ naver, OpenModalRemoveNaver }) => {
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  function closeModal() {
    setModalShow(false);
  }

  function openModal() {
    setModalShow(true);
  }

  function handleMoveToEditNaver(id: string) {
    history.push(`/edit-naver/${id}`, { naver_id: id });
  }

  const handleExcludeNaverAndCloseModalInfo = useCallback(
    (id: string) => {
      closeModal();
      OpenModalRemoveNaver(id);
    },
    [OpenModalRemoveNaver]
  );

  return (
    <>
      <Container>
        <Content onClick={openModal}>
          <img src={naver.url} alt={naver.name} />
          <ContentNaver>
            <NaverName>{naver.name}</NaverName>
            <NaverJob>{naver.job_role}</NaverJob>
          </ContentNaver>
        </Content>
        <ActionsNaver>
          <button onClick={() => OpenModalRemoveNaver(naver.id)} type="button">
            <IoMdTrash size={24} />
          </button>
          <button onClick={() => handleMoveToEditNaver(naver.id)} type="button">
            <IoMdCreate size={24} />
          </button>
        </ActionsNaver>
      </Container>
      <ModalInfoNaver
        naver={naver}
        show={modalShow}
        onHide={closeModal}
        onDelete={handleExcludeNaverAndCloseModalInfo}
      />
    </>
  );
};

export default CardNaver;
