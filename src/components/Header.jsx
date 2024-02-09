import styles from "./Header.module.css";
import CarList from "./CarList";
import { useEffect, useState } from "react";

const fetch = [
  {
    img: ["https://static.my.ge/myauto/photos/3/2/2/7/7/thumbs/98772230_1.jpg?v=2"],
    location: "თბილისი",
    name: "2015 - Toyota",
    price: "60",
    currency: "₾",
    carTipe1: "სედანი",
    carTipe2: "ჰიბრიდი",
  },
  {
    img: ["https://static.my.ge/myauto/photos/1/1/1/2/9/thumbs/99921110_1.jpg?v=3"],
    location: "თბილისი",
    name: "2018 - Ford Fusion",
    price: "22,600",
    currency: "₾",
    carTipe1: "ჯიპი",
    carTipe2: "ბიზნესი",
  },
  {
    img: ["https://static.my.ge/myauto/photos/0/3/5/8/8/thumbs/100885307_1.jpg?v=0"],
    location: "თბილისი",
    name: "2019 - Land Rover",
    price: "102.300",
    currency: "₾",
    carTipe1: "ჯიპი",
    carTipe2: "დიზელი",
  },
  {
    img: ["		https://static.my.ge/myauto/photos/2/9/1/8/9/thumbs/100981923_1.jpg?v=1"],
    location: "თბილისი",
    name: "2016 - Porsche Cayenne",
    price: "102.800",
    currency: "₾",
    carTipe1: "ჯიპი",
    carTipe2: "ბენზინი",
  },
];
function Header() {
  const [data, setData] = useState([]);

  useEffect(
    function () {
      setData(fetch);
      console.log(`hetch done`);
    },
    [data]
  );
  return (
    <header className={styles.header}>
      <div className={styles.headerHeading}>
        <span className={styles.headerIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.32307 6.22183C7.28307 8.51183 5.88307 11.8018 5.75307 12.1118L3.49307 11.1418C2.84307 10.8618 2.68307 10.0118 3.18307 9.51183L6.19307 6.50183C6.66307 6.03183 7.34307 5.82183 8.00307 5.95183L9.32307 6.22183ZM10.8131 16.3818C11.1131 16.6818 11.5531 16.7618 11.9331 16.5818C13.0931 16.0418 15.5831 14.7718 17.1931 13.1618C21.7831 8.57183 21.8231 4.83183 21.5531 3.23183C21.4831 2.83183 21.1631 2.51183 20.7631 2.44183C19.1631 2.17183 15.4231 2.21183 10.8331 6.80183C9.22307 8.41183 7.96307 10.9018 7.41307 12.0618C7.23307 12.4418 7.32307 12.8918 7.61307 13.1818L10.8131 16.3818ZM17.7831 14.6818C15.4931 16.7218 12.2031 18.1218 11.8931 18.2518L12.8631 20.5118C13.1431 21.1618 13.9931 21.3218 14.4931 20.8218L17.5031 17.8118C17.9731 17.3418 18.1831 16.6618 18.0531 16.0018L17.7831 14.6818ZM9.07307 17.2818C9.27307 18.3418 8.92307 19.3218 8.25307 19.9918C7.48307 20.7618 5.09307 21.3318 3.54307 21.6318C2.85307 21.7618 2.24307 21.1518 2.37307 20.4618C2.67307 18.9118 3.23307 16.5218 4.01307 15.7518C4.68307 15.0818 5.66307 14.7318 6.72307 14.9318C7.89307 15.1518 8.85307 16.1118 9.07307 17.2818ZM13.1331 8.87183C13.1331 7.77183 14.0331 6.87183 15.1331 6.87183C16.2331 6.87183 17.1331 7.77183 17.1331 8.87183C17.1331 9.97183 16.2331 10.8718 15.1331 10.8718C14.0331 10.8718 13.1331 9.97183 13.1331 8.87183Z"
              fill="white"
            ></path>
          </svg>
        </span>
        <h1 className={styles.headerTittle}>super vip</h1>
      </div>

      <CarList data={data} />
    </header>
  );
}

export default Header;
