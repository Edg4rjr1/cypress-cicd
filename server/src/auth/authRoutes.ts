// auth/authRoutes.js
import { Router } from 'express'
import { verificaTokenJWT } from './verificaTokenJWT.js'
import { login, logout } from './login.js'

export const authRouter = Router()

// Adicione um middleware de log para todas as rotas do authRouter
authRouter.use((req, res, next) => {
  console.log(`Requisição para /auth${req.path} - Método: ${req.method}`);
  next();
});

authRouter.post('/login', login)
authRouter.post('/logout', verificaTokenJWT(), logout)

export default (app: any): void => {
  app.use('/auth', authRouter)
}