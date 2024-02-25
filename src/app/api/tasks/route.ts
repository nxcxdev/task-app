export async function POST(request: Request) {
	const body = await request.json();
	const response = await fetch("http:/localhost:8000/tasks", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	return response;
}
