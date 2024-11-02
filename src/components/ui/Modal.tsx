import React from 'react';

// Main Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-full overflow-auto rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

// ModalHeader Component
interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  return (
    <div className="border-b border-gray-200 pb-3 mb-4">
      <h3 className="text-xl font-bold">{children}</h3>
    </div>
  );
};

// ModalContent Component
interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

// ModalFooter Component
interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <div className="flex justify-end mt-4 border-t border-gray-200 pt-3">{children}</div>;
};

// ModalClose Component
interface ModalCloseProps {
  onClose: () => void;
}

export const ModalClose: React.FC<ModalCloseProps> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="text-gray-700 bg-transparent px-4 py-2 rounded-md hover:bg-gray-100"
    >
      Close
    </button>
  );
};
