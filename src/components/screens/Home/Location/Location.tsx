import Image from 'next/image';
import { FC, useEffect } from 'react';
import styles from './location.module.scss';
import avatar from '../../../../assets/image/avatar.jpeg';
import useActions from '../../../../hooks/useActions';
import useTypedSelector from '../../../../hooks/useTypedSelector';

const Location: FC = () => {
  const { setLocation } = useActions();
  const { location } = useTypedSelector((state) => {
    return state;
  });

  useEffect(() => {
    fetch('https://api.ipregistry.co/?key=tryout')
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        setLocation(payload.location.city);
      })
      .catch(() => {
        return setLocation('Kiev');
      });
  }, []);

  return (
    <div className={styles.location}>
      <div>
        Your current location
        {location.value ? <h2>{location.value}</h2> : <h3>Loading...</h3>}
      </div>
      <div>
        <Image className={styles.image} src={avatar} alt='avatar' width={50} height={50} />
      </div>
    </div>
  );
};

export default Location;
