import { FC } from 'react';
import styles from './places.module.scss';

const places = ['Forest', 'Mountain', 'River', 'Museum', 'Lake'];

const Places: FC = () => {
  return (
    <div className={styles.places}>
      <ul className={styles.list_places}>
        {places.map((place) => {
          return (
            <li key={place}>
              <button type='button' className={styles.item_place}>
                {place}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Places;
