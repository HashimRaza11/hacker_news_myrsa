const express = require('express');
const router = express.Router();

router.get('/stories', (req, res) => {
    res.json({ message: 'Fetching stories' });
});

module.exports = router;
