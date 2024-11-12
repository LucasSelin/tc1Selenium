import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { createItem } from '../services/ItemService';
import './PageStyles.css';

const CreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = (name: string) => {
    createItem(name);
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1>Criar Novo Item</h1>
      <ItemForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePage;
