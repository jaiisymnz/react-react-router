import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function ViewProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      );
      setName(response.data.data.name);
      setPrice(response.data.data.price);
      setImg(response.data.data.image);
      setDescription(response.data.data.description);
      console.log(response.data.data.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h1>Name: {name} </h1>
        <img src={img} />
        <p>{price} THB</p>
        <p>{description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
