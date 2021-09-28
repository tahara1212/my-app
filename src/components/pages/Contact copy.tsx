import { useState, memo, useEffect, useContext, VFC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import Tooltip from "@material-ui/core/Tooltip";

import variable from "../../css/variables.json";
import { TitleTextContext } from "../../App";
import { Container } from "../templates/Container";
import cbg from "../../images/kbg.jpeg";

import { init, send } from "emailjs-com";

export const Contact: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

  const [contactName, setContactName] = useState<string>("");
  const [contactMail, setContactMail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>(""); // 「お問い合わせ内容」の部分

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm();
  const on_submit = (data: any) => console.log(data);

  useEffect(() => {
    if (inView) {
      setTitle("Contact");
    }
  }, [inView, setTitle]);

  const onClickSendMail = () => {
    if (contactName === "" || contactMail === "") {
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
        window.alert("お問い合わせを送信致しました!。");
        setContactName("");
        setContactMail("");
        setContactMessage("");
      });
    }
  };

  return (
    <Container id="Contact">
      <SContact ref={ref}>
        <SContactImageBox inView={inView}></SContactImageBox>
        <SContactFormBox>
          <SContactInputArea>
            <form onSubmit={handleSubmit(on_submit)}>
              <Controller
                control={control}
                {...register("name", { required: true })}
                render={({ field }) => (
                  <STextField
                    id="standard-basic"
                    label="Name"
                    {...field}
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                )}
              />
              {errors.name && <p>お名前を入力してください</p>}
              <Controller
                control={control}
                {...register("email", { required: true })}
                render={({ field }) => (
                  <STextField
                    id="standard-basic"
                    label="Email"
                    {...field}
                    value={contactMail}
                    onChange={(e) => setContactMail(e.target.value)}
                  />
                )}
              />
              {errors.email && <p>メールアドレスを入力してください</p>}
              <Controller
                control={control}
                name="message"
                render={({ field }) => (
                  <Tooltip title="" placement="top-start" arrow>
                    <TextField
                      {...field}
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
                )}
              />
              <SButton
                variant="contained"
                type="submit"
                fullWidth={true}
                onClick={onClickSendMail}
              >
                Submit
              </SButton>
            </form>
          </SContactInputArea>
        </SContactFormBox>
      </SContact>
    </Container>
  );
});

type StyleProps = {
  inView: boolean;
};

const SButton = styled(Button)`
  background-color: ${variable.subColor} !important;
`;

const SContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 3vh;
`;

const SContactImageBox = styled.div<StyleProps>`
  width: 50%;
  height: 80vh;
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
    opacity: 0.3;
  }
`;

const SContactFormBox = styled.div`
  width: 50%;
  position: relative;
`;

const SContactInputArea = styled.div`
  width: 60%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
`;

const STextField = styled(TextField)`
  /* color: black; */
  width: 100%;
`;
