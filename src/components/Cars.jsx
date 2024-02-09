import styles from "./Cars.module.css";
import { Link } from "react-router-dom";
function Cars({ data }) {
  const { img, location, name, price, currency, carTipe1, carTipe2 } = data;
  return (
    <div className={styles.col}>
      <div className={styles.card}>
        <img className={styles.cardImg} src={img} alt={name} />
        <div className={styles.cardDetails}>
          <span className={styles.locationDetail}>{location}</span>
          <h2 className={styles.nameDetail}>{name}</h2>
          <h3 className={styles.priceDetail}>
            {price}
            {currency}
          </h3>
          <p className={styles.carTypeDetail}>{carTipe1}</p>
          <p className={styles.carTypeDetail}>{carTipe2}</p>
        </div>
      </div>
      <Link to="/car">Details</Link>
    </div>
  );
}

export default Cars;
