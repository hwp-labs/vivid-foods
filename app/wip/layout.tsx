import { Header } from "./_ui/header";
import { Sidebar } from "./_ui/sidebar";
import { Footer } from "./_ui/footer";

export default function WipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
