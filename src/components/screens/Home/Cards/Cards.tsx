import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
  useGetGeonameQuery,
  useGetPlacesRadiusQuery,
} from "../../../../store/tripmap/tripmap.api";
import styles from "./cards.module.scss";

const Cards = () => {
  const { location } = useTypedSelector((state) => state);
  const { data } = useGetGeonameQuery(location.value);
  const { data: places } = useGetPlacesRadiusQuery({
    limit: 10,
    lat: data?.lat,
    lon: data?.lon,
  });
  console.log(places);
  return (
    <div className={styles.cards}>
      <div className={styles.card}>Hii</div>
      <div className={styles.card}>Hiiii</div>
      <div className={styles.card}>Hiiii</div>
    </div>
  );
};

export default Cards;
