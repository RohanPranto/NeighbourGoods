// dummyProducts.js
const generateRandomQueryParameter = () => {
  // Generate a random number between 1 and 1000
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  return `?random=${randomNumber}`;
};

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 10.99,
    imageUrl: `https://source.unsplash.com/random/150x150/?product1${generateRandomQueryParameter()}`,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 19.99,
    imageUrl: `https://source.unsplash.com/random/150x150/?product2${generateRandomQueryParameter()}`,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: 7.49,
    imageUrl: `https://source.unsplash.com/random/150x150/?product3${generateRandomQueryParameter()}`,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for Product 4",
    price: 15.99,
    imageUrl: `https://source.unsplash.com/random/150x150/?product4${generateRandomQueryParameter()}`,
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description for Product 5",
    price: 12.49,
    imageUrl: `https://source.unsplash.com/random/150x150/?product5${generateRandomQueryParameter()}`,
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description for Product 6",
    price: 8.99,
    imageUrl: `https://source.unsplash.com/random/150x150/?product6${generateRandomQueryParameter()}`,
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description for Product 7",
    price: 14.99,
    imageUrl: `https://source.unsplash.com/random/150x150/?product7${generateRandomQueryParameter()}`,
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description for Product 8",
    price: 11.49,
    imageUrl: `https://source.unsplash.com/random/150x150/?product8${generateRandomQueryParameter()}`,
  },
  {
    id: 9,
    name: "Product 9",
    description: "Description for Product 9",
    price: 9.99,
    imageUrl: `https://source.unsplash.com/random/150x150/?product9${generateRandomQueryParameter()}`,
  },
];

export default dummyProducts;
