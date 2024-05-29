import { ShoppingCart, User } from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <header className="bg-zinc-300 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex-start flex-row justify-around items-center py-4 px-16 ">
            <img className="h-16" src="/src/assets/images/1.png" alt="Logo Farmácia" />
          </div>
          <nav>
            <ul className="flex flex-row justify-end items-center py-10 px-16">
              <li className="mx-3">Categorias</li>
              <li className="mx-3">Cadastrar Categorias</li>
            </ul>
          </nav>
          <div className="flex flex-row">
            <User size={32} color="#f9ecec" />
            <ShoppingCart size={32} color="#f9ecec" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
