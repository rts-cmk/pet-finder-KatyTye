import { Outlet } from "react-router";
import Header from "../components/Header";
import Intro from "./Intro";

export default function Layout() {
	let introStatus = (Boolean(localStorage.getItem("introCompleted")) || false)

	return (
		<>
			{
				(!introStatus) && <Intro status={introStatus} />
			}

			{
				(introStatus) && <>
					<Header />
					<Outlet />
				</>
			}
		</>
	)
}