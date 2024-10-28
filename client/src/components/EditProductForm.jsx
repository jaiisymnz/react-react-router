import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");

  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

   const handleSubmit = (e) => {
     e.preventDefault();
     editProduct();
   };

   
  const editProduct = async () => {
    try {
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        {
        name: productName,
        price: productPrice,
        image: productImgUrl,
        description: productDes,
      }
      );
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:4001/products/${productId}`
      );
     setProductName(response.data.data.name);
     setProductImgUrl(response.data.data.image);
     setProductPrice(response.data.data.price);
     setProductDes(response.data.data.description);
    };


  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productName}
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
            value={productImgUrl}
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
            value={productPrice}
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
            value={productDes}
            onChange={(e) => {
              setProductDes(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
