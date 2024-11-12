import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getItemById, Item } from '../services/ItemService';
import './PageStyles.css';

const ViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | undefined>(undefined);

  useEffect(() => {
    setItem(getItemById(Number(id)));
  }, [id]);

  return (
    <div className="page-container">
      <h1>Visualizar Item {id}</h1>
      {item ? (
        <p>Detalhes do item: {item.name}</p>
      ) : (
        <p>Item não encontrado.</p>
      )}
      <Link to={`/edit/${id}`}>Editar Item</Link>
    </div>
  );
};

export default ViewPage;
