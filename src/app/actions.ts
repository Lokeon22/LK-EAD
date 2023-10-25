import { redirect } from "next/navigation";

const apiURL = process.env.NEXT_PUBLIC_API_URL as string;

async function handleRegister(data: FormData) {
  "use server";

  try {
    const res = await fetch(`${apiURL}/users/register`, {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
      }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }

  redirect("/areadoaluno/conta");
}

export { handleRegister };
