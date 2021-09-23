import { memo, useEffect, useContext, VFC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import Tooltip from "@material-ui/core/Tooltip";

import variable from "../../css/variables.json";
import { TitleTextContext } from "../../App";
import { Container } from "../templates/Container";
import cbg from "../../images/kbg.jpeg";

export const Contact: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

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

  return (
    <Container id="Contact">
      <SContact ref={ref}>
        <SContactSnsBox></SContactSnsBox>
        <SContactFormBox>
          <SContactInputArea>
            <form onSubmit={handleSubmit(on_submit)}>
              <Controller
                control={control}
                {...register("name", { required: true })}
                render={({ field }) => (
                  <STextField id="standard-basic" label="Name" {...field} />
                )}
              />
              {errors.name && <p>お名前を入力してください</p>}
              <Controller
                control={control}
                {...register("email", { required: true })}
                render={({ field }) => (
                  <STextField id="standard-basic" label="Email" {...field} />
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
                    />
                  </Tooltip>
                )}
              />
              <SButton variant="contained" type="submit" fullWidth={true}>
                Submit
              </SButton>
            </form>
          </SContactInputArea>
        </SContactFormBox>
      </SContact>
    </Container>
  );
});

const SButton = styled(Button)`
  background-color: ${variable.subColor} !important;
`;

const SContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SContactSnsBox = styled.div`
  width: 50%;
  height: 80vh;
  position: relative;
  background-image: url(${cbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${variable.maskColor};
    position: absolute;
    opacity: 0.2;
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
