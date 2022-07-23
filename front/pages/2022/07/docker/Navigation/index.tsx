import styled from '@emotion/styled';

const Nav = styled.nav`
  width: 100%;
  background-color: #fff;
  height: 50px;
  padding: 0 20px;
  box-shadow: rgba(255, 255, 255, 0.2) 8px 4px 12px;
  position: fixed;
`;

const Main = styled.main``;

const DockerNavigation = () => {
  return <Nav>도커 네비게이션</Nav>;
};

export default DockerNavigation;
