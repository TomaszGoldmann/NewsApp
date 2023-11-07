import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  margin-top: 10px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  &:hover{
    transition: 0.2s ease-out;
    background-color: white;
    scale: 0.9;
    opacity: 0.9;
  }
  &:active {
    scale: 0.8;
  }
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
