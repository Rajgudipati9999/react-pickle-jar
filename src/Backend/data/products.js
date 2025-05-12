import { v4 as uuidv4 } from 'uuid';

const products = {
  'non-veg': [
    {
      id: uuidv4(),
      name: 'Chicken Boneless Pickle',
      price: 120,
      description: 'Chicken boneless pickle made with traditional methods.',
      image: 'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744713387/chickenboneless_wiyf1j.png',
    },
    {
      id: uuidv4(),
      name: 'Chicken Bone Pickle',
      price: 100,
      description: 'Tasty Chicken pickle to spice up your meals.',
      image: 'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744713546/chikenbone_yrtpaz.png',
    },
    {
      id: uuidv4(),
      name: 'Prawns Pickle',
      price: 150,
      description: 'Tasty Prawn pickle to spice up your meals.',
      image: 'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744713589/prawns_srsxyh.png',
    },
    {
      id: uuidv4(),
      name: 'Fish Pickle',
      price: 200,
      description: 'Fish pickle to spice up your meals.',
      image: 'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744713560/Fish_e8l2sw.png',
    },
    {
      id: uuidv4(),
      name: 'Gongura Chicken Pickle',
      price: 120,
      description: 'Tasty Gongura Chicken pickle to spice up your meals.',
      image: 'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744713572/gongurachicken_hllzss.png',
    },
  ],

  'veg': [
    {
      id: uuidv4(),
      name:'Mango Pickle',
      price:80,
      description:'Mango pickle made with traditional methods.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715617/ChatGPT_Image_Apr_5_2025_10_28_28_PM_y9a86d.png'
    },
    {
      id: uuidv4(),
      name:'Gongura Pickle',
      price:180,
      description:'Gongura pickle made with traditional methods.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715633/ChatGPT_Image_Apr_5_2025_10_32_51_PM_gavvvb.png'
    },
    {
      id: uuidv4(),
      name:'Tomato Pickle',
      price:70,
      description:'Tomato pickle made with traditional methods.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715653/ChatGPT_Image_Apr_5_2025_10_36_15_PM_cddnw6.png'
    },
    {
      id: uuidv4(),
      name:'Usiri Pickle',
      price:60,
      description:'Usiri pickle made with traditional methods.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715667/ChatGPT_Image_Apr_5_2025_10_41_04_PM_hkhian.png'
    },
    {
      id: uuidv4(),
      name:'Lemon Pickle',
      price:80,
      description:'Lemon pickle made with traditional methods.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715679/ChatGPT_Image_Apr_5_2025_10_44_27_PM_ghjgi0.png'
    },
     {
      id: uuidv4(),
      name:'Red Mirchi Pickle',
      price:80,
      description:'Red Mirchi pickle made with traditional methods.',
      image :'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715685/ChatGPT_Image_Apr_5_2025_10_54_52_PM_i2dyyi.png'
    },
     {
      id: uuidv4(),
      name:'Pudeena Pickle',
      price:80,
      description:'Pudeena pickle made with traditional methods.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715690/ChatGPT_Image_Apr_5_2025_10_56_27_PM_wfvwjt.png'
    },
    

  ],

  'sweets': [
    {
      id: uuidv4(),
      name:'Dry Fruits Pootharekulu',
      price:100,
      description:'Home Made Pootharekulu.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715844/ChatGPT_Image_Apr_6_2025_08_01_12_PM_t4hqbi.png'
    },
    {
      id: uuidv4(),
      name:'Sunni Undalu',
      price:180,
      description:'Home made Sunni Undalu.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715849/ChatGPT_Image_Apr_6_2025_08_14_21_PM_qji23t.png'
    },
    {
      id: uuidv4(),
      name:'Nuvvula Ariselu',
      price:120,
      description:'Home made Nuvvula Ariselu.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715859/ChatGPT_Image_Apr_6_2025_08_19_19_PM_k9efrh.png'
    },
    {
      id: uuidv4(),
      name:'Bellam Gavvalu',
      price:80,
      description:'Home made Gavvalu.',
      image:'https://res.cloudinary.com/dx8rhno8y/image/upload/v1744715872/ChatGPT_Image_Apr_6_2025_09_04_43_PM_vgntuh.png'
    },
  ],
};

export default products;
