import { getAllReminders } from "@/functions/datoCMS";

import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { MiniBox } from "@/components/Services/MiniBox";
import { Box } from "@/components/Services/Box";

export default async function HomeAluno() {
  /*const data = await getAllReminders();*/ //data from CMS, disabled on dev_mode

  return (
    <>
      <Header />
      <main className="w-full h-full px-2 xl:px-4 2xl:px-8 my-8 flex flex-col sm:grid grid-cols-5 2xl:grid-cols-6 gap-5">
        <nav className="col-span-3 2xl:col-span-5">
          <Services title="Meus cursos">
            <Box id={1} text="Processo seletivo" url="/areadoaluno/curso" />
            <Box id={2} text="Matriculados" url="/areadoaluno/curso" />
            <Box id={3} text="Concluídos" url="/areadoaluno/curso" />
            <Box id={4} text="Cancelados" url="/areadoaluno/curso" />
            <Box id={5} text="Transferências" url="/areadoaluno/curso" />
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
          <h2 className="text-lg uppercase bg-[#2196f3] p-2 rounded mb-3">
            Meus recados
          </h2>
          <nav className="flex flex-col gap-2">
            {/* messages to user here CMS, disabled to dev_mode*
            {data.map((cms) => {
              return (
                <MiniBox key={cms.id} date={cms.date} title={cms.title} content={cms.content} />
              );
            })} */}
          </nav>
        </div>
      </main>
    </>
  );
}
