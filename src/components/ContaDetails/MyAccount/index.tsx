import { FaUserCircle, FaUser } from "react-icons/fa";
import { Button } from "@/components/Button";

export function MyAccount() {
  return (
    <>
      <section className="bg-white shadow-md p-4 w-full h-max">
        <div className="flex items-center gap-3">
          <FaUserCircle className="min-w-[24px] min-h-[24px]" />
          <h2 className="uppercase font-medium text-lg">Minha Conta</h2>
        </div>

        <div
          id="container"
          className="my-5 flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-around flex-wrap gap-5"
        >
          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">Nome completo</span>
            <p>Gabriel Felipe Ferreira</p>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">E-mail</span>
            <p>gabrielfelipe@yahoo.com.br</p>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">CPF</span>
            <p>123.456.789.00</p>
          </div>
        </div>
      </section>

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
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
              <option>Brasil</option>
              <option>Portugal</option>
            </select>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">Natural de qual estado?</span>
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
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
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
              <option>Masculino</option>
            </select>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">Estado Civil</span>
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
              <option>Solteiro(a)</option>
            </select>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">Natural de qual cidade?</span>
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
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
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
              <option>Parda</option>
              <option>Branca</option>
              <option>Negra</option>
            </select>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">Origem da nacionalidade?</span>
            <select className="w-max p-1 rounded border-2 outline-none" name="" id="">
              <option>Nascido no País</option>
              <option>Brasil</option>
              <option>Portugal</option>
            </select>
          </div>

          <div className="flex flex-col justify-center gap-0.5">
            <span className="text-xs text-gray-400">Nacionalidade</span>
            <input
              className="w-max px-1 py-0.5 outline-none border-b-2"
              type="text"
              name="nationality"
            />
          </div>

          <Button text="salvar" />
        </form>
        {/*form with data */}
      </section>
    </>
  );
}
