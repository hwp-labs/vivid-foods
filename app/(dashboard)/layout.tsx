import { Header } from "@/components/organisms/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>DashboardLayout</h1>
      <Header />
      {children}
    </>
  );
}
