import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { getItemById, updateItem } from '../services/ItemService';
import './PageStyles.css';

const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const item = getItemById(Number(id));
    if (item) {
      setName(item.name);
    }
  }, [id]);

  const handleEdit = (updatedName: string) => {
    try {
      updateItem(Number(id), updatedName);
      alert('Item editado com sucesso!');
      navigate('/');
    } catch (error) {
      alert('Ocorreu uma falha ao editar o item.');
    }
  };

  return (
    <div className="page-container">
      <h1>Editar Item {id}</h1>
      <ItemForm initialName={name} onSubmit={handleEdit} />
    </div>
  );
};

export default EditPage;
