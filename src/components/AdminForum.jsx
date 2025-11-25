import { useState } from "react";
import apiSubmit from "../loaders/apiSubmit";

export default function () {
	const [message, setMessage] = useState("")

	const submitForum = async event => {
		event.preventDefault();

		apiSubmit(event.target, setMessage)
	};

	return (
		<form className={"admin-content__form"} method="post" onSubmit={submitForum}>
			<h2 className="admin-content__form-title">
				Admin Panel
			</h2>

			<label htmlFor="categorie" className="admin-content__form-label">
				Type:
				<select name="categorie" id="type" className="admin-content__form-input"
					required>
					<option value="">Click to select pet type</option>
					<option value="dogs">Dog</option>
					<option value="cats">Cat</option>
					<option value="birds">Bird</option>
					<option value="other">Other</option>
				</select>
			</label>

			<label htmlFor="gender" className="admin-content__form-label">
				Gender:
				<select name="gender" id="gender" className="admin-content__form-input"
					required>
					<option value="">Click to select pet gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
			</label>

			<label htmlFor="breed" className="admin-content__form-label" >
				Breed:
				<input type="text" className="admin-content__form-input" name="breed" id="breed"
					required />
			</label>

			<label htmlFor="location" className="admin-content__form-label">
				Location:
				<input type="text" className="admin-content__form-input" name="location" id="location"
					required></input>
			</label>

			<label htmlFor="short_description" className="admin-content__form-label">
				Short Description:
				<input type="text" className="admin-content__form-input" name="short_description" id="short_description"
					required></input>
			</label>

			<label htmlFor="description" className="admin-content__form-label">
				Long Description:
				<textarea className="admin-content__form-input long-text" name="description" id="description"
					required></textarea>
			</label>

			<p className="admin-content__form-output">{message}</p>

			<button className="admin-content__form-button" type="submit">Submit New Pet</button>
		</form>
	)
}