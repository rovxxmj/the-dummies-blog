import React, { CSSProperties, FC, useMemo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
interface IButton {
  value: string | React.ReactNode;
  onClick: () => void;
  style?: CSSProperties;
}

export const ButtonCreator = styled.button<{ [key: string]: any }>`
  font-size: 23px;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[700]};
  border: none;
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.purple[500]};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.purple[500]};
  }
`;

const Button: FC<IButton> = ({ value, onClick, style }) => {
  const theme = useTheme();
  const newStyle = useMemo(() => ({ ...style }), []);
  return (
    <ButtonCreator theme={theme} onClick={onClick} style={newStyle}>
      {value}
    </ButtonCreator>
  );
};

export default Button;
