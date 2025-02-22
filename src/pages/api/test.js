export const prerender = false;

export const POST = async ({ request }) => {
	const body = await request.json();
	const { content } = body;

	if (!content) {
		return errorResponse(400, "Missing content");
	}

	console.log("POST content", content);

	return new Response(JSON.stringify({ success: true, content }), {
		status: 201,
		headers: { "Content-Type": "application/json" },
	});
};
