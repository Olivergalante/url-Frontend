import { useState } from "react";
import { nanoid } from "nanoid";

export default function UrlForm() {
	const [title, setTitle] = useState("");
	const [longUrl, setUrl] = useState("");

	const handleChangetitle = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeurl = (e) => {
		setUrl(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUrl = {
			title,
			longUrl,
			shortUrl: nanoid(8),
			user: 1,
		};

		const api_url = "http://localhost:8000/url/";
		const data = await fetch(api_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUrl),
		}).then((response) => response.json());
		console.log("DATA", data);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Title
					<input
						type="text"
						name="title"
						value={title}
						onChange={handleChangetitle}
					/>
				</label>
				<label>
					LongUrl
					<input
						type="url"
						name="url"
						value={longUrl}
						onChange={handleChangeurl}
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</>
	);
}
