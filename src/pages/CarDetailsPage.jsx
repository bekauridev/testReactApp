import styles from "./CarDetailsPage.module.css";
function CarDetails() {
  return (
    <div class={styles.card}>
      <div class={styles.card_form}>
        <span>(Toiota)</span>
      </div>
      <div class={styles.card_data}>
        <div class={styles.data}>
          <div class={styles.text}>
            <label class={styles.text_m}>Card details</label>
            <div class={(styles.text_s, styles.cube)}>
              <label class={(styles.side, styles.front)}>Access the list (Topic)</label>
              <label class={(styles.side, styles.top)}>Username-id</label>
            </div>
          </div>
        </div>
        <span title="Acceder a la lista (Temas)">Access</span>
      </div>
    </div>
  );
}

export default CarDetails;
