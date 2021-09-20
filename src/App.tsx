import { createContext, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Divider } from "./components/atoms/Divider";

import { Title } from "./components/molecules/Title";
import { Footer } from "./components/organisms/Footer";
import { Header } from "./components/organisms/Header";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { History } from "./components/pages/History";
import { Main } from "./components/pages/Main";
import { Skils } from "./components/pages/Skils";
import { Works } from "./components/pages/Works";

export type TitleContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export const TitleTextContext = createContext({} as TitleContextType);

function App() {
  const [title, setTitle] = useState<string>("Welcome");
  const value: TitleContextType = {
    title,
    setTitle,
  };
  return (
    <TitleTextContext.Provider value={value}>
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
    </TitleTextContext.Provider>
  );
}

const SMainContent = styled.div`
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
`;

export default App;
