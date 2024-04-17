import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Header = styled.Text`
  font-size: 40;
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  margin-top: 140;
  color: white;
  text-transform: uppercase;
  line-height: 50;
`;

export const SelectionContainer = styled.View`
  width: 100%;
  background-color: #fffffe;
  border-top-right-radius: 70;
  border-top-left-radius: 70;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  height: 60%;
  padding-top: 20;
`;

export const Option = styled.View`
  width: 80%;
  height: 35%;
  border-radius: 20;
`;
