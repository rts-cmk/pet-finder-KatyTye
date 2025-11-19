export default async function detailsLoader({ params }) {
	const petId = params.petId
	const response = await fetch(`http://localhost:4000/dogs/${petId}`)

	return response.json()
}