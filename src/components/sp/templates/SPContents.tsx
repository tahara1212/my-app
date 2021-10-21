import { VFC } from "react";
import styled from "styled-components";

import { Divider } from "../../common/atoms/Divider";
import { SPTitle } from "../molecules/SPTitle";
import { SPFooter } from "../organisms/SPFooter";
import { SPHeader } from "../organisms/SPHeader";
import { SPAbout } from "../pages/SPAbout";
import { SPContact } from "../pages/SPContact";
import { SPHistory } from "../pages/SPHistory";
import { SPMain } from "../pages/SPMain";
import { SPSkils } from "../pages/SPSkils";
import { SPWorks } from "../pages/SPWorks";

type Props = {
  title: string;
};

export const SPContents: VFC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <SPHeader />
      <SMainContent>
        <SPTitle title={title} />
        <SPMain />
        <Divider />
        <SPAbout />
        <Divider />
        <SPHistory />
        <Divider />
        <SPWorks />
        <Divider />
        <SPSkils />
        <Divider />
        <SPContact />
      </SMainContent>
      <SPFooter />
    </>
  );
};

const SMainContent = styled.div`
  width: 100%;
  padding-top: 20px;
  margin: 0 auto;
`;
