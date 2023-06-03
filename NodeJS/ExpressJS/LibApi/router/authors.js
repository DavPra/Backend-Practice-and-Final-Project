const express = require('express');
const router = express.Router();
const db = require('../services/database');
const passport = require('passport');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/authors', async (req, res) => {
    const authors = await db.getAuthors()
    res.json(authors)
}
);

router.post('/authors', async (req, res) => {
    const author = await db.createAuthor(req.body)
    res.json(author)
}
);

router.put('/authors/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const author = await db.editAuthors({id: req.params.id, name: req.body.name})
    res.json(author)
}
);

module.exports = router;
