import { Logo } from "@/components/atoms/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <Logo size="lg"/>
        <div className="w-full max-w-sm">{children}</div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/images/cover.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-left dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
