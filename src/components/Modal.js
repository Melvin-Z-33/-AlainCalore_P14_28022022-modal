import React, { useState } from 'react';

/**
 * @return  Modal component
 * @param {string} props.id - give an ID for the button
 * @param {string} props.buttonText - allows to change the text of the modal button
 * @param {string} props.modalText - allows to change the text of the modal
 */

function Modal(props) {
	const styles = {
		button: {
			display: 'block',
			margin: 'auto',
		},
		overlay: {
			background: 'rgba(0, 0, 0, 0.5)',
			position: 'fixed',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
		},
		wrapper: {
			height: '45px',
			width: '389px',
			background: 'white',
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			borderRadius: '3%',
		},
		close: {
			position: 'absolute',
			right: '-8px',
			top: '-8px',
			borderRadius: '50%',
			border: 'none',
			backgroundColor: 'black',
			color: 'white',
			width: '30px',
			height: '30px',
		},
		paragraph: {
			width: '100%',
			position: 'absolute',
		},
	};

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
			<button
				id={props.id}
				className="button-save"
				style={styles.button}
				onClick={doubleFunction}
			>
				{props.buttonText}
			</button>

			{show ? (
				<>
					<div className="overlay" style={styles.overlay}>
						<div className="wrapper" style={styles.wrapper}>
							<div className="modal">
								<button
									type="button"
									className="close"
									style={styles.close}
									onClick={toggleShow}
								>
									<span>&times;</span>
								</button>
								<p style={styles.paragraph}>{props.modalText}</p>
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}

export default Modal;
