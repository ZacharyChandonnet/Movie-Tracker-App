import React from "react";
import Lottie from "lottie-react";
import LoginAnimation from "./Animations/LoginAnimation.json";

const Login = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-20 rounded-md flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/5 pr-8  mx-auto">
          <h1 className="text-4xl font-semibold text-center text-blue-600">FlickFlow</h1>
          <p className="text-gray-400 text-sm text-center mb-6 italic">
            Veuillez vous connecter pour accéder à l'application
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-gray-600">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                id="username"
                className="border-2 border-blue-500 rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-600"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-600">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="border-2 border-blue-500 rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-600"
                placeholder="Mot de passe"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox"  className="mr-2" />
                <label htmlFor="rememberMe" className="text-gray-600">
                  Se souvenir de moi
                </label>
              </div>
              <a href="#" className="text-blue-500 text-sm">
                Mot de passe oublié ?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
            >
              Se connecter
            </button>
            <div className="text-center text-gray-400 text-sm mt-4">
              2023 Zachary Chandonnet - Devoir en continue Web5
            </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <Lottie animationData={LoginAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Login;
