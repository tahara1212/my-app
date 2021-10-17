import styled from "styled-components";

export const SPDrawer = () => {
  return <SDrawer></SDrawer>;
};

const SDrawer = styled.nav`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: red;
  /* opacity: 0.5; */
  z-index: 200;
`;
