import { IconBaseProps } from "react-icons/lib";

export function Container({ title, icon }: { title: string; icon: IconBaseProps }) {
  return (
    <section className="bg-white shadow-md p-4 w-full h-max">
      <div className="flex items-center gap-3">
        <>{icon}</>
        <h2 className="uppercase font-medium text-lg">{title}</h2>
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
  );
}
