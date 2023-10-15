import React, { useEffect, useState } from "react";
import { getDocs, deleteDoc, doc } from "firebase/firestore";

import { cartCollectionRef } from "../firebase";

interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(cartCollectionRef);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched cart items:", items);
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (itemId: string) => {
    console.log("Removing item with ID:", itemId);

    await deleteDoc(doc(cartCollectionRef, itemId.toString()));

    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <div className="row row-cols-1 row-cols-md-6">
        {cartItems.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card"  style={{ maxWidth: "200px" }}>
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
                style={{ height: "auto", width: "100%", maxWidth: "200px" }}
              />
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">Rs {item.price.toFixed(2)}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id.toString())}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
}

export default Cart;
