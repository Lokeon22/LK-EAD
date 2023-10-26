import { getAllReminders } from "@/functions/datoCMS";

import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { MiniBox } from "@/components/Services/MiniBox";
import { Box } from "@/components/Services/Box";

export default async function HomeAluno() {
  const data = await getAllReminders();

  return (
    <>
      <Header />
      <main className="w-full h-full px-2 xl:px-4 2xl:px-8 my-8 flex flex-col sm:grid grid-cols-5 2xl:grid-cols-6 gap-5">
        <nav className="col-span-3 2xl:col-span-5">
          <Services title="Meus cursos">
            <Box text="Processo seletivo" url="/curso/processoseletivo" />
            <Box text="Matriculados" url="/curso/matriculado" />
            <Box text="Concluídos" url="/curso/concluido" />
            <Box text="Cancelados" url="/curso/cancelado" />
            <Box text="Transferências" url="/curso/transferencia" />
          </Services>

          <Services title="Meus serviços">
            <Box
              text="Biblioteca Pearson"
              url="https://plataforma.bvirtual.com.br/Account/Register"
            />
            <Box text="Downloads" url="/documentacao/download" />
            <Box text="Solicitar Serviços" url="/protocolo/solicitacao" />
            <Box text="Serviços Solicitados" url="/protocolo/visualizar" />
          </Services>

          <Services title="Meus pagamentos">
            <Box text="Pendentes" url="/pagamento/pendentes" />
            <Box text="Realizados" url="/pagamento/realizado" />
            <Box text="Solicitar Acordo" url="/acordo/solicitar" />
            <Box text="Acordos realizados" url="/acordo/realizado" />
            <Box text="Meus cartões" url="/areadoaluno/conta" />
          </Services>
        </nav>

        <div className="col-span-2 2xl:col-span-1 px-2 sm:px-0">
          <h2 className="text-lg uppercase bg-[#2196f3] p-2 rounded mb-3">Meus recados</h2>
          <nav className="flex flex-col gap-2">
            {/* messages to user here CMS*/}
            {data.map((cms) => {
              return (
                <MiniBox key={cms.id} date={cms.date} title={cms.title} content={cms.content} />
              );
            })}
          </nav>
        </div>
      </main>
    </>
  );
}
