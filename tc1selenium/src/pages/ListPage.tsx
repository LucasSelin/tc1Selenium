import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems, deleteItem, Item } from '../services/ItemService';
import DeleteButton from '../components/DeleteButton';
import './PageStyles.css';

const ListPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(getItems());
  }, []);

  const handleDelete = (id: number) => {
    try {
      deleteItem(id);
      setItems(getItems());
      alert('Item deletado com sucesso!');
    } catch (error) {
      alert('Ocorreu uma falha ao deletar o item.');
    }
  };

  return (
    <div className="page-container">
      <h1>Lista de Itens</h1>
      <Link to="/create">Criar Novo Item</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}{" "}
            <Link to={`/view/${item.id}`}>Ver</Link> |{" "}
            <Link to={`/edit/${item.id}`}>Editar</Link> |{" "}
            <DeleteButton onDelete={() => handleDelete(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
