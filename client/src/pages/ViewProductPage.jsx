import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ViewProductPage() {
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getProduct();
  }, []);

    const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      setProductName(response.data.data.name);
      setProductImgUrl(response.data.data.image);
      setProductPrice(response.data.data.price);
      setProductDes(response.data.data.description);
    } catch (error) {
      alert(error);
    }
  };
  

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <div className="product-preview">
          <img src={productImgUrl} alt="some product" width="350" height="350" />
        </div>
        <h2>{productName}</h2>
        <h3>Price: {productPrice}</h3>
        <p>{productDes}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
