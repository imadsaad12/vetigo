import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
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
  flex-direction: column;
  justify-content: center;
  padding-left: 10;
  padding-right: 10;
  align-items: center;
  width: 100%;
  margin-bottom: 20;
  gap: 10;
`;
