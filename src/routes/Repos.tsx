import type { RepoProps } from "../types/repo";

import BackBtn from "../components/backBtn/BackBtn";
import Repo from "../components/repo/Repo";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/loader/Loader";

import { ContainerMap, ContainerRapos } from "./Repos.modules";

const Repos = () => {
	const { username } = useParams();

	const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const loadrepos = async (username: string) => {
			// 1. Moved `username` parameter
			setIsLoading(true);

			const res = await fetch(`https://api.github.com/users/${username}/repos`);
			const data = await res.json();

			setIsLoading(false);

			let orderedRepos = data.sort(
				(a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count,
			);

			orderedRepos = orderedRepos.slice(0, 5);

			setRepos(orderedRepos);
		};

		if (username) {
			loadrepos(username); // 2. Ensure `username` is passed when called
		}
	}, [username]); // 3. Added `username` as a dependency

	if (!repos && isLoading) return <Loader />;

	return (
		<>
			<ContainerRapos>
				<BackBtn />
				<h2>Explore os repositórios do usuário: {username}</h2>
				{repos && repos.length === 0 && <p>Não há repositórios.</p>}
				{repos && repos.length > 0 && (
					<ContainerMap>
						{repos.map((repo: RepoProps) => (
							<Repo key={repo.name} {...repo} />
						))}
					</ContainerMap>
				)}
			</ContainerRapos>
		</>
	);
};

export default Repos;
