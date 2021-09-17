import { VFC } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

export const HistoryText: VFC = () => {
  return (
    <Timeline align="left" style={timeline}>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2014年04月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            飲食業界へ就職
            <br />
            複合型アミューズメント施設を全国展開する企業のレストラン＆バー部門に配属。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2016年04月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            バー部門の店長職を務める
            <br />
            スポーツバーとしての需要の構築や貸切パーティーの管理を行う。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2017年06月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            レストラン部門の店長職を務める
            <br />
            70名規模のスタッフマネジメントやメニュー考案を行う。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2018年11月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            大手Sier企業に転職
            <br />
            SwiftでIOSの抽選アプリを作成。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2018年12月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            人事管理システムのテスト業務
            <br />
            Java言語のバックエンド開発に携わり、主に検証作業を行う。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2019年04月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            WEBコーダー業務
            <br />
            コーダーとして静的サイトやLPの作成を行う。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2019年07月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            大規模プロジェクトのフロントエンドを担当
            <br />
            JavaScriptでのフロントエンド開発や、Node.jsを用いた一部のバックエンド開発を行う。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2020年03月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            WEB系受託チームに配属
            <br />
            複数の運用・保守や請負案件を担当する。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2020年04月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            問い合わせフォームとSalesforceの連携
            <br />
            PHP言語の問い合わせフォームから、APIを使用してSFAとの連携を実施。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2020年06月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            コーポレートサイトの新規開発
            <br />
            JavaScript+JQueryを使用してJSONデータの制御や、APIでのストレージ管理を実装。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2020年08月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            クラウドサーバ構築
            <br />
            サーバのクローズに伴い、サーバ移設を担当。
            <br />
            ミドルウェアの構築やDNS移行、Linuxを用いたLBAの構築等を実施。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2020年12月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            新規ECサイトのウォーターフォール開発
            <br />
            PHP言語でのバックエンドを担当。
            <br />
            ログイン機能や会員管理、問い合わせフォーム等の作成やDB構築を担当。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2021年01月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            フロントエンドエンジニアを志す
            <br />
            React.jsやTypeScriptの学習を進める。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={oppositeContent}>
          <Typography align="left" style={leftTypography}>
            2021年09月
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary" style={rightTypography}>
            ポートフォリオサイトを作成
            <br />
            React.jsでポートフォリオサイトを作成。
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

const timeline = {
  padding: "6px 10%",
};

const oppositeContent = {
  flex: "0",
};

const leftTypography = {
  width: "87px",
  fontSize: "0.8rem",
};

const rightTypography = {
  fontSize: "0.8rem",
};
