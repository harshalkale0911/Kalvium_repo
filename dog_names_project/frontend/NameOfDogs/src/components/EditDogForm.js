import React, { useState } from 'react';
import { updateDog } from '../api';

const EditDogForm = ({ dog, onDogUpdated }) => {
  const [name, setName] = useState(dog.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== dog.name) {
      const updatedDog = await updateDog(dog._id, name);
      onDogUpdated(updatedDog);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Edit dog name" 
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditDogForm;
