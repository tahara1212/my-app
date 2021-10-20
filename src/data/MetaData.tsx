import { Helmet } from "react-helmet";

const titleText = "Shunpei Tahara";
const descriptionText = "Shunpei Tahara's portfolio site";
const keywordText = "田原隼併,Tahara,Shunpei,ポートフォリオ";
// let viewportText = "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no";
export const MetaData = () => {
  const wHeight = window.outerHeight;
  // const wHeight = window.innerHeight;

  const viewportText =
    "width=device-width, height=" +
    wHeight +
    "px, initial-scale=1.0, user-scalable=no";
  return (
    <Helmet
      title={titleText}
      meta={[
        { name: "description", content: descriptionText },
        { name: "keyword", content: keywordText },
        { name: "viewport", content: viewportText },
      ]}
    />
  );
};
