import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  id: string;
};

export const SPContainer: VFC<Props> = memo((props) => {
  const { children, id } = props;
  return <SContainer id={id}>{children}</SContainer>;
});

const SContainer = styled.div`
  width: calc(100% - 50px);
  height: calc(95vh - 40px);
  /* height: 700px; */
  /* height: 100%; */
  margin: 0 auto;
  position: relative;
  /* margin-bottom: 10vh; */
  background-color: red;
`;
