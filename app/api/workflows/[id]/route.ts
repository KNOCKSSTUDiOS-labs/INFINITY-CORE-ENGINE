import { getWorkflow } from "workflow";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const run = await getWorkflow(params.id);
  return Response.json(run);
}
