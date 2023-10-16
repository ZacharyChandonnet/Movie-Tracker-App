import React from "react";
import Header from "./Header";
import Profil from "./Profil";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import SearchEngine from "./SearchEngine";

const Layout = ({ favorites, estDeconnecter, username, query, setQuery }) => {
  const photoAleatoire = () => {
    const randomNum = Math.floor(Math.random() * 5);
    const photo = `https://i.pravatar.cc/150?img=${randomNum}`;
    return photo;
  };
  const location = useLocation();
  const pageRecherche = location.pathname.includes("recherche");
  return (
    <>
      <Header />
      <Profil user={username} photo={photoAleatoire()} favorites={favorites} />
      {pageRecherche ? null : (
        <SearchEngine query={query} setQuery={setQuery} />
      )}
      <Outlet />
      <Footer estDeconnecter={estDeconnecter} />
    </>
  );
};

export default Layout;
