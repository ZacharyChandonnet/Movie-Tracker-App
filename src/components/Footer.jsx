const Footer = ({ estDeconnecter }) => {
    return (
      <footer className="mt-10 bg-blue-500">
        <div className="container py-4">
          <button
            className="bg-white text-blue-500  hover:bg-slate-200 font-semibold py-2 px-4 rounded ml-10"
            onClick={estDeconnecter}
          >
            Déconnexion
          </button>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  