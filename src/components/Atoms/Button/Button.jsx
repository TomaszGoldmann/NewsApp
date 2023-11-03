import styled, {css} from "styled-components";

export const Button = styled.button`
  background-color: ${({theme}) => theme.primary || '220px'};;
  width: ${({width}) => width || '220px'};
  color: ${(props) => props.theme.secondary};
  height: 150px;
  border-radius: 15px;
  margin-right: 20px;

  ${({secondary}) =>
          secondary &&
          css`
            background-color: tomato;
          `
  }
`