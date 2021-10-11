type Work = {
  alt: string;
  heading: string;
  link: string;
  text: string;
  lowerText: string;
};

export const WorksData: Work[] = [
  {
    alt: "work01",
    link: "https://shunpeitahara.netlify.app/",
    heading: "React + TypeScript",
    text: "TypeScriptを使用した当ポートフォリオサイト。",
    lowerText: "問い合わせフォームはemailjsを使用。",
  },
  {
    alt: "work02",
    link: "https://peita-usermanagement.netlify.app",
    heading: "TypeScript + Chakra Ui",
    text: "TypeScriptとChakra Uiを使用したユーザー管理アプリ。",
    lowerText: "ID1~10でログイン。実装はフロントのみ。",
  },
  {
    alt: "work03",
    link: "https://peita-blog.netlify.app/",
    heading: "React + Gatsby",
    text: "Gatsby.jsを使用したブログサイト。",
    lowerText: "スターターはLeonids。",
  },
  {
    alt: "work04",
    link: "https://peita-todolist.netlify.app/",
    heading: "React + Material Ui",
    text: "Material Uiを使用したToDoリスト。",
    lowerText: "実装はフロントのみ。",
  },
];
