import styled from '@emotion/styled';
import DockerNavigation from './Navigation';
import { useTheme } from '@emotion/react';

const Inner = styled.div`
  max-width: 1250px;
  padding: 0 20px;
  margin: auto;
`;

const Container = styled.div<{ [key: string]: any }>`
  width: 100%;
  height: 100vh;
  // background-color: ${({ theme }) => theme.colors.blue[900]};
  background-color: #121043;
`;

const Docker = () => {
  const theme = useTheme();
  return (
    <>
      <DockerNavigation />
      <Container theme={theme}>
        <Inner></Inner>;
      </Container>
    </>
  );
};

export default Docker;
