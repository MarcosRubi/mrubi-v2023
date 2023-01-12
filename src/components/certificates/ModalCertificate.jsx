import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { AiOutlineClose } from "react-icons/ai";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

function ModalCertificate() {
	const [certificateActive, setCertificateActive] = useState([])
	const { name } = useParams()
	const { findCertificateByName, certificates, resetTitle } = useContext(MainContext)


	useEffect(() => {
		setCertificateActive(findCertificateByName(name))
	}, [])


	const showNewCertificate = (id) => {
		if (id <= 1) {
			setCertificateActive([certificates[certificates.length - 1]])
			return
		}
		if (id > certificates.length) {
			setCertificateActive([certificates[1]])
			return
		}
		setCertificateActive([certificates[id - 1]])
	}

	if (certificateActive.length === 0) {
		return
	}

	return (
		<div className="modal p-fixed d-flex flex-column">
			<div className="d-flex jc-end">
				<Link to={'/'} className="btn btn-secondary"><AiOutlineClose /></Link>
			</div>
			<div className="modal__img p-relative d-flex jc-center">
				<img src={`../${certificateActive[0].routeImg}`} alt={`Certificado del curso ${certificateActive[0].name} completado por Marcos Rubí`} />
			</div>
			<div className="d-flex jc-between mb-2 buttons">
				<Link to={`/certificado/${resetTitle(certificateActive[0].name)}`} className="btn btn-secondary" onClick={() => showNewCertificate(certificateActive[0].id - 1)}><GrCaretPrevious /></Link>
				<Link to={`/certificado/${resetTitle(certificateActive[0].name)}`} className="btn btn-secondary" onClick={() => showNewCertificate(certificateActive[0].id + 1)}><GrCaretNext /></Link>
			</div>
		</div>
	);
}

export default ModalCertificate;
