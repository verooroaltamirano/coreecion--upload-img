let productos=[
   {
      name:"televisor",
      price:15000,
      stock:10
   }
   
]
 export const verInicio = (req, res) => {
   res.status(200).render('inicio', { products: products})
}
 export const view =(req,res) => {
    res.status(200).render('productos',{productos:products})
}

 

