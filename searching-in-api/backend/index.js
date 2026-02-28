import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
    const products = [
  {
    "id": 1,
    "name": "Smartphone",
    "price": 699.99,
    "images": 'https://images.unsplash.com/photo-1770347271178-97a4f8ffb183?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
  },
  {
    "id": 2,
    "name": "Laptop",
    "price": 1299.00,
    "images": 'https://images.unsplash.com/photo-1771533679924-8495042032a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
  },
  {
    "id": 3,
    "name": "Headphones",
    "price": 199.50,
    "images": 'https://images.unsplash.com/photo-1772173333598-31ffc020d58a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    "id": 4,
    "name": "Smartwatch",
    "price": 249.99,
    "images": 'https://tse1.explicit.bing.net/th/id/OIP.hLIM2Zz-fTE5-c1CFN_VYwHaI3?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    "id": 5,
    "name": "Bluetooth Speaker",
    "price": 89.00,
    "images": 'https://tse3.mm.bing.net/th/id/OIP.DOQWF2YQ30nCSkOIwOQoYQHaI3?rs=1&pid=ImgDetMain&o=7&rm=3'
  }
]
// http://localhost:3000/api/product?search=Laptop

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }
    
    setTimeout(() => {
        res.send(products);
    }, 3000);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

