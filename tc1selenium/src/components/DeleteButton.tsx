// src/components/DeleteButton.tsx
import React from 'react';

interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button onClick={onDelete} style={{ color: 'red' }}>
      Deletar
    </button>
  );
};

export default DeleteButton;
