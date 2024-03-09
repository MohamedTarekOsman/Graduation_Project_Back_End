const express = require('express');
const { createFiles, getAllFiless, getFiles, updateFiles, deleteFiles } = require('../controllers/filesController');
const router = express.Router();

router.route('/')
.post(createFiles)
.get(getAllFiless)

router.route('/:id')
.get(getFiles)
.put(updateFiles)
.delete(deleteFiles)


module.exports = router;