import { memo, useContext, VFC } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

import { TitleTextContext } from "../../../App";

type Props = {
  idName: string;
};

export const HeaderListItem: VFC<Props> = memo((props) => {
  const { idName } = props;
  const { title } = useContext(TitleTextContext);
  return (
    <>
      {title === idName ? (
        <SLiActive>
          <SLink
            to={idName}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            {idName}
          </SLink>
        </SLiActive>
      ) : (
        <SLi>
          <SLink
            to={idName}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            {idName}
          </SLink>
        </SLi>
      )}
    </>
  );
});

const KFLi = keyframes`
  0% {
    left: 50%;
    right: 50%;
  }
  100% {
    left: 0;
    right: 0;
  }

`;

const SLi = styled.li`
  cursor: pointer;
  height: 50px;
  position: relative;
  display: inline-block;
  &::before {
    content: "";
    border-bottom: 1px solid black;
    height: 30px;
    position: absolute;
    top: 25px;
    left: 50%;
    right: 50%;
    pointer-events: none;
  }
  &:hover::before {
    animation: ${KFLi} 0.3s;
    animation-fill-mode: forwards;
  }
`;

const SLiActive = styled(SLi)`
  color: steelblue;
  position: relative;
  &::before {
    content: "";
    border-bottom: 1px solid;
    border-color: steelblue;
    height: 30px;
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
    pointer-events: none;
  }
`;

const SLink = styled(Link)`
  padding: 10px;
`;
