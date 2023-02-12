import { Router } from "express";
import { create, deleteProduct, getProducts, update } from "./controller.js";
import { validator } from 'express-fastest-validator'
import { schema } from "./validationSchemas.js";

const router = Router();

router.post('/create', validator(schema), create);
router.get('/products/:id?', getProducts);
router.delete('/products/:id', deleteProduct);
router.put('/update/:id', validator(schema), update);

export default router;