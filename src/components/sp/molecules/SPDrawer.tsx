import { memo, VFC } from "react";
import styled, { keyframes } from "styled-components";

import variable from "../../../css/variables.json";
import { SPHeaderList } from "../../sp/atoms/SPHeaderList";

type Props = {
  open: boolean;
  onClickMenuDrawer: () => void;
};

export const SPDrawer: VFC<Props> = memo((props) => {
  const { open, onClickMenuDrawer } = props;
  const headerListName = ["About", "History", "Works", "Skils", "Contact"];
  return (
    <SDrawer className={open ? "isOpen" : "isClose"}>
      <SNav>
        <SUl>
          {headerListName.map((name, index) => (
            <SPHeaderList
              open={open}
              idName={name}
              delay={index}
              onClickMenuDrawer={onClickMenuDrawer}
            />
          ))}
        </SUl>
      </SNav>
    </SDrawer>
  );
});

const KFDrawer = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SDrawer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${variable.subColor};
  opacity: 0.95;
  z-index: 10;
  touch-action: none;
  /* animation: ${KFDrawer} 0.4s; */
  transition: all 0.6s ease-out;
  opacity: 0.95;

  &.isOpen {
    visibility: visible;
  }

  &.isClose {
    opacity: 0;
    visibility: hidden;
  }
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
