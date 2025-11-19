import { Navigate, Outlet } from "react-router";
import Header from "../components/Header";
import Intro from "./Intro";
import { useState } from "react";

export default function Layout() {
	let [shouldShowIntro, setShouldShowIntro] = useState((Boolean(localStorage.getItem("introCompleted")) || false))

	if (!shouldShowIntro) {
		return <Navigate to={"/intro"} />
	}

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}