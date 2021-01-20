import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
        const { email, password } = request.body;

        const autenticateUser = new AuthenticateUserService();

        const { user, token } = await autenticateUser.execute({
            email,
            password,
        })

        // @ts-expect-error
        delete user.password;
        return response.json({ user, token });

});

export default sessionsRouter;
