import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Bong',
      email: 'admin@yahoo.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: true,
    },
    {
      name: 'Kamal',
      email: 'kamal@yahoo.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
    },
  ],

    products: [
      {
        
        name: 'Jacket',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 19,
        countInStock: 17,
        brand: 'tsho',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'vest',
        category: 'bag',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 12,
        brand: 'hima',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'cap',
        category: 'watch',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 9,
        brand: 'rioswatch',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality ',
      },
      {
        
        name: 'sunny glass',
        category: 'glass',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 0,
        brand: 'glassy',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality ',
      },
      {
        
        name: 'hat ',
        category: 'band',
        image: '/images/p3.jpg',
        price: 65,
        countInStock: 2,
        brand: 'banner',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality ',
      },
      {
        
        name: 'b-cap',
        category: 'rubiks',
        image: '/images/p1.jpg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      },
      {
        
        name: 'jacket',
        category: 'jimm',
        image: '/images/p1.jpg',
        price: 99,
        countInStock: 6,
        brand: 'jiky',
        rating: 4,
        numReviews: 15,
        description: 'good product',
      },
    ],
  };
  
  export default data;