let products=[
]
 export const verInicio = (req, res) => {
   res.status(200).render('inicio', { products: products})
}

 export const view =(req,res) => {
    res.status(200).render('productos',{products:products})
}

export const create = (req,res) =>{
   
   let product = req.body
   product.id = Math.floor(Math.random() * 500000)
   products.push(product)
   console.log(products)
   res.status(200).redirect('/productos')
}

export const del =(req, res) => {
   products = products.filter(element => element.id != req.body.id)
   res.status(200).redirect('/productos')
}
export const update = (req, res) => {
   let product = products.find(element => element.id == req.body.id)
   if (req.body.name) product.name = req.body.name
   if (req.body.price) product.price = req.body.price
   if (req.body.stock) product.stock = req.body.stock
   res.status(200).redirect('/productos')
}
