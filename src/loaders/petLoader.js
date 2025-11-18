export default async function petLoader() {
	const repsonse = await fetch("http://localhost:4000/dogs")

	return repsonse.json()
}