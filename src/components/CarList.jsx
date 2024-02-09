import styles from "./CarList.module.css";
import Cars from "./Cars";
function CarList({ data }) {
  return (
    <div className={styles.row}>
      {data.map((carDetails) => (
        <Cars data={carDetails} key={carDetails.name} />
      ))}
    </div>
  );
}

export default CarList;
