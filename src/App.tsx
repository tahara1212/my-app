import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
// import { Divider } from "./components/atoms/Divider";

import { MetaData } from "./data/MetaData";
import { Loader } from "./components/pc/atoms/Loader";
import { MainMask } from "./components/pc/atoms/MainMask";

// import { Title } from "./components/molecules/Title";
// import { Footer } from "./components/organisms/Footer";
// import { Header } from "./components/organisms/Header";
// import { About } from "./components/pages/About";
// import { Contact } from "./components/pages/Contact";
// import { History } from "./components/pages/History";
// import { Main } from "./components/pages/Main";
// import { Skils } from "./components/pages/Skils";
// import { Works } from "./components/pages/Works";
import { PCContents } from "./components/templates/PCContents";

import bg from "./images/bg.jpeg";

// import MediaQuery from "react-responsive";
import useMedia from "use-media";
import { SPContents } from "./components/templates/SPContents";

export type TitleContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export const TitleTextContext = createContext({} as TitleContextType);

function App() {
  const isWide = useMedia({ minWidth: "1000px" });

  const [title, setTitle] = useState<string>("Welcome");
  const [loading, setLoading] = useState<Boolean>(true);
  const value: TitleContextType = {
    title,
    setTitle,
  };

  const img = new Image();
  img.src = bg; // プリロードする

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 270000); // 2700
  }, [setLoading]);

  return (
    <TitleTextContext.Provider value={value}>
      <MetaData />
      {loading ? (
        <Loader />
      ) : (
        <SContent>
          <MainMask />
          {isWide ? <PCContents title={title} /> : <SPContents title={title} />}
        </SContent>
      )}
    </TitleTextContext.Provider>
  );
}

const SContent = styled.div`
  width: 100%;
  overflow: hidden;
  /* padding-top: 80px; */
  margin: 0 auto;
`;

export default App;
