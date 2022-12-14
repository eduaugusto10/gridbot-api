import { Router } from "express";
import { BotController } from "../controllers/BotController";
import { BotCustomerAssign } from "../controllers/BotCustomerAssign";
import { MasterOrdersController } from "../controllers/MasterOrdersController";
import { OrderController } from "../controllers/OrderController";
import { SessionController } from "../controllers/SessionController";
import { SlaveOrdersController } from "../controllers/SlaveOrdersController";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

const routes = Router()

routes.post('/user', new UserController().store)
routes.post('/login', new SessionController().login)

//METATRADER
routes.get('/user-by-account/:account', new UserController().getByAccount)
routes.post('/order', new OrderController().store)
routes.get('/order-today', new OrderController().getOrderToday)

routes.post('/master/total-orders', new MasterOrdersController().createOrUpdate)
routes.post('/slave/total-orders', new SlaveOrdersController().createOrUpdate)
routes.get('/slave', new SlaveOrdersController().getQtyOrders)
routes.post('/close-by-symbol', new OrderController().closeErrorSymbol)

routes.use(authMiddleware)
// Users
routes.get('/user/:id', new UserController().getById)
routes.get('/user', new UserController().getAll)
routes.delete('/user/:id', new UserController().delete)
routes.put('/user/:id', new UserController().update)

// Orders
routes.get('/order/:id', new OrderController().getById)
routes.get('/order', new OrderController().getAll)
routes.put('/order/:id', new OrderController().update)
routes.delete('/order/:id', new OrderController().delete)

// Magic Number
routes.post('/bot', new BotController().store)
routes.get('/bot', new BotController().getAll)
routes.get('/bot/:id', new BotController().getById)
routes.put('/bot/:id', new BotController().update)
routes.delete('/bot/:id', new BotController().delete)

// Magic Number by Customer
routes.post('/botcustomer', new BotCustomerAssign().store)
routes.get('/botcustomer/:customer', new BotCustomerAssign().getAllByCustomer)
routes.put('/botcustomer/:id', new BotCustomerAssign().update)
routes.delete('/botcustomer/:id', new BotCustomerAssign().delete)

export default routes