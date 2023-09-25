import Header from "./Header";
import Profil from "./Profil";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ favorites, estDeconnecter, username }) => {
  const photoAleatoire = () => {
    const randomNum = Math.floor(Math.random() * 5);
    const photo = `https://i.pravatar.cc/150?img=${randomNum}`;
    return photo;
  };

  return (
    <>
      <Header />
      <Profil user={username} photo={photoAleatoire()} favorites={favorites} />
      <Outlet />
      <Footer estDeconnecter={estDeconnecter} />
    </>
  );
};

export default Layout;
