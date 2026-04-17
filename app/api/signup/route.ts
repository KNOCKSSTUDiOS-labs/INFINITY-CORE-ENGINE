import { handleUserSignup } from "@/workflows/handleUserSignup";

export async function POST(req: Request) {
  const { email } = await req.json();

  const result = await handleUserSignup({ email });

  return Response.json(result);
}
