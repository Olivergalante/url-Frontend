import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginForm from "./components/LoginForm.jsx";
import UrlForm from "./components/urlFrom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UrlForm />
		<LoginForm />
	</React.StrictMode>
);
