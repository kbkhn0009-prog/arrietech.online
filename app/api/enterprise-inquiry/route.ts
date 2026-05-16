export async function POST(request: Request) {
  const body = await request.json()
  console.log('Заявка на внедрение ARRIE:', body)
  return Response.json({ success: true })
}
