import { useNavigate } from "react-router-dom";

function ModalCertificate() {
	const navigate = useNavigate()
	return (
		<div>
			ModalCertificate
			<button onClick={() => navigate(-1)}>← Back</button>
		</div>
	);
}

export default ModalCertificate;
