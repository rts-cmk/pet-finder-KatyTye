import { IoChatbubbleOutline, IoHeartOutline, IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { NavLink } from "react-router";

export default function Footer() {

	return (
		<footer className="bottom-content">
			<NavLink to={"/"} className={"bottom-content__button"}>
				<IoHomeOutline />
			</NavLink>
			<NavLink to={"/messages"} className={"bottom-content__button"}>
				<IoChatbubbleOutline />
			</NavLink>
			<NavLink to={"/liked"} className={"bottom-content__button"}>
				<IoHeartOutline />
			</NavLink>
			<NavLink to={"/profile"} className={"bottom-content__button"}>
				<GoPerson />
			</NavLink>
		</footer>
	)
}