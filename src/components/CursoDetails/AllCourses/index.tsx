import { Card } from "./Card";

export function AllCourses() {
  return (
    <>
      <h2 className="relative w-full text-lg mt-2 px-5 uppercase before:content-[''] before:absolute before:w-3 before:h-8 before:bg-gray-400 before:-left-1">
        Todos os cursos
      </h2>

      <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-5 my-8">
        {/* map here with courses from cms or jsonData */}
        <Card
          title="Projeto de ensino lk-ead cursos extras"
          sub_title="Curso livre ead"
          course_register={2222}
          status="Matriculado"
        />
        <Card
          title="Superior de tecnologia em análise e desenvolvimento de sistemas"
          sub_title="Graducação ead"
          course_register={2525}
          status="Finalizado"
        />
        <Card
          title="Jornada profissional"
          sub_title="Curso livre ead"
          course_register={3333}
          status="Finalizado"
        />
        <Card
          title="Jornada profissional 2.0"
          sub_title="Curso livre ead"
          course_register={7777}
          status="Matriculado"
        />
        <Card
          title="LK GROUP - Unicom"
          sub_title="Extensão ead"
          course_register={9999}
          status="Finalizado"
        />
      </div>
    </>
  );
}
