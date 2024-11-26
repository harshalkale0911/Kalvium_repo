import React, { useEffect, useState } from 'react';
import { getDogs, deleteDog } from '../api';

const DogList = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const data = await getDogs();
      setDogs(data);
    };
    fetchDogs();
  }, []);

  const handleDelete = async (id) => {
    await deleteDog(id);
    setDogs(dogs.filter(dog => dog._id !== id));
  };

  return (
    <div>
      <h1>Dog Names</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog._id}>
            {dog.name}
            <button onClick={() => handleDelete(dog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
