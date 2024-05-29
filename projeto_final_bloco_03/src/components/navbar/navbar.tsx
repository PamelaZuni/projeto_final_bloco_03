import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="bg-gray-400 flex justify-center">
        <div className="container flex flex-row items-center justify-around text-white font-bold">
          <div className="flex-start justify-around items-center py-4 px-16">
            <Link className="text-4xl flex items-center gap-4" to="/home">
              <img className="h-16" src="/src/assets/images/1.png" alt="Logo FarmÃ¡cia" />
            </Link>
          </div>

          <div className="flex-1 flex justify-center items-center relative w-30 text-black pl-9">
            <form>
              <input className="h-9 w-96 rounded-lg px-4 py-4 focus:outline-none" type="search" placeholder="Pesquisar" id="busca" name="busca" required />
              <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-green-400 hover:bg-teal-900 rounded-lg border">
                <MagnifyingGlass size={14} weight="bold" />
              </button>
            </form>
          </div>

          <div className="flex flex-row justify-end">
            <nav>
              <ul className="flex flex-row justify-center items-center py-10">
                <Link to="/categorias" className="mx-3">
                  Categorias
                </Link>
                <Link to="/cadastrarcategoria" className="mx-3">
                  Cadastrar Categoria
                </Link>
              </ul>
            </nav>
            <div className="flex flex-row justify-center items-center pr-6">
              <User className="mx-2" size={32} color="#f9ecec" />
              <ShoppingCart className="mx-2" size={32} color="#f9ecec" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
