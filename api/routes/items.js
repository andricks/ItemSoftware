const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Crear un nuevo ítem
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

// Obtener todos los ítems
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

// Obtener un ítem por ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.json(item);
    } catch (err) {
        res.json({ message: err });
    }
});

// Actualizar un ítem
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(updatedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

// Borrar un ítem
router.delete('/:id', async (req, res) => {
    try {
        const removedItem = await Item.remove({ _id: req.params.id });
        res.json(removedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
