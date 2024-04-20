import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  align-self: center;
  margin-top: -20px;
  font-size: 15px;
  color: gray;
  text-decoration: underline;
`;
export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
  top: 30%;
  z-index: 1000;
  position: absolute;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  width: 80%;
  height: 50px;
  border: 2px solid gray;
  border-radius: 10px;
  align-self: center;
  padding-left: 20px;
`;

export const CustomizedButton = styled.Button``;

export const Pressable = styled.Pressable`
  background-color: "green";
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

export const ImageContainer = styled.View`
  width: 95%;
  height: 400px;
  position: relative;
`;

export const InputsContainer = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  margin-top: 20;
`;
