import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const navigate = useNavigate();
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4001/products", {
        name: productName,
        imageUrl: productImgUrl,
        price: productPrice,
        description: productDes,
      });
      alert("Product created successfully!");
      navigate("/"); // Navigate after success
    } catch (error) {
      console.error("Error Creating Product:", error);
    }
  };

  return (
    <form className="product-form" onSubmit={createProduct}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setProductImgUrl(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setProductDes(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
