import { Services } from "@/components/Services";
import { MiniBox } from "@/components/Services/MiniBox";

export default function HomeAluno() {
  return (
    <section className="w-full h-full px-2 xl:px-4 2xl:px-8 my-8 flex flex-col sm:grid grid-cols-5 2xl:grid-cols-6 gap-5">
      <nav className="col-span-3 2xl:col-span-5">
        <Services title="Meus cursos" />
        <Services title="Meus serviços" />
        <Services title="Meus pagamentos" />
      </nav>

      <div className="col-span-2 2xl:col-span-1 px-2 sm:px-0">
        <h2 className="text-lg uppercase bg-[#2196f3] p-2 rounded mb-3">Meus recados</h2>
        <nav className="flex flex-col gap-2">
          {/* messages to user here */}
          <MiniBox
            date="14/10/2023"
            text="XI SIMPÓSIO DE INICIAÇÃO CIENTÍFICA e XI ENCONTRO DE PÓS-GRADUAÇÃO da UNIMAR"
          />
        </nav>
      </div>
    </section>
  );
}
