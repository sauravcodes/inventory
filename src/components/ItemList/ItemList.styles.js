import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemDiv = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 36px;
  width: 1666px;
  border: 2.5px solid goldenrod;
  border-radius: 10px;
  justify-content: space-evenly;
  @media screen and (max-width: 960px) {
    width: 300px;
    font-size: 16px;
  }
`;
export const NameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  width: 150px;
  @media screen and (max-width: 960px) {
    width: 25px;
    margin-left: 6px;
  }
`;
export const DescDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  @media screen and (max-width: 960px) {
    width: 100px;
  }
`;
export const PriceDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  width: 100px;
  @media screen and (max-width: 960px) {
    width: 25px;
    margin-right: 6px;
  }
`;

export const Button = styled.button`
  border: none;
  letter-spacing: 4px;
  font-family: "Fjalla One", sans-serif;
  cursor: pointer;
  height: 50px;
  width: 100px;
  border-radius: 3px;
  outline: none;
  padding: 12px;
  font-size: 16px;
  background: ${(props) => (props.remove ? "#f44336" : "#0004")};
  margin-right: 6px;
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    font-size: 15px;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
    padding: 4px;
    height: 30px;
    width: 50px;
    letter-spacing: 1px;
  }
`;
