interface DataCMSType {
  data: Data;
}

interface Data {
  allRecados: AllRecado[];
}

interface AllRecado {
  id: string;
  date: string;
  title: string;
  content: string;
  image: any;
}

export async function getAllReminders() {
  "use server";
  const token = process.env.CMS_API_TOKEN as string;

  const data: DataCMSType = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: "{ allRecados { id date title content image{url} } }",
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return data.data.allRecados;
}
