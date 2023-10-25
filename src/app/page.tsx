import { LoginClient } from "@/components/LoginForm/LoginClient";
import { LoginForm } from "@/components/LoginForm";
import { handleRegister } from "./actions";

import Image from "next/image"; // change div with bg

export default function Home() {
  return (
    <main className="w-full h-screen grid grid-cols-1 sm:grid-cols-[1fr_550px] justify-center">
      <div
        style={{ backgroundImage: "url(https://s3.amazonaws.com/unimar/banners/40.jpg)" }}
        className="bg-cover bg-center bg-no-repeat"
      />
      <section className="w-full h-screen bg-gray-100 text-black col-span-1 sm:col-span-1">
        <h2 className="text-center text-3xl font-medium bg-gray-400 py-8">LK EAD</h2>
        <LoginClient />
        <LoginForm action={handleRegister} text="Fazer meu Cadastro" btnText="Continuar" />
      </section>
    </main>
  );
}
