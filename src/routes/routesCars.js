import * as controllerCars from '../controllers/controllerCars.js'

const routesCars = app => {
    app.get('/carrito',controllerCars.viewcar)
 }
 export default routesCars