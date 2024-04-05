import { Router } from "express";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../../controllers/book";
import validateIdParam from "../../middlewares/validateIdParam";

const router = Router()

router.post("/", createBook)
router.get("/", getBooks)
router.put("/:id", validateIdParam, updateBook)
router.get("/:id", validateIdParam, getBook)
router.delete("/:id", validateIdParam, deleteBook)



export default router