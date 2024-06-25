const express = require('express');
const { createAgenda, getAgenda, updateAgenda, deleteAgenda } = require('../controllers/agendaController');
const router = express.Router();

router.route('/')
.post(createAgenda)


router.route('/:id')
.get(getAgenda)
.put(updateAgenda)
.delete(deleteAgenda)


module.exports = router;