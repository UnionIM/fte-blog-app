import { useRef, useEffect, FC } from "react";
import styled from "@emotion/styled";

interface ModalProps {
  children: React.ReactNode | React.ReactNode[];
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  padding: 25px;
  border-radius: 8px;
  width: 70%;
  background: white;
`;

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    // @ts-ignore
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      // @ts-ignore
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, []);

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>{children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
