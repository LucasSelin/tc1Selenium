import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { createItem } from '../services/ItemService';
import './PageStyles.css';

const CreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = async (name: string) => {
    
    if (!name.trim()) { // valida nome
      alert('Insira um nome ao item');
      return;
    }

    try {
      await createItem(name);
      alert('Item inserido com sucesso!');
      navigate('/');
    } catch (error) {
      alert('Ocorreu uma falha ao inserir o item.');
    }
  };

  return (
    <div className="page-container">
      <h1>Criar Novo Item</h1>
      <ItemForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePage;
