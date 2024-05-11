import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.container}>
        <h3>Contact App</h3>
        <div>
          <a href="botostart.ir">Botostart</a>
          <span> | Full Course React.js</span>
        </div>
      </div>
    </>
  );
}

export default Header;
