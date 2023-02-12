import { randomString, validateFile } from "./helper.js"
import createError from "http-errors";
import pool from './dbconnect.js';

export const create = (req, res, next) => {

    const hasPhoto = validateFile(req, 'photo');

    if (!hasPhoto) {
        return res.status(400).json([
            { message: "The photo is required." }
        ]);
    }

    const filename = randomString(50);
    const file = req.files.photo;
    const ext = file.name.split('.').pop();
    const path = `/${filename}.${ext}`;
    file.mv(`./public/${filename}.${ext}`);

    const query = `
        INSERT INTO products (name, price, description, photo, created_at)
        VALUES (?, ?, ?, ?, ?)
    `;

    const { name, price, description } = req.body;

    const data = [name, price, description, path, new Date()];

    pool.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "An error occured." });
        }
    });

    return res.status(201).json({ message: "Product created." });
}

export const getProducts = (req, res, next) => {
    const { id } = req.params;
    if (id) {
        let query = "SELECT * FROM products WHERE id = ?";
        pool.query(query, [id], (err, result) => {
            if (err)
                return res.status(500).json({ message: "An error occured." })
            else {
                const data = result[0];
                if (data)
                    return res.json(data);
                else
                    return next(createError(404, "Product not found."));
            }
        });
    } else {
        let query = "SELECT * FROM products";
        pool.query(query, (err, result) => {
            if (err)
                return res.status(500).json({ message: "An error occured." })
            else
                return res.json(result);
        });
    }
}

export const deleteProduct = (req, res, next) => {
    const { id } = req.params;
    const query = "DELETE FROM products WHERE id = ?";
    pool.query(query, [id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "An error occured." });
        else {
            if (result.affectedRows == 0)
                return next(createError(404, "Product not found."));
            else
                return res.json({ message: "Product deleted." });
        }
    });
}

export const update = (req, res, next) => {
    const { id } = req.params;
    if (req.files) {
        const filename = randomString(50);
        const file = req.files.photo;
        const ext = file.name.split('.').pop();
        req.body.photo = `/${filename}.${ext}`;
        file.mv(`./public/${filename}.${ext}`);
    }

    const query = `
        UPDATE products SET name = ?, price = ?, description = ?, photo = ?
        WHERE id = ?
    `;

    const { name, price, description, photo } = req.body;

    const data = [name, price, description, photo, id];

    pool.query(query, data, (err, result) => {
        if (err)
            return res.status(500).json({ message: "An error occured." });
        else {
            if (result.affectedRows == 0)
                return next(createError(404, "Product not found."));
            else
                return res.json({ message: "Product updated." });
        }
    });
}