import Header from "./Header";
import Profil from "./Profil";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({favorites, children, estDeconnecter, username}) => {

  const photoProfil = "https://i.pravatar.cc";

      return (
        <>
          <Header />
          <Profil user={username} photo="https://i.pravatar.cc" favorites={favorites} />
          {children}
          <Outlet />
          <Footer estDeconnecter={estDeconnecter} />
        </>
      );
}

export default Layout;