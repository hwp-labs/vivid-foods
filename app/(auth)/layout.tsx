export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>AuthLayout</h1>
      {children}
    </>
  );
}
