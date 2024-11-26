const express = require('express');
const { getDogs, addDog, updateDog, deleteDog } = require('../controllers/dogController');

const router = express.Router();

router.get('/dogs', getDogs);
router.post('/dogs', addDog);
router.put('/dogs/:id', updateDog);
router.delete('/dogs/:id', deleteDog);

module.exports = router;
