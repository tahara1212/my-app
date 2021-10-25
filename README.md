## アプリケーション名
「田原隼併のポートフォリオサイト」

### アプリケーション概要
React+TypeScriptで作成したポートフォリオサイトです。  
転職活動用に作成したのでドメインは取得しておりませんが、Netlifyにデプロイしています。

### URL
https://shunpeitahara.netlify.app/

### ディレクトリ構成
use-mediaを使用してレスポンシブ対応をしています。  
構成はAtomic Designを参考にしていますが、要所で独自の振り分けをしています。

### ライブラリ
一部UIはMaterial-UIを使用。  
問い合わせフォームはemailjs、スクロールイベントはreact-intersection-observerで実装しています。　　
スタイルはstyled-componentを使用しました。　　
  
@types/react: 17.0.21,  
@types/react-dom: 17.0.9,  
@mui/material: 5.0.1,  
emailjs-com: 3.2.0,  
react-helmet: 6.1.0,  
react-intersection-observer: 8.32.1,  
styled-components: 5.3.1,  
use-media: 1.4.0,  
