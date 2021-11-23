import * as controllerProducts from '../controllers/controllerProducts.js'

const routesProducts = (app) => {
    app.get('/inicio',controllerProducts.verInicio)
    app.get('/products',controllerProducts.view)

    }
    


export default routesProducts

