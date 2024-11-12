export interface Item {
    id: number;
    name: string;
  }
  
  let items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  
  export const getItems = (): Item[] => {
    return items;
  };
  
  export const getItemById = (id: number): Item | undefined => {
    return items.find((item) => item.id === id);
  };
  
  export const createItem = (name: string): void => {
    const newItem: Item = {
      id: Date.now(),
      name,
    };
    items.push(newItem);
  };
  
  export const updateItem = (id: number, name: string): void => {
    const item = getItemById(id);
    if (item) {
      item.name = name;
    }
  };
  
  export const deleteItem = (id: number): void => {
    items = items.filter((item) => item.id !== id);
  };
  