import styled from 'styled-components';

export const Header = styled.header`
margin-bottom: 40px;
  background-color: #aac4a3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  button {

    padding: 4px 10px;
    margin-right: 24px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #e5e4d8;
  }

  button:hover {
    background-color: #979aaa;
    color: beige;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  input {
    outline: none;
    width: 200px;
    height: 20px;
    border-color: #979aaa;
    border-radius: 5px;
  }
`;
