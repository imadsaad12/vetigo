import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 101%;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b9a72;
  margin-bottom: 10;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  align-items: center;
  height: 150;
  width: 80%;
  align-self: center;
  background-color: #5b9a72;
  margin-bottom: 20;
`;
