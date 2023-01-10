
const express = require("express");
const { getAllBooks, addABook, updateABook, deleteABook } = require("../controller/bookController");
const router =  express.Router();


router.get("/getAllBooks", getAllBooks);
router.post("/addABook", addABook);
router.put("/updateABook", updateABook);
router.delete("/deleteABook/:id", deleteABook );

module.exports = router;