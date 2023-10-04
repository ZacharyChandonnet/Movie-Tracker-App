import { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import LayoutAuth from "./LayoutAuth";
import ListeSeries from "./ListeSeries";
import Series from "./Series";
import Recherche from "./Recherche";
import ListeFavoris from "./ListeFavoris";

const App = () => {
  const [series, setSeries] = useState(null);
  const [favoris, setFavoris] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [listeSerie, setListeSerie] = useState([]);
  const [isFavorisPage, setIsFavorisPage] = useState(false);
  const [listeDeFavoris, setListeDeFavoris] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const fetchSerie = async () => {
      const resp = await fetch("http://localhost:3000/api/series/trending");
      const data = await resp.json();
      setListeSerie(data.series);
      console.log(listeSerie);
    };
    fetchSerie();
  }, []);

  const seriesFiltrees = isFavorisPage
    ? listeSerie.filter((serie) => favoris.includes(serie.id))
    : listeSerie;

  useEffect(() => {
    const fetchFavoris = async () => {
      const resp = await fetch(
        `http://localhost:3000/api/series/favorites?id[]=${favoris.join(
          "&id[]="
        )}`
      );
      const data = await resp.json();
      setListeDeFavoris(data.series);
    };

    fetchFavoris();
  }, [favoris]);

  const fetchFavoris = listeDeFavoris;

  const ajouterOuRetirerFavori = (id) => {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((favori) => favori !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  };

  const choisirSerie = async (id) => {
    const resp = await fetch(`http://localhost:3000/api/series/${id}`);
    const data = await resp.json();
    setSeries(data.serie);
    console.log(series);
  };

  const estConnecter = (username, password) => {
    setUsername(username);
    setPassword(password);
    setIsAuthenticated(true);
  };

  const estDeconnecter = () => {
    setUsername("");
    setPassword("");
    setIsAuthenticated(false);
    return <LayoutAuth />;
  };

  const routes = [
    {
      path: "",
      element: isAuthenticated ? (
        <Layout
          username={username}
          favorites={favoris}
          estDeconnecter={estDeconnecter}
          query={query}
          setQuery={setQuery}
        />
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        {
          path: "trending",
          element: (
            <ListeSeries
              series={seriesFiltrees}
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
            <ListeFavoris
              series={fetchFavoris}
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
          path: "recherche",
          element: (
            <Recherche
              ajouterFavoris={ajouterOuRetirerFavori}
              favoris={favoris}
              choisirSerie={choisirSerie}
              query={query}
              setQuery={setQuery}
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
        <Navigate to="/trending" />
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
