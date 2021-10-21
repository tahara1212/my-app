import { memo, VFC } from "react";
import styled from "styled-components";

import variable from "../../../css/variables.json";
import { SPHeaderList } from "../../sp/atoms/SPHeaderList";
import { HeaderListData } from "../../../data/HeaderListData";

type Props = {
  open: boolean;
  onClickMenuDrawer: () => void;
};

export const SPDrawer: VFC<Props> = memo((props) => {
  const { open, onClickMenuDrawer } = props;
  return (
    <SDrawer className={open ? "isOpen" : "isClose"}>
      <SNav>
        <SUl>
          {HeaderListData.map((name, index) => (
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

const SDrawer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${variable.subColor};
  opacity: 0.95;
  z-index: 10;
  touch-action: none;
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
  font-size: 2rem;
  text-align: center;
`;

const SUl = styled.ul`
  width: 140px;
  margin: 0 auto;
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
