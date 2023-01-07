import { useNavigate } from "react-router-dom";

function Modal() {
	const navigate = useNavigate()
	return (
		<div>
			Modal
			<button onClick={() => navigate(-1)}>← Back</button>
		</div>
	);
}

export default Modal;
