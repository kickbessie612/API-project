// backend/routes/api/index.js
const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user });
});

// GET /api/restore-user

router.get('/restore-user', (req, res) => {
  return res.json(req.user);
});

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get('/require-auth', requireAuth, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
