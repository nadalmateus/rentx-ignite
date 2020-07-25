import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const users = {
    name,
    email,
  };

  return response.json(users);
});

export default router;
