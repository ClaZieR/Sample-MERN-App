import express  from "express";
import creatCat from "../controller/controller.js";
import { getCat,getTrans,creatTrans,getJoin} from "../controller/controller.js";
const routes = express.Router();

routes.route('/api/categories')
.post(creatCat)
.get(getCat)

routes.route('/api/transactions')
.post(creatTrans)
.get(getTrans)

routes.route(('/api/getjoin'))
.get(getJoin)

export default routes;