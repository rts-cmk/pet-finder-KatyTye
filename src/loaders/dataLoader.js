export default async function petLoader() {
	const response = await fetch("https://davids-api.onrender.com/api/db")
	const jsonData = await response.json()

	return jsonData
}