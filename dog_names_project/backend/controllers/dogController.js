const Dog = require('../models/dogModel');

// Get all dog names
exports.getDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new dog name
exports.addDog = async (req, res) => {
  const { name } = req.body;
  try {
    const newDog = new Dog({ name });
    await newDog.save();
    res.json(newDog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Edit an existing dog name
exports.updateDog = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const dog = await Dog.findByIdAndUpdate(id, { name }, { new: true });
    res.json(dog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a dog name
exports.deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    await Dog.findByIdAndDelete(id);
    res.json({ message: 'Dog deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
