import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Title } from "./components/molecules/Title";

import { Header } from "./components/organisms/Header";
import { Main } from "./components/pages/Main";

export type TitleContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export const TitleTextContext = createContext({} as TitleContextType);

function App() {
  const [title, setTitle] = useState<string>("tewt");
  const value: TitleContextType = {
    title,
    setTitle,
  };
  return (
    <TitleTextContext.Provider value={value}>
      <Header />
      <Title title={title} />
      <Main />
    </TitleTextContext.Provider>
  );
}

export default App;
