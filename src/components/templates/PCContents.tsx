import { VFC } from "react";
import styled from "styled-components";
import { Divider } from "../pc/atoms/Divider";

import { Title } from "../pc/molecules/Title";
import { Footer } from "../pc/organisms/Footer";
import { Header } from "../pc/organisms/Header";
import { About } from "../pc/pages/About";
import { Contact } from "../pc/pages/Contact";
import { History } from "../pc/pages/History";
import { Main } from "../pc/pages/Main";
import { Skils } from "../pc/pages/Skils";
import { Works } from "../pc/pages/Works";

type Props = {
  title: string;
};

export const PCContents: VFC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <Header />
      <SMainContent>
        <Title title={title} />
        <Main />
        <Divider />
        <About />
        <Divider />
        <History />
        <Divider />
        <Works />
        <Divider />
        <Skils />
        <Divider />
        <Contact />
      </SMainContent>
      <Footer />
    </>
  );
};

const SMainContent = styled.div`
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
`;
