import styled from "styled-components";

export const Container = styled.header`
  height: 85px;
  padding: 0 30px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 170px;
  }

  button {
    display: flex;
    align-items: center;
    background: none;

    p {
      line-height: 24px;
      font-weight: 600;
    }
  }
`;

export const Logout = styled.button``;
