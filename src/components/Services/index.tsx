import { Box } from "./Box";

export function Services({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-lg uppercase bg-[#2196f3] p-2 rounded">{title}</h2>
      <div className="flex flex-wrap items-center justify-start gap-10 p-4 mb-6 sm:mb-12">
        {/* courses here with map */}
        <Box text="Processo seletivo" />
        <Box text="Matriculados" />
        <Box text="Concluidos" />
        <Box text="Cancelados" />
        <Box text="Transferencias" />
      </div>
    </>
  );
}
