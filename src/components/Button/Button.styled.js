import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content:end;

  button {
    padding: 18px 28px;

    border-radius: 5px;
    border-color: transparent;
    cursor: pointer;
    background-color: #85649e;
    color: beige;
  }

  button:hover {
    background-color: #9400d3;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.5);
  }
`;
