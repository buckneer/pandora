import React from 'react';
import { RiCloseCircleFill } from '@remixicon/react';

export interface ShareCadModalProps {
  open: boolean;
  onClose: () => void;
  sharecadUrl: string;
}

const ShareCadModal: React.FC<ShareCadModalProps> = ({ open, onClose, sharecadUrl }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-11/12 max-w-4xl h-4/5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <RiCloseCircleFill size={24} />
        </button>

        {/* ShareCAD iframe */}
        <iframe
          src={sharecadUrl}
          title="ShareCAD Viewer"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ShareCadModal;
