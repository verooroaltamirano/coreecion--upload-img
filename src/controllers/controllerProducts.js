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
   product.url= product.id +".jpg"
   products.push(product)

   const EDFile = req.files.url
    EDFile.mv(`./public/img/productos/${product.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })

   
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
