const express = require('express');
const { createPublicNotes, getAllPublicNotess, getPublicNotes, updatePublicNotes, deletePublicNotes } = require('../controllers/publicNotesController');
const router = express.Router();

router.route('/')
.post(createPublicNotes)
.get(getAllPublicNotess)

router.route('/:id')
.get(getPublicNotes)
.put(updatePublicNotes)
.delete(deletePublicNotes)


module.exports = router;