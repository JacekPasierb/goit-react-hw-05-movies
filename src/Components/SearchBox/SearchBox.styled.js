import styled from "styled-components";

export const Input = styled.input`
  border:none;
  
min-height:40px;

text-align:center;
outline-style:none;


`;
export const Button = styled.button`
  border: none;
  border-radius: 0 30% 30% 0;
  min-height: 40px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: lightblue;
  transition: background-color 500ms;
  &:hover {
    background-color: lightgrey;
  }
`;
export const Form = styled.form`
display:flex;
flex-direction:row;
`