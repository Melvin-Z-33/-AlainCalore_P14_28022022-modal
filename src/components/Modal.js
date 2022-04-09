import { React, useState } from 'react';
import './modale.css';

export default function Modal(props) {
	const [show, setShow] = useState(false);

	function toggleShow() {
		setShow(!show);
	}

	function doubleFunction(e) {
		props.secondFunction(e);
		toggleShow();
	}

	return (
		<div className="modal-content">
			<button className="button-save" onClick={doubleFunction}>
				save
			</button>
			{show ? (
				<>
					<div className="overlay">
						<div className="wrapper">
							<div className="modal">
								<button type="button" className="close" onClick={toggleShow}>
									<span>&times;</span>
								</button>
								<p>Employee Created!</p>
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
