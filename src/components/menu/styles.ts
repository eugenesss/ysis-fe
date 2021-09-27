import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;

  @media (max-width: 600px) {
    min-height: 54px;
  }
`;
