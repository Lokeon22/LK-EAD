import { IconBaseProps } from "react-icons/lib";
import { Input } from "./Input";

interface ContainerProps {
  title: string;
  icon: IconBaseProps;
  second_title: string;
  second_icon: IconBaseProps;
}

export function Container({ title, icon, second_icon, second_title }: ContainerProps) {
  return (
    <>
      <section className="bg-white shadow-md p-4 w-full h-max">
        <div className="flex items-center gap-3">
          <>{icon}</>
          <h2 className="text-gray-500 font-medium uppercase text-lg">{title}</h2>
        </div>

        <div
          id="container"
          className="my-8 lg:my-10 flex flex-col lg:flex-row gap-10 lg:gap-5 items-center justify-center"
        >
          <input
            className="outline-none border-b-2 px-2 py-0.5 w-full placeholder:text-sm"
            type="text"
            placeholder="Nome Completo"
          />

          <select className="outline-none px-2 py-0.5 w-full" defaultValue="nacionalidade">
            <option value={"nacionalidade"} disabled>
              Nacionalidade
            </option>
            <option value={"Brasileira"}>Brasileira</option>
            <option value={"Outra"}>Outra</option>
          </select>
        </div>
      </section>

      <section className="bg-white shadow-md p-4 w-full h-max mt-5">
        <div className="flex items-center gap-3">
          <>{second_icon}</>
          <h2 className="text-gray-500 font-medium uppercase text-lg">{second_title}</h2>
        </div>

        <div
          id="container"
          className="my-8 lg:my-10 flex flex-col lg:flex-row gap-10 items-center justify-center"
        >
          <Input name="email" placeholder="Email" type="text" />
          <Input name="celular" placeholder="Celular" type="text" />
          <Input name="whatsapp" placeholder="Whatsapp" type="text" />
        </div>
      </section>
    </>
  );
}
