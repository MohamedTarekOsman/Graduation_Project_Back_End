const express = require('express');
const { createAttachment, getAllAttachments, getAttachment, updateAttachment, deleteAttachment } = require('../controllers/attachmentController');
const router = express.Router();

router.route('/')
.post(createAttachment)
.get(getAllAttachments)

router.route('/:id')
.get(getAttachment)
.put(updateAttachment)
.delete(deleteAttachment)


module.exports = router;