function Home() {
  return (
    <>
      <div className="bg-cyan-600 flex justify-center h-screen">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold"> Seja bem vindo! </h2>
            <p className="text-xl"> Remédios e produtos que facilitam sua vida. </p>
            {/* <div className="flex justify-around gap-4">
                          <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
                              Nova Postagem
                          </div>
                      </div> */}
          </div>

          <div className="flex justify-center items-center">
            <img src="/src/assets/images/2.png" alt="Imagem Home" className="w-2/3 h-max" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
