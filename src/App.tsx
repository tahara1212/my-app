import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import useMedia from "use-media";
import styled from "styled-components";

import { MetaData } from "./data/MetaData";
import { Loader } from "./components/common/atoms/Loader";
import { MainMask } from "./components/common/atoms/MainMask";
import bg from "./images/bg.jpeg";
import { PCContents } from "./components/pc/templates/PCContents";
import { SPContents } from "./components/sp/templates/SPContents";

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
    }, 2700); // 2700
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
  margin: 0 auto;
`;

export default App;
