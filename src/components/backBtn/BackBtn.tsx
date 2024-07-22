import { useNavigate } from "react-router-dom";

import { Button } from "./BackBtn.modules";

const BackBtn = () => {
	const navigate = useNavigate();

	return (
		<>
			<Button onClick={() => navigate(-1)}>Voltar</Button>
		</>
	);
};

export default BackBtn;
