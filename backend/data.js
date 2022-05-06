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
        
        name: 'Watch',
        category: 'Shirts',
        image: '/images/watch1.jpeg',
        price: 89,
        countInStock: 17,
        brand: 'tsho',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'G-hat',
        category: 'bag',
        image: '/images/p4.jpg',
        price: 30,
        countInStock: 12,
        brand: 'him',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'C-cap',
        category: 'watch',
        image: '/images/p3.jpg',
        price: 10,
        countInStock: 9,
        brand: 'rioswatch',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality ',
      },
      {
        
        name: 'Jio Cap',
        category: 'clothes',
        image: '/images/p4.jpg',
        price: 8,
        countInStock: 0,
        brand: 'clothes',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality ',
      },
      {
        
        name: 'Bong-hat',
        category: 'clothes',
        image: '/images/p3.jpg',
        price: 15,
        countInStock: 2,
        brand: 'banner',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality ',
      },
      {
        
        name: 'Women bag',
        category: 'bag',
        image: '/images/bag23.jpeg',
        price: 19,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      },


      {
       
        name: 'bro-watch',
        category: 'watch',
        image: '/images/watch1.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
     
        name: 'bran-watch',
        category: 'watch',
        image: '/images/watch33.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
      
        name: 'new watch',
        category: 'watch',
        image: '/images/watch55.jpeg',
        price: 99,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
        
        name: 'hav-vest',
        category: 'clothes',
        image: '/images/p1.jpg',
        price: 49,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      },
      {
        
        name: 'hi-vest',
        category: 'clothes',
        image: '/images/p1.jpg',
        price: 60,
        countInStock: 6,
        brand: 'tyo',
        rating: 4,
        numReviews: 5,
        description: 'good product',
      },
      {
        
        name: 'new-trainer',
        category: 'shoes',
        image: '/images/shoe1.jpg',
        price: 90,
        countInStock: 6,
        brand: 'tyo',
        rating: 4,
        numReviews: 5,
        description: 'good product',
      },
      {
        
        name: 'my trainer',
        category: 'shoes',
        image: '/images/shoe2.jpeg',
        price: 94,
        countInStock: 3,
        brand: 't shoe',
        rating: 4,
        numReviews: 5,
        description: 'good product',
      },
      {
        
        name: 'Hio-vest',
        category: 'clothes',
        image: '/images/v.jpeg',
        price: 30,
        countInStock: 6,
        brand: 'tvest',
        rating: 4,
        numReviews: 5,
        description: 'good product',
      },
      {
      
        name: 'Vests',
        category: 'clothes',
        image: '/images/v3.jpeg',
        price: 20,
        countInStock: 6,
        brand: 'to vest',
        rating: 4,
        numReviews: 5,
        description: 'good product',
      },
      

      {
       
        name: 'T-shoe',
        category: 'shoes',
        image: '/images/shoe2.jpeg',
        price: 65,
        countInStock: 2,
        brand: 'banner',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality ',
      },

      {
       
        name: 'H shoe',
        category: 'shoes',
        image: '/images/shoe22.jpeg',
        price: 65,
        countInStock: 2,
        brand: 'banner',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality ',
      },

      {
       
        name: 'Brand-trainer',
        category: 'shoes',
        image: '/images/shoe3.jpeg',
        price: 65,
        countInStock: 2,
        brand: 'banner',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality ',
      },
      {
        
        name: 'a-laptop',
        category: 'laptop',
        image: '/images/pc.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      },

      {
              name: 'h-laptop',
        category: 'laptop',
        image: '/images/pc3.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      },
      {
        
        name: 'b-laptop',
        category: 'laptop',
        image: '/images/pc22.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
        
        name: 'b-watch',
        category: 'watch',
        image: '/images/watch1.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
        
        name: 'b-watch',
        category: 'watch',
        image: '/images/watch33.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
        
        name: 'y-watch',
        category: 'watch',
        image: '/images/watch55.jpeg',
        price: 99,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      
      ,

      {
        
        name: 'women-bag',
        category: 'bag',
        image: '/images/bag0.jpeg',
        price: 19,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
        
        name: 'women-bag',
        category: 'bag',
        image: '/images/bag34.jpeg',
        price: 19,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }

      ,
      {
        
        name: 'women-bag',
        category: 'bag',
        image: '/images/bag23.jpeg',
        price: 19,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      },


      {
       
        name: 'b-watch',
        category: 'watch',
        image: '/images/watch1.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
     
        name: 'b-watch',
        category: 'watch',
        image: '/images/watch33.jpeg',
        price: 139,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,
      {
      
        name: 'y-watch',
        category: 'watch',
        image: '/images/watch55.jpeg',
        price: 99,
        countInStock: 6,
        brand: 'tyo',
        rating: 4.5,
        numReviews: 15,
        description: 'good product',
      }
      ,

    ],
  };
  
  export default data;