import { useState, memo, VFC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import variable from "../../../css/variables.json";
import { SPDrawer } from "../molecules/SPDrawer";

export const SPHeader: VFC = memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const onClickMenuDrawer = () => {
    setOpen(!open);
  };
  return (
    <SHeader>
      <SHeaderArea>
        <SLogo>
          <Link to="Main" spy={true} smooth={true} offset={-120} duration={500}>
            <SH1>sT</SH1>
          </Link>
        </SLogo>
        <SMenuBtnArea onClick={onClickMenuDrawer}>
          <SMenuBtnSpan1
            className={open ? "isOpen" : "isClose"}
          ></SMenuBtnSpan1>
          <SMenuBtnSpan2
            className={open ? "isOpen" : "isClose"}
          ></SMenuBtnSpan2>
          <SMenuBtnSpan3
            className={open ? "isOpen" : "isClose"}
          ></SMenuBtnSpan3>
        </SMenuBtnArea>
      </SHeaderArea>
      <SPDrawer open={open} onClickMenuDrawer={onClickMenuDrawer} />
    </SHeader>
  );
});

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 1.6rem;
  line-height: 60px;
  pointer-events: auto;
  position: fixed;
  background-color: ${variable.bgColor};
  z-index: 4;
`;

const SHeaderArea = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const SMenuBtnArea = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
  top: 2.5vh;
  right: 0;
  z-index: 201;
`;

const SMenuBtnSpan1 = styled.span`
  display: block;
  height: 1px;
  width: 30px;
  padding: 0;
  background: currentColor;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s;
  &.isOpen {
    top: 10px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const SMenuBtnSpan2 = styled(SMenuBtnSpan1)`
  top: 10px;
  opacity: 1;
  &.isOpen {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
`;

const SMenuBtnSpan3 = styled(SMenuBtnSpan1)`
  top: 20px;
  &.isOpen {
    top: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const SLogo = styled.div`
  position: absolute;
  width: 43px;
  cursor: pointer;
  opacity: 0.8;
  z-index: 11;
`;

const SH1 = styled.h1`
  font-size: 40px;
`;
