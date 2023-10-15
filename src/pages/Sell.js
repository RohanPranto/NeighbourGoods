import React, { useState } from 'react';
import { cartCollectionRef, firestore } from '../firebase'; // Import the Firestore cart collection reference
import { addDoc, collection } from 'firebase/firestore';

function Sell() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [sellerLocation, setSellerLocation] = useState('');
  const [sellerContactNumber, setSellerContactNumber] = useState('');

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    // Create a new product object
    const product = {
      name: productName,
      price: parseFloat(productPrice),
      imageUrl: productImage, // Add the product image URL to the product data
      description: productDescription,
      location: sellerLocation,
      contactNumber: sellerContactNumber,
    };

    try {
      // Add the product to the Firestore products collection
      await addDoc(collection(firestore, 'products'), product);

      // Clear the input fields and image
      setProductName('');
      setProductPrice('');
      setProductImage(null);
      setProductDescription('');
      setSellerLocation('');
      setSellerContactNumber('');

      alert('The item has been enlisted.');
    } catch (error) {
      console.error('Error enlisting item:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProductImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="mb-4">Sell</h1>
        <form onSubmit={handleProductSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sellerLocation" className="form-label">
              Seller's Location
            </label>
            <input
              type="text"
              className="form-control"
              id="sellerLocation"
              value={sellerLocation}
              onChange={(e) => setSellerLocation(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sellerContactNumber" className="form-label">
              Seller's Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="sellerContactNumber"
              value={sellerContactNumber}
              onChange={(e) => setSellerContactNumber(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Enlist Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sell;
