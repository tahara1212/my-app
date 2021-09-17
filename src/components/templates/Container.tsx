import { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Container: VFC<Props> = (props) => {
  const { children } = props;
  return <SContainer>{children}</SContainer>;
};

const SContainer = styled.div`
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  margin: 0 auto;
  position: relative;
  margin-bottom: 10vh;
`;
