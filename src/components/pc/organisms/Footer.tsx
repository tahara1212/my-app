import { memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import variable from "../../../css/variables.json";

export const Footer = memo(() => {
  return (
    <SFooter>
      <SContactIconArea>
        <p>
          <small>&copy; 2021 Shunpei Tahara</small>
        </p>
        <a
          href="https://github.com/tahara1212"
          target="_blank"
          rel="noreferrer"
        >
          <SFontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100010537425879"
          target="_blank"
          rel="noreferrer"
        >
          <SFontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/OrirenAct"
          target="_blank"
          rel="noreferrer"
        >
          <SFontAwesomeIcon icon={faTwitter} />
        </a>
      </SContactIconArea>
    </SFooter>
  );
});

const SFooter = styled.footer`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  text-align: center;
  line-height: 80px;
  /* background-color: lightgray; */
  background-color: ${variable.subColor};
`;

const SContactIconArea = styled.div`
  display: flex;
  justify-content: center;
  & small {
    font-family: "Besley", serif;
  }
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  opacity: 1;
  margin-left: 15px;
  color: teal;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: black;
  }
`;
