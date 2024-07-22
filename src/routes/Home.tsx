import UserNotFoundError from "../components/error/Error";
import Search from "../components/search/Search";
import User from "../components/users/User";

import type { Userprops } from "../types/user";

import { useState } from "react";

function Home() {
	const [user, setUser] = useState<Userprops | null>(null);
	const [error, setError] = useState(false);

	const loadUser = async (userName: string) => {
		setError(false);
		setUser(null);
		const res = await fetch(`https://api.github.com/users/${userName}`);
		const data = await res.json();

		if (res.status === 404) {
			setError(true);
			return;
		}
		const { avatar_url, login, location, followers, following } = data;

		const userData: Userprops = {
			avatar_url,
			login,
			location,
			followers,
			following,
		};
		setUser(userData);
	};

	return (
		<div>
			<Search loadUser={loadUser} />
			{user && <User {...user} />}
			{error && <UserNotFoundError />}
		</div>
	);
}

export default Home;
