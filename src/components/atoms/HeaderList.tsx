import { memo, useContext, VFC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { TitleTextContext } from "../../App";

type Props = {
  idName: string;
};

export const HeaderList: VFC<Props> = memo((props) => {
  const { idName } = props;
  const { title } = useContext(TitleTextContext);
  return (
    <>
      {title === idName ? (
        <SLiActive animate={AnimateDefault} transition={TransitionDefault}>
          <Link
            to={idName}
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            {idName}
          </Link>
        </SLiActive>
      ) : (
        <SLi>
          <Link
            to={idName}
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            {idName}
          </Link>
        </SLi>
      )}
    </>
  );
});

const SLi = styled.li`
  cursor: pointer;
  height: 50px;
  /* opacity: 1; */
  /* transition: opacity 0.3s; */
  &:hover {
    /* opacity: 0.6; */
    border-bottom: 1px solid black;
    /* font-size: 20px; */
    /* transform: scale(1.2); */
  }
`;

// const SLiActive = styled.li`
//   cursor: pointer;
//   height: 50px;
//   transition: all 0.3s;
//   border-bottom: 1px solid black;
//   /* font-size: 20px; */
//   transform: rotate(10deg);
//   /* color: red; */
// `;

const AnimateDefault = {
  scale: 1.2,
};

const TransitionDefault = {
  //   delay: 0.3,
  duration: 0.2,
  //   type: "spring",
  //   stiffness: 100,
  //   ease: "easeOut",
};

const SLiActive = styled(motion.li)`
  cursor: pointer;
  height: 50px;
  transition: all 0.3s;
  border-bottom: 1px solid black;
  /* font-size: 20px; */
  /* transform: rotate(10deg); */
  /* color: red; */
`;
