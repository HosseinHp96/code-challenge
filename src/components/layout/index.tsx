import { Outlet } from "react-router-dom";
import Header from "../header";
import PageTitle from "../pageTitle";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />

      <PageTitle />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
