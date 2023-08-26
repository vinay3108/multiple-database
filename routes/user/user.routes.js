import {Router as router} from 'express';
import { createUser } from '../../controllers/user/user.controller.js';

router.route("/").post(createUser);

export default router;