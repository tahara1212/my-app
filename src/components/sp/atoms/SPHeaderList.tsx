import { memo, VFC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

type Props = {
  open: boolean;
  idName: string;
  delay: number;
  onClickMenuDrawer: () => void;
};

export const SPHeaderList: VFC<Props> = memo((props) => {
  const { open, idName, delay, onClickMenuDrawer } = props;
  return (
    <>
      <SLi open={open} delay={delay / 8}>
        <Link
          to={idName}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={onClickMenuDrawer}
        >
          {idName}
        </Link>
      </SLi>
    </>
  );
});

type StyleProps = {
  open: boolean;
  delay: number;
};

const SLi = styled.li<StyleProps>`
  cursor: pointer;
  height: 50px;
  position: relative;
  transition: all 0.5s ease;
  opacity: 0;
  transition-delay: ${(props) => props.delay}s;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(15px)")};
  opacity: ${(props) => (props.open ? 1 : 0)};
`;
