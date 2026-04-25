export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  // Return workflow status placeholder - workflow SDK integration pending
  return Response.json({ 
    id, 
    status: "pending",
    message: "Workflow integration pending setup" 
  });
}
