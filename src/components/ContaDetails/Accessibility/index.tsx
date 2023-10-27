import { Button } from "@/components/Button";
import { FaWheelchair } from "react-icons/fa";

export function Acessibility() {
  return (
    <section className="bg-white shadow-md p-4 w-full h-max">
      <div className="flex items-center gap-3">
        <FaWheelchair className="min-w-[24px] min-h-[24px]" />
        <h2 className="uppercase font-medium text-lg">Acessibilidade</h2>
      </div>

      <div id="container" className="my-5 flex flex-col items-start justify-start flex-wrap gap-5">
        <label className="flex items-center gap-2.5" htmlFor="fisica">
          <input id="fisica" type="radio" />
          Deficiencia física
        </label>

        <label className="flex items-center gap-2.5" htmlFor="auditiva">
          <input id="auditiva" type="radio" />
          Deficiencia auditiva e surdez
        </label>

        <label className="flex items-center gap-2.5" htmlFor="visual">
          <input id="visual" type="radio" />
          Deficiencia visual
        </label>

        <label className="flex items-center gap-2.5" htmlFor="cegueira">
          <input id="cegueira" type="radio" />
          Cegueira
        </label>

        <label className="flex items-center gap-2.5" htmlFor="visao">
          <input id="visao" type="radio" />
          Baixa visão
        </label>

        <label className="flex items-center gap-2.5" htmlFor="intelectual">
          <input id="intelectual" type="radio" />
          Deficiencia intelectual
        </label>

        <label className="flex items-center gap-2.5" htmlFor="surdocegueira">
          <input id="surdocegueira" type="radio" />
          Surdocegueira
        </label>

        <label className="flex items-center gap-2.5" htmlFor="autismo">
          <input id="autismo" type="radio" />
          Transtorno de espectro autista
        </label>

        <Button text="salvar" />
      </div>
    </section>
  );
}
