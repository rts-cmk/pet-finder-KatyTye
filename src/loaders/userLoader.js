export default async function petLoader() {
	const response = await fetch("http://localhost:4000/user")

	return response.json()
}