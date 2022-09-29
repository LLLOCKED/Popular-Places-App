import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import styles from './location.module.scss';
import avatar from '../../../../assets/image/avatar.jpeg';
import useActions from '../../../../hooks/useActions';

const Location: FC = () => {
  // const [city, setCity] = useState('');
  // const { setLocation } = useActions();

  // useEffect(() => {
  //   fetch('https://api.ipregistry.co/?key=tryout')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((payload) => {
  //       setLocation(payload.location.city);
  //       setCity(payload.location.city);
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     });
  // }, []);

  return (
    <div className={styles.location}>
      <div>
        Your current location
        {/* {city ? <h2>{city}</h2> : <h3>Loading...</h3>} */}
      </div>
      <div>
        <Image className={styles.image} src={avatar} alt='avatar' width={50} height={50} />
      </div>
    </div>
  );
};

export default Location;
