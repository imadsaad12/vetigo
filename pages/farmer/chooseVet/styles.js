import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b9a72;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 8%;
  background-color: #5b9a72;
  padding-left: 10;
  padding-right: 10;
  margin-top: -50;
`;
