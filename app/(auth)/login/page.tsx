import { FieldSeparator } from "@/components/shadcn/ui/field";
import { Hyperlink } from "@/components/atoms/hyperlink";
import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
import { PasswordInput } from "@/components/molecules/form-builder/ui/password-input";
import { SubmitButton } from "@/components/molecules/form-builder/ui/submit-button";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
//
import { AuthFormContainer } from "@/components/species/auth/components/auth-form-container";
import { RegisterButton } from "@/components/species/auth/components/register-button";

export const metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <AuthFormContainer h1={APP.title} p="Enter your log in details below">
      <TextInput
        name="email"
        label="Username"
        placeholder="Enter email or telephone"
        required
      />
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Enter password"
        labelRight={
          <Hyperlink href={PATH.forgotPassword}>Forgot password?</Hyperlink>
        }
      />
      <SubmitButton>Log in</SubmitButton>
      <FieldSeparator>Don't have an account?</FieldSeparator>
      <RegisterButton />
    </AuthFormContainer>
  );
}
