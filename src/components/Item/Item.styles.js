import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemsDiv = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const AddItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 800px;
  border: 5px solid goldenrod;
  border-radius: 10px;
  margin: 24px;
  @media screen and (max-width: 960px) {
    height: 200px;
    width: 300px;
    border: 2px solid goldenrod;
    border-radius: 10px;
    margin: 12px;
  }
`;
export const Input = styled.input`
  display: flex;
  font-family: "Original Surfer", cursive;
  font-size: 24px;
  width: 70%;
  margin: 24px;
  padding: 12px;
  background: papayawhip;
  border: none;
  outline: none;
  border-radius: 10px;
  ::placeholder {
    color: palevioletred;
  }
  @media screen and (max-width: 960px) {
    font-size: 14px;
    width: 80%;
    margin: 6px;
    padding: 6px;
  }
`;

export const Button = styled.button`
  font-size: 30px;
  font-family: "Fjalla One", sans-serif;
  letter-spacing: 5px;
  margin: 24px;
  padding: 24px;
  width: 74%;
  cursor: pointer;
  background: ${(props) => (props.add ? "#4caf50" : "#008cba")};
  border-radius: 10px;
  border: none;
  outline: none;
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    font-size: 29px;
  }
  &:disabled {
    opacity: 0.8;
  }
  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin: 6px;
    padding: 6px;
    width: 85%;
    letter-spacing: 2px;
    opacity: 0.9;
    &:hover {
      opacity: 1;
      font-size: 13px;
    }
  }
`;
export const TextDiv = styled.p`
  font-size: 36px;
  font-family: "Original Surfer", cursive;
  padding: 0;
  color: #0009;
  @media screen and (max-width: 960px) {
    font-size: 16px;
    text-align: center;
    padding: 0 36px 0 36px;
  }
`;
