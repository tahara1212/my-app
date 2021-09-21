import { BallTriangle } from "@agney/react-loading";
import styled from "styled-components";

import { VFC } from "react";

export const Loader: VFC = () => {
  return (
    <SPuff>
      <BallTriangle />
    </SPuff>
  );
};

const SPuff = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: gray;
`;
