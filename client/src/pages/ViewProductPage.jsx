import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewProductPage() {
  const navigate = useNavigate()
  const {productID} = useParams();
  const [product, setProduct] = useState({});
  const getProductData = async () => {
    try {
      const productData = await axios.get(
        `http://localhost:4001/products/${productID}`
      );
      setProduct(productData.data.data);
    } catch (error) {
      alert("can not get data");
    }
  };

  useEffect(() => {
    getProductData();
  },[]);

  console.log(product)
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
