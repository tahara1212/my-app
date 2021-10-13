import { useState, memo, useEffect, useContext, VFC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Tooltip from "@material-ui/core/Tooltip";
import { init, send } from "emailjs-com";
import { Alert, Snackbar, TextField, Button } from "@mui/material";

import variable from "../../../css/variables.json";
import { TitleTextContext } from "../../../App";
// import { Container } from "../../templates/Container";
import { SPContainer } from "../../templates/SPContainer";

import cbg from "../../../images/contact.jpeg";

export const SPContact: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

  const [contactName, setContactName] = useState<string>("");
  const [contactMail, setContactMail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  // スクロール検知
  const { ref, inView } = useInView({
    threshold: [0.5, 1.0],
  });

  // セクションタイトル更新
  useEffect(() => {
    if (inView) {
      setTitle("Contact");
    }
  }, [inView, setTitle]);

  // スナックバーを閉じる
  const handleClose = () => {
    setOpen(false);
  };

  // 送信ボタン非活性
  const disableSend =
    contactName === "" || contactMail === "" || contactMessage === "";

  // お問い合わせメール送信
  const onSubmitSendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disableSend) {
      setOpen(true);
      setError(false);
      return false;
    }
    const reg =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
    if (!reg.test(contactMail)) {
      setOpen(true);
      setError(false);
      return false;
    }
    const user_id = process.env.REACT_APP_USER_ID;
    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;

    if (
      user_id !== undefined &&
      service_id !== undefined &&
      template_id !== undefined
    ) {
      init(user_id);
      // emailjsのテンプレートに渡すパラメータを宣言
      const templateParams = {
        to_name: contactName,
        mail: contactMail,
        message: contactMessage,
      };
      send(service_id, template_id, templateParams).then(() => {
        setContactName("");
        setContactMail("");
        setContactMessage("");
        setError(true);
        setOpen(true);
      });
    }
  };

  return (
    <SPContainer id="Contact">
      <SContact ref={ref}>
        <SContactImageBox inView={inView}></SContactImageBox>
        <SContactFormBox>
          <SContactInputArea>
            <form onSubmit={onSubmitSendMail}>
              <SFlex>
                <STextField
                  id="standard-basic"
                  label="Name"
                  value={contactName}
                  variant="standard"
                  onChange={(e) => setContactName(e.target.value)}
                />
                <STextField
                  id="standard-basic"
                  label="Email"
                  value={contactMail}
                  variant="standard"
                  onChange={(e) => setContactMail(e.target.value)}
                />
              </SFlex>
              <Tooltip title="" placement="top-start" arrow>
                <TextField
                  label="Msessage"
                  fullWidth
                  margin="normal"
                  rows={4}
                  multiline
                  variant="outlined"
                  placeholder="Msessage"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
              </Tooltip>
              <SButton
                variant="outlined"
                type="submit"
                fullWidth={true}
                disabled={disableSend}
              >
                Submit
              </SButton>
            </form>
          </SContactInputArea>
        </SContactFormBox>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          {error ? (
            <Alert onClose={handleClose} severity="success">
              メールの送信が完了しました。
            </Alert>
          ) : (
            <Alert
              onClose={handleClose}
              severity="error"
              style={{
                backgroundColor: "orange",
              }}
            >
              メールの送信が失敗しました。
            </Alert>
          )}
        </Snackbar>
      </SContact>
    </SPContainer>
  );
});

type StyleProps = {
  inView: boolean;
};

const SButton = styled(Button)`
  margin-top: 1vh !important;
  background-color: ${variable.subColor} !important;
`;

const SContact = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* justify-content: space-between; */
  margin: 0 auto;
  padding-top: 3vh;
`;

const SContactImageBox = styled.div<StyleProps>`
  width: 100%;
  height: 40vh;
  position: relative;
  background-image: url(${cbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  transition: all 1s ease;
  transform: ${(props) => (props.inView ? "scale(1)" : "scale(0.98)")};
  opacity: ${(props) => (props.inView ? 1 : 0)};
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${variable.maskColor};
    position: absolute;
    opacity: 0.5;
  }
`;

const SContactFormBox = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  margin: 0 auto;
`;

const SContactInputArea = styled.div`
  width: 100%;
  text-align: center;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%); */
`;

const SFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5vh;
`;

const STextField = styled(TextField)`
  /* color: black; */
  width: 48%;
  margin-bottom: 1vh !important;
`;
