import Header from "./Header";
import Profil from "./Profil";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({favorites, estDeconnecter, username}) => {

  const photoProfil = "https://i.pravatar.cc";

      return (
        <>
          <Header />
          <Profil user={username} photo={photoProfil} favorites={favorites} />
          <Outlet />
          <Footer estDeconnecter={estDeconnecter} />
        </>
      );
}

export default Layout;