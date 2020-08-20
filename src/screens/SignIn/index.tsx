import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import { Container, AnimationContainer } from "./styles";
import LogoImg from "../../assets/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getVallidationsError";
import { useAuth } from "../../context/AuthContext";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Obrigatório"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });

        history.push("/navers");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [history, signIn]
  );

  return (
    <Container>
      <AnimationContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <img src={LogoImg} alt="Nave" />

          <Input name="email" label="E-mail" placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </AnimationContainer>
    </Container>
  );
};

export default SignIn;
