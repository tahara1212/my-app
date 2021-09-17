import { createContext, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

import { Title } from "./components/molecules/Title";
import { Header } from "./components/organisms/Header";
import { About } from "./components/pages/About";
import { History } from "./components/pages/History";
import { Main } from "./components/pages/Main";

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
        <About />
        <History />
      </SMainContent>
    </TitleTextContext.Provider>
  );
}

const SMainContent = styled.div`
  padding-top: 80px;
  margin: 0 auto;
`;

export default App;
