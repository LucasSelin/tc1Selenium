// src/components/ItemForm.tsx
import React, { useState } from 'react';

interface ItemFormProps {
  initialName?: string;
  onSubmit: (name: string) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ initialName = '', onSubmit }) => {
  const [name, setName] = useState(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ItemForm;
