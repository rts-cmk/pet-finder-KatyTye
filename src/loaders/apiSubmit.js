export default async function apiSubmit(form, setMessage) {
	const formData = new FormData(form)

	const response = await fetch("https://davids-api.onrender.com/api/db/post", {
		method: "POST",
		body: formData
	})

	const returnedData = await response.json();

	if (returnedData.success === false) {
		console.warn(`Could not create new pet: ${returnedData.message}`)
	} else {
		console.log(returnedData.message)
	}

	setMessage(returnedData.message)
}