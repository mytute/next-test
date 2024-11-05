import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const headerList = headers();

  cookies().set("resultPerPage", "20");
  console.log(cookies().get("resultPerPage"));

  const theme = request.cookies.get("theme");
  console.log(theme);
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  })

}
