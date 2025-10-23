export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <script>document.write(new Date().getFullYear())</script> ©
            Minible.
          </div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Crafted with <i className="mdi mdi-heart text-danger"></i> by{" "}
              <a
                href="https://themesbrand.com/"
                target="_blank"
                className="text-reset"
              >
                Themesbrand
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
