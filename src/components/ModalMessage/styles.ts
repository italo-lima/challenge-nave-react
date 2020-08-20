import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const Container = styled(Modal)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 576px) {
    .modal-header .close {
      color: #212121;
      font-size: 34px;
    }

    .modal-dialog {
      max-width: 780px !important;
      width: 100%;
    }
  }
`;

export const Header = styled(Modal.Header)`
  border-bottom: 0px !important;
  padding-left: 30px;
`;

export const Title = styled(Modal.Title)`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: #212121;
`;

export const Body = styled(Modal.Body)`
  padding-left: 30px;
  font-size: 16px;
  font-weight: normal;
  line-height: 36px;
  color: #212121;
`;
