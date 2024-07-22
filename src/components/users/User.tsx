import { MdLocationPin } from "react-icons/md";
import type { Userprops } from "../../types/user";
import { ContainerStatus, ContainerUsers, P, StyledLink } from "./User.modules";

const User = ({
	login,
	avatar_url,
	location,
	followers,
	following,
}: Userprops) => {
	return (
		<ContainerUsers>
			<img src={avatar_url} alt={login} />
			<h2>{login}</h2>
			{location && (
				<p>
					<MdLocationPin />
					<span>{location}</span>
				</p>
			)}
			<ContainerStatus>
				<div>
					<p>Seguidores:</p>
					<P>{followers}</P>
				</div>
				<div>
					<p>Seguindo:</p>
					<P>{following}</P>
				</div>
			</ContainerStatus>
			<StyledLink to={`/repos/${login}`}>Ver melhores projetos</StyledLink>
		</ContainerUsers>
	);
};

export default User;
