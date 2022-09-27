import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
  useGetGeonameQuery,
  useGetPlacesRadiusQuery,
} from "../../../../store/tripmap/tripmap.api";
import Card from "./Card";
import styles from "./cards.module.scss";

const Cards = () => {
  const { location } = useTypedSelector((state) => state);
  const { data } = useGetGeonameQuery(location.value);
  const { data: places } = useGetPlacesRadiusQuery({
    limit: 10,
    lat: data?.lat,
    lon: data?.lon,
  });

  console.log(places)

  return (
    <div className={styles.cards}>
      {places?.map((place) => (
        <Card key={place.xid} name={place.name} kinds={place.kinds} id={place.xid} />
      ))}
    </div>
  );
};

export default Cards;
