import { FC } from 'react';
import styled from '@emotion/styled';

interface IProps {
  content: string;
}

const LogoWrapper = styled.div``;

const Logo: FC<IProps> = ({ content = 'The Dummies' }) => {
  return <LogoWrapper>{content}</LogoWrapper>;
};

export default Logo;
