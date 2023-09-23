import React, { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import LayoutAuth from "./LayoutAuth";
import ListeSeries from "./ListeSeries";
import SeriesListe from "./Data/series_etape2_list.json";
import SeriesDetails from "./Data/series_etape2_details.json";
import Series from "./Series";

const App = () => {
  const [series, setSeries] = useState(null);
  const [favoris, setFavoris] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  function ajouterOuRetirerFavori(id) {
    const estDansFavoris = favoris.includes(id);
    if (estDansFavoris) {
      const nouveauxFavoris = favoris.filter((serieId) => serieId !== id);
      setFavoris(nouveauxFavoris);
    } else {
      setFavoris([...favoris, id]);
    }
  }

  const choisirSerie = (id) => {
    setSeries(SeriesDetails[id]);
  };

  const estConnecter = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
  };

  const estDeconnecter = () => {
    setUsername("");
    setIsAuthenticated(false);
    return <Navigate to="/login" replace />;
  };

  const params = useParams();

  const routes = [
    {
      path: "",
      element: isAuthenticated ? (
        <Layout username={username} favorites={favoris} estDeconnecter={estDeconnecter} />
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        {
          path: "listeSerie",
          element: (
            <ListeSeries
              seriesData={SeriesListe}
              choisirSerie={choisirSerie}
              favoris={favoris}
              ajouterFavoris={ajouterOuRetirerFavori}
            />
          ),
          children: [
            {
              path: ":id",
              element: <Series series={series} />,
            },
          ],
        },
        {
          path: "favoris",
          element: (
            <ListeSeries
              seriesData={SeriesListe.filter((serie) =>
                favoris.includes(serie.id)
              )}
              choisirSerie={choisirSerie}
              favoris={favoris}
              ajouterFavoris={ajouterOuRetirerFavori}
            />
          ),
          children: [
            {
              path: ":id",
              element: <Series series={series} />,
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: isAuthenticated ? (
        <Navigate to="/listeSerie" />
      ) : (
        <Login estConnecter={estConnecter} />
      ),
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ];
  
  return <RouterProvider router={createBrowserRouter(routes)} />;
  
};

export default App;
