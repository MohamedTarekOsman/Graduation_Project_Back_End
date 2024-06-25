const express = require('express');
const { createWallet, getAllWallets, getWallet, updateWallet, deleteWallet } = require('../controllers/walletController');
const router = express.Router();

router.route('/')
.post(createWallet)
.get(getAllWallets)

router.route('/:id')
.get(getWallet)
.put(updateWallet)
.delete(deleteWallet)


module.exports = router;