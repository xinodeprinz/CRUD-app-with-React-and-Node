import React, { useEffect, useState } from "react";
import styles from "../modules/home.module.css";
import { Link } from "react-router-dom";
import axios from "../components/axios";
import sweetAlert from "../components/alert";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [products]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`products/${id}`);
      const newProducts = products.filter((p) => p.id !== id);
      setProducts(newProducts);
      sweetAlert({ icon: "success", title: "Product deleted." });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.title}>
            <h1>our products</h1>
          </div>
          <Link to="/create" className={styles.add}>
            add product
          </Link>
        </div>
        <hr />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>photo</th>
              <th>name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) => (
              <tr key={key}>
                <td>{++key}</td>
                <td>
                  <img
                    src={`${process.env.REACT_APP_SERVER}${product.photo}`}
                    alt={product.name}
                    className={styles.photo}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className={styles.btns}>
                  <Link to={`/update/${product.id}`} className={styles.update}>
                    update
                  </Link>
                  <button
                    className={styles.delete}
                    onClick={() => deleteProduct(product.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
