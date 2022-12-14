import useTypedSelector from '../../../../hooks/useTypedSelector';
import { useGetGeonameQuery, useGetPlacesRadiusQuery } from '../../../../store/tripmap/tripmap.api';
import Card from './Card';
import styles from './cards.module.scss';

const Cards = () => {
  const { location, category } = useTypedSelector((state) => {
    return state;
  });

  const { data } = useGetGeonameQuery(location.value, { skip: location.value.length < 3 });
  const { data: places } = useGetPlacesRadiusQuery({
    limit: 10,
    lat: data?.lat,
    lon: data?.lon,
    kinds: category.value
  });

  return (
    <div className={styles.cards}>
      {places?.map((place) => {
        return <Card key={place.xid} name={place.name} kinds={place.kinds} id={place.xid} />;
      })}
    </div>
  );
};

export default Cards;
