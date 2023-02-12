import styles from "../modules/form.module.css";
import photo from "../images/empty.jpg";
import { Link } from "react-router-dom";
import sweetAlert from "../components/alert";
import { useEffect, useState } from "react";
import axios from "../components/axios";
import { useParams, useNavigate } from "react-router-dom";

const Form = ({ isCreate = true }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    photo: null,
  });

  useEffect(() => {
    if (!isCreate) {
      getProduct();
    }
  }, []);

  const handleInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const previewImage = () => {
    const input = document.getElementById("photo");
    const img = document.getElementById("img");
    input.click();
    input.onchange = (e) => {
      const file = e.target.files[0];
      const type = file.type.split("/")[0];
      if (type !== "image") {
        return sweetAlert({ icon: "error", title: "Please upload an image" });
      }
      const src = URL.createObjectURL(file);
      img.src = src;
      setData({ ...data, photo: file });
    };
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(`/products/${params.id}`);
      setData(res.data);
      const img = document.getElementById("img");
      img.src = `${process.env.REACT_APP_SERVER}${res.data.photo}`;
    } catch (error) {
      sweetAlert({ icon: "error", title: "Product not found." });
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    ["name", "price", "description", "photo"].forEach((i) =>
      formData.append(i, data[i])
    );

    try {
      if (isCreate) {
        const res = await axios.post("/create", formData);
        sweetAlert({ icon: "success", title: res.data.message });
        setData({ name: "", price: "", description: "" });
        const img = document.getElementById("img");
        img.src = photo;
      } else {
        const res = await axios.put(`/update/${params.id}`, formData);
        sweetAlert({ icon: "success", title: res.data.message });
      }
    } catch (err) {
      const errors = err.response.data;
      if (err.response.status === 400) {
        sweetAlert({ icon: "error", title: errors[0].message });
      } else {
        sweetAlert({ icon: "error", title: errors.message });
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.title}>
            <h1>{isCreate ? "create" : "update"} a product</h1>
          </div>
          <Link to="/" className={styles.add}>
            go back
          </Link>
        </div>
        <hr />
        <div className={styles.background}>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.colA}>
                <input
                  type="text"
                  onChange={handleInput}
                  id="name"
                  value={data.name}
                  placeholder="Name"
                />
                <input
                  type="number"
                  id="price"
                  value={data.price}
                  onChange={handleInput}
                  placeholder="Price"
                />
                <textarea
                  id="description"
                  placeholder="Description"
                  onChange={handleInput}
                  cols="30"
                  rows="10"
                  value={data.description}
                ></textarea>
              </div>
              <div className={styles.colB}>
                <input type="file" id="photo" hidden />
                <img
                  src={photo}
                  className={styles.preview}
                  id="img"
                  alt="Name"
                />
                <button
                  type="button"
                  onClick={previewImage}
                  className={styles.photoBtn}
                >
                  upload image
                </button>
              </div>
            </div>
            <button type="submit" className={styles.submit}>
              {isCreate ? "create" : "update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
