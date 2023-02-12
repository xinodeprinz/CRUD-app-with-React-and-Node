import styles from "../modules/navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.container}>
        <span>React</span> & <span>Node</span> CRUD app
      </div>
    </nav>
  );
};

export default Navbar;
