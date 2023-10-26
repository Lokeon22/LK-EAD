import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaUserCircle, FaUser } from "react-icons/fa";

import { Header } from "@/components/Header";
import { Container } from "@/components/UserDetails/Container";
import { DetailsMenu } from "@/components/UserDetails/DetailsMenu";

//get user infos here

export default function Conta() {
  return (
    <>
      <Header />
      <Link
        className="flex items-center justify-center max-w-[100px] gap-2 bg-gray-400 p-4 rounded-br hover:brightness-95 hover:duration-200"
        href={"/areadoaluno"}
      >
        <BsArrowRight className="min-w-[20px] min-h-[20px] rotate-180" />
        <span className="text-base">Voltar</span>
      </Link>

      <section className="w-full h-full px-2 xl:px-4 2xl:px-8 my-4 md:my-8 flex flex-col md:grid grid-cols-6 2xl:grid-cols-8 text-black">
        <DetailsMenu />

        <div id="content" className="col-span-4 lg:col-span-5 2xl:col-span-7 mt-5 md:mt-0">
          <Container
            title="Minha Conta"
            icon={<FaUserCircle className="min-w-[24px] min-h-[24px]" />}
          />

          <section className="bg-white shadow-md p-4 w-full h-max mt-5" id="user_data">
            <div className="flex items-center gap-3">
              <FaUser className="min-w-[24px] min-h-[24px]" />
              <h2 className="uppercase font-medium text-lg">Meus dados</h2>
            </div>

            <form
              id="container_data"
              className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4"
            >
              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Nome de Exibição</span>
                <input
                  className="w-max px-1 py-0.5 outline-none border-b-2"
                  type="text"
                  defaultValue={"Gabriel Felipe Ferreira"}
                />
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">País de origem</span>
                <select className="w-max" name="" id="">
                  <option>Brasil</option>
                  <option>Portugal</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Natural de qual estado?</span>
                <select className="w-max" name="" id="">
                  <option>Minas Gerais</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Data de nascimento</span>
                <input className="w-max" type="date" />
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Profissão</span>
                <input className="px-1 py-0.5 outline-none border-b-2" type="text" />
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Gênero</span>
                <select className="w-max" name="" id="">
                  <option>Masculino</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Estado Civil</span>
                <select className="w-max" name="" id="">
                  <option>Solteiro(a)</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Natural de qual cidade?</span>
                <select className="w-max" name="" id="">
                  <option>Barbacena</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Nome da mãe</span>
                <input className="px-1 py-0.5 outline-none border-b-2" type="text" />
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Nome do pai</span>
                <input className="px-1 py-0.5 outline-none border-b-2" type="text" />
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Cor/Raça</span>
                <select className="w-max" name="" id="">
                  <option>Parda</option>
                  <option>Branca</option>
                  <option>Negra</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Origem da nacionalidade?</span>
                <select className="w-max" name="" id="">
                  <option>Nascido no País</option>
                  <option>Brasil</option>
                  <option>Portugal</option>
                </select>
              </div>

              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-xs text-gray-400">Nacionalidade</span>
                <input className="w-max px-1 py-0.5 outline-none border-b-2" type="text" />
              </div>
            </form>
            {/*form with data */}
          </section>
          {/* user_data acima */}
        </div>
      </section>
    </>
  );
}
