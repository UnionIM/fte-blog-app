import { useRef, useEffect, FC, ReactNode } from "react";
import { ModalContent, ModalOverlay } from "./styled";

interface ModalProps {
  children: ReactNode | ReactNode[];
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (ev: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(ev.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.addEventListener("mousedown", handleOverlayClick);
    };
  }, []);

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>{children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
