import React, { useState } from 'react';
import { addDog } from '../api';

const AddDogForm = ({ onDogAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      const newDog = await addDog(name);
      onDogAdded(newDog);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter dog name" 
      />
      <button type="submit">Add Dog</button>
    </form>
  );
};

export default AddDogForm;
