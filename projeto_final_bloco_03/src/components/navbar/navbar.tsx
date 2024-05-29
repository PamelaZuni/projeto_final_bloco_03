import { ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="bg-zinc-300 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex-start flex-row justify-around items-center py-4 px-16 ">
            <Link className="text-4xl flex items-center gap-4" to="/home">
              <img className="h-16" src="/src/assets/images/1.png" alt="Logo Farmácia" />
            </Link>
          </div>
          <nav>
            <ul className="flex flex-row justify-end items-center py-10 px-16">
              <Link to="/categorias" className="mx-3">
                Categorias
              </Link>
              <Link to="/cadastrarcategoria" className="mx-3">
                Cadastrar Categoria
              </Link>
            </ul>
          </nav>
          {/* <div className="flex flex-row">
            <User size={32} color="#f9ecec" />
            <ShoppingCart size={32} color="#f9ecec" />
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Navbar;
