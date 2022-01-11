import styled from "styled-components";

export const Toggler = styled.button`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.toggleIcon};
  background-color: transparent;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 5px;
    right: 50%;
    transform: translate(50%, 0%);
  }
`;
