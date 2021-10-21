import { VFC } from "react";
import styled from "styled-components";
import { Divider } from "../../common/atoms/Divider";

import { Title } from "../molecules/Title";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { History } from "../pages/History";
import { Main } from "../pages/Main";
import { Skils } from "../pages/Skils";
import { Works } from "../pages/Works";

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
