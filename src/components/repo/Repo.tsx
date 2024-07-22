import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import type { RepoProps } from "../../types/repo";
import { A, ContainerRapo, ContainerStatus } from "./Repo.modules";

const Repo = ({
	name,
	language,
	html_url,
	forks_count,
	stargazers_count,
}: RepoProps) => {
	return (
		<ContainerRapo>
			<h3>{name}</h3>
			<p style={{ color: "#00ED64", fontSize: "1rem" }}>
				<BsCodeSlash /> {language}
			</p>
			<ContainerStatus>
				<div>
					<AiOutlineStar style={{ color: "#fbff00", fontSize: "1rem" }} />
					<span>{stargazers_count}</span>
				</div>
				<div>
					<AiOutlineFork style={{ color: "#fbff00", fontSize: "1rem" }} />
					<span>{forks_count}</span>
				</div>
			</ContainerStatus>
			<A href={html_url} target="_blank" rel="noreferrer">
				<span>Ver código</span>
				<RiGitRepositoryLine />
			</A>
		</ContainerRapo>
	);
};

export default Repo;
