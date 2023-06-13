import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledModalContent = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	border-radius: 4px;
	padding: 1em;
	width: 100%;
	max-width: 500px;
	max-height: 100%;
	overflow-y: auto;
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1em;
`;

const StyledModalTitle = styled.h2`
	margin: 0;
	font-size: 1.5em;
`;

const StyledModalClose = styled.button`
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 1.5em;
	padding: 0;
	color: ${(props) => props.theme.colors.secondary};
	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
`;

const StyledModalBody = styled.div`
	margin-bottom: 1em;
`;

const StyledModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledModalButton = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	border: 0;
	cursor: pointer;
	color: ${(props) => props.theme.colors.background};
	padding: 0.5em 1em;
	border-radius: 4px;
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100vw;
	height: 100vh;
	background-color: transparent;
`;

const StyledModalOverlayContent = styled.div`
	background-color: transparent;
	border-radius: 4px;
	padding: 1em;
	width: 100%;
	max-width: 500px;
	max-height: 100%;
	overflow-y: auto;
`;

const StyledModalOverlayHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1em;
`;

const StyledModalOverlayTitle = styled.h2`
	margin: 0;
	font-size: 1.5em;
`;

const StyledModalOverlayClose = styled.button`
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 1.5em;
	padding: 0;
	color: ${(props) => props.theme.colors.secondary};
	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
`;

const StyledModalOverlayBody = styled.div`
	margin-bottom: 1em;
`;

const StyledModalOverlayFooter = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledModalOverlayButton = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	border: 0;
	cursor: pointer;
	color: ${(props) => props.theme.colors.background};
	padding: 0.5em 1em;
	border-radius: 4px;
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

export const Modal = ({ children, title, onClose, onConfirm, showOverlay }) => {
	return (
		<StyledModal>
			<StyledModalContent>
				<StyledModalHeader>
					<StyledModalTitle>{title}</StyledModalTitle>
					<StyledModalClose onClick={onClose}>X</StyledModalClose>
				</StyledModalHeader>
				<StyledModalBody>{children}</StyledModalBody>
				<StyledModalFooter>
					<StyledModalButton onClick={onConfirm}>Confirm</StyledModalButton>
				</StyledModalFooter>
			</StyledModalContent>
			{showOverlay && (
				<StyledModalOverlay>
					<StyledModalOverlayContent>
						<StyledModalOverlayHeader>
							<StyledModalOverlayTitle>{title}</StyledModalOverlayTitle>
							<StyledModalOverlayClose onClick={onClose}>
								X
							</StyledModalOverlayClose>
						</StyledModalOverlayHeader>
						<StyledModalOverlayBody>{children}</StyledModalOverlayBody>
						<StyledModalOverlayFooter>
							<StyledModalOverlayButton onClick={onConfirm}>
								Confirm
							</StyledModalOverlayButton>
						</StyledModalOverlayFooter>
					</StyledModalOverlayContent>
				</StyledModalOverlay>
			)}
		</StyledModal>
	);
};

export default Modal;
