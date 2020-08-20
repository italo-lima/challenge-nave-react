import styled from "styled-components";
import { Modal } from "react-bootstrap";
import Button from "../../components/Button";
import { shade } from "polished";

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
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #212121;
`;

export const Body = styled(Modal.Body)`
  padding-left: 30px;

  > p {
    font-size: 16px;
    font-weight: normal;
    line-height: 36px;
    color: #212121;
  }

  > div {
    display: flex;
    justify-content: flex-end;

    button {
      width: 180px;

      & + button {
        margin-left: 15px;
      }
    }
  }
`;

export const Cancel = styled(Button)`
  background: #fff;
  border: 1px solid #212121;
  color: #212121;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.05, "#fff")};
  }
`;
