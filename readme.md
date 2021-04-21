## post new product
http://localhost:3000/addproduct
{
    "name": "product 3",
    "category": "catagory of product",
    "details": {
        "description": "The phone comes with a 6.50-inch touchscreen display with a resolution of 1242x2688 pixels at a pixel density of 458 pixels per inch (ppi).",
        "price": 300,
        "discount": 10,
        "phoneNumber": "0521234567",
        "images": ["https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    }
}

## get all product
http://localhost:3000/

## get product by  id
http://localhost:3000/product/:id

## update product by id

http://localhost:3000/products/607ff3ae84a92b779488a844/true
or 
http://localhost:3000/products/607ff3ae84a92b779488a844/false
## delete all data
http://localhost:3000/products/delete/all

## delete by id
http://localhost:3000/products/:id