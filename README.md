**eCommerce API Documentation**
This repository contains the code for an eCommerce API built with Node.js, Express.js, MongoDB, and Mongoose. The API allows administrators to manage product inventory through various endpoints.

**API Endpoints**

**1.** Add Product (POST /products/create)

URL: http://localhost:3000/products/create

Method: POST

Body (JSON):

{
  "name": "laptop",
  "quantity": 10
}


**2**. List Products (GET /products)

URL: http://localhost:3000/products

Method: GET


**3**. Delete Product (DELETE /products/:id)

URL: http://localhost:3000/products/INSERT_PRODUCT_ID_HERE

Method: DELETE

_Replace INSERT_PRODUCT_ID_HERE with the actual ID of the product you want to delete._


**4**. Update Product Quantity (POST /products/:id/update_quantity/?number=10)

URL: http://localhost:3000/products/INSERT_PRODUCT_ID_HERE/update_quantity/?number=10

Method: POST

_Replace INSERT_PRODUCT_ID_HERE with the actual ID of the product you want to update._

Query Parameter: number=10 (You can change the number as needed.)

