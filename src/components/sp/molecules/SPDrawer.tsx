import styled from "styled-components";

import variable from "../../../css/variables.json";
import { HeaderList } from "../../pc/atoms/HeaderList";

export const SPDrawer = () => {
  return (
    <SDrawer>
      <SNav>
        <SUl>
          <HeaderList idName="About" />
          <HeaderList idName="History" />
          <HeaderList idName="Works" />
          <HeaderList idName="Skils" />
          <HeaderList idName="Contact" />
        </SUl>
      </SNav>
    </SDrawer>
  );
};

const SDrawer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${variable.subColor};
  opacity: 0.95;
  z-index: 10;
  touch-action: none;
`;

const SNav = styled.nav`
  /* width: 50%; */
  /* line-height: 5; */
  /* margin: 0 auto; */
  font-size: 2rem;
  text-align: center;
`;

const SUl = styled.ul`
  /* display: flex; */
  width: 140px;
  margin: 0 auto;
  list-style: none;
  /* display: inline-block; */
  /* justify-content: space-around; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
