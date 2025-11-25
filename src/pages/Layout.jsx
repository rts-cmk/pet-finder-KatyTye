import { Navigate, Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Layout() {
	let [shouldShowIntro, setShouldShowIntro] = useState((Boolean(localStorage.getItem("introCompleted")) || false))
	const location = useLocation();

	const shouldHide = location.pathname.includes("details")

	if (!shouldShowIntro) {
		return <Navigate to={"/intro"} />
	}

	return (
		<>
			{!shouldHide && <Header />}
			<Outlet />
			{!shouldHide && <Footer />}
		</>
	)
}