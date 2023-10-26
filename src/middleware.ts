import { NextResponse, NextRequest } from "next/server";

export const user_routes = ["/areadoaluno", "/areadoaluno/conta", "areadoaluno/curso"];

export default function middleware(req: NextRequest) {
  let verifyUser = req.cookies.get("lkead_user");
  const { pathname, href } = req.nextUrl;

  if (!verifyUser && user_routes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_EAD_URL}`);
  }

  if (verifyUser && href === `${process.env.NEXT_PUBLIC_EAD_URL}/`) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_EAD_URL}/areadoaluno`);
  }
}
