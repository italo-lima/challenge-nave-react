import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #424242;

  input {
    color: #000;
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #9e9e9e;
    }
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: #c53030;
  padding-left: 10px;
`;

export const Label = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 5px;
  display: flex;
`;
