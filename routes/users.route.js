const { Router } = require('express');
const { userController } = require('../controllers/user.controllers');

const router = Router();

router.post('/post', userController.postUser);
router.patch('/patch', userController.patchUser);
router.delete('/:userId', userController.defaultUser);
router.get('/alluser', userController.getAllUser);
router.get('/userbyid', userController.getUserById);
router.get('/update', userController.gitUserUpdate)


module.exports = router;
