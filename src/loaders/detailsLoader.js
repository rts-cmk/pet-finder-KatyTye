export default async function detailsLoader({ params }) {
	const petId = params.petId
	const response = await fetch("https://davids-api.onrender.com/api/db")
	const jsonData = await response.json()

	return jsonData["dogs"][petId]
}