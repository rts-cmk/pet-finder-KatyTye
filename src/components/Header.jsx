import { HiLocationMarker, HiOutlineChevronDown } from "react-icons/hi";
import { Link, useLoaderData } from "react-router";
import { LuBell } from "react-icons/lu";

export default function Header({ hide = false }) {
	const userData = useLoaderData()["user"]

	return (
		(hide === false &&
			<header className="top-content">
				<figure className="top-content__profile">
					<div className="top-content__profile-image-holder">
						<img src={`.${userData.image}`} className="top-content__profile-image" alt="profile image"></img>
					</div>
					<figcaption className="top-content__profile-city">
						<HiLocationMarker className="top-content__profile-icon" />
						<span>
							{userData.location}
						</span>
						<HiOutlineChevronDown className="top-content__profile-icon" />
					</figcaption>
				</figure>

				<Link to={"/notifications"} className="top-content__profile-notifications">
					<LuBell />
				</Link>
			</header>)
	)
}