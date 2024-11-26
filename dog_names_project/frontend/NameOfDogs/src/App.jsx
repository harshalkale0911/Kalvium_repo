import React, { useState } from 'react';
import DogList from './components/DogList';
import AddDogForm from './components/AddDogForm';
import EditDogForm from './components/EditDogForm';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  const handleDogAdded = (newDog) => {
    setDogs([...dogs, newDog]);
  };

  const handleDogUpdated = (updatedDog) => {
    setDogs(dogs.map((dog) => (dog._id === updatedDog._id ? updatedDog : dog)));
    setEditingDog(null);
  };

  return (
    <div>
      <h1>Funny Dog Names</h1>
      <AddDogForm onDogAdded={handleDogAdded} />
      {editingDog && <EditDogForm dog={editingDog} onDogUpdated={handleDogUpdated} />}
      <DogList />
    </div>
  );
};

export default App;
