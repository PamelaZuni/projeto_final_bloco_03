function Footer() {
  return (
    <>
      <footer className="bg-zinc-400 flex flex-col justify-center items-center text-white py-4 px-4">
        <div className="flex flex-col items-center justify-center">
          <p>Farmácia Vitalicity | &copy; </p>
          <p>Acesse nossas Redes Socias!</p>
        </div>
        <div className="flex flex-row">
          <a href="https://linkedin.com">
            <img src="./src/assets/images/linkedin-logo.svg" alt="" />
          </a>
          <a href="https://instagram.com">
            <img src="./src/assets/images/instagram-logo.svg" alt="" />
          </a>
          <a href="https://github.com/PamelaZuni">
            <img src="./src/assets/images/github-logo.svg" alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
