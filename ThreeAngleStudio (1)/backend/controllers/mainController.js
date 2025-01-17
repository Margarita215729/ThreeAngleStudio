const db = require('../models/database');

exports.getHome = (req, res) => {
    res.status(200).json({ message: 'Welcome to ThreeAngleStudio API!' });
};

exports.submitContactForm = async (req, res) => {
    const { name, contactMethod, email, phone, message } = req.body;
    if (!name || !contactMethod || (!email && !phone) || !message) {
        return res.status(400).json({ error: 'All required fields must be filled!' });
    }
    try {
        await db.query(
            'INSERT INTO contact_forms (name, contact_method, email, phone, message) VALUES ($1, $2, $3, $4, $5)',
            [name, contactMethod, email, phone, message]
        );
        res.status(200).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await db.query('SELECT * FROM services');
        res.status(200).json(services.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateService = async (req, res) => {
    const { id, price } = req.body;
    if (!id || !price) {
        return res.status(400).json({ error: 'ID and Price are required!' });
    }
    try {
        await db.query('UPDATE services SET price = $1 WHERE id = $2', [price, id]);
        res.status(200).json({ message: 'Service updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getGallery = async (req, res) => {
    try {
        const gallery = await db.query('SELECT * FROM gallery');
        res.status(200).json(gallery.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.addGalleryItem = async (req, res) => {
    const { title, imageUrl } = req.body;
    if (!title || !imageUrl) {
        return res.status(400).json({ error: 'Title and Image URL are required!' });
    }
    try {
        await db.query('INSERT INTO gallery (title, image_url) VALUES ($1, $2)', [title, imageUrl]);
        res.status(200).json({ message: 'Gallery item added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
