import { type KeyboardEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ContainerSearch, Warpper } from "./Search.modules";

type SearchProps = {
	loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
	const [userName, setUserName] = useState("");

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			loadUser(userName);
		}
	};

	return (
		<ContainerSearch>
			<h2>Busque por um usuário:</h2>
			<p>Conheça seus melhores repositórios</p>
			<Warpper>
				<input
					type="text"
					placeholder="Digite o nome do usuário"
					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button type="button" onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</Warpper>
		</ContainerSearch>
	);
}

export default Search;
