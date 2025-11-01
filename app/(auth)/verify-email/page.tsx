import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";
import { SubmitButton } from "@/components/molecules/form-builder/ui/submit-button";
import { GoBackButton } from "@/components/atoms/go-back-button";
import { PATH } from "@/constants/PATH";
//
import { AuthFormContainer } from "@/components/species/auth/components/auth-form-container";

export const metadata = {
  title: "Verify email",
};

export default function VerifyEmailPage() {
  return (
    <>
      <GoBackButton />
      <AuthFormContainer h1="Verify email" p="Fill in the form details below">
        <div className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <SubmitButton href={PATH.home}>Submit</SubmitButton>
      </AuthFormContainer>
    </>
  );
}
