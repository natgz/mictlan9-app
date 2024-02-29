import React from "react"
import {
  Container,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormButton,
  Text
} from "./SigninElements"

function SignIn() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MICTLÁN9</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Iniciar sesion en tú cuenta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
