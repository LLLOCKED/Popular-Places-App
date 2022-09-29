import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import useActions from '../../../../hooks/useActions';
import styles from './places.module.scss';

const places = [
  { value: 'interesting_places', name: 'All' },
  { value: 'religion', name: 'Religion' },
  { value: 'other', name: 'Other' },
  { value: 'natural', name: 'Natural' },
  { value: 'industrial_facilities', name: 'Industrial facilities' },
  { value: 'historic', name: 'Historical' },
  { value: 'cultural', name: 'Cultural' },
  { value: 'architecture', name: 'Architecture ' }
];

const Places: FC = () => {
  const router = useRouter();
  const { setCategory } = useActions();

  const handleClick = (value: string) => {
    setCategory(value);
    router.push({ query: { category: value } });
    localStorage.setItem('category', value);
  };

  useEffect(() => {
    router.push({ query: { category: localStorage.getItem('category') } });
  }, []);

  return (
    <div className={styles.places}>
      <ul className={styles.list_places}>
        {places.map((place) => {
          return (
            <li key={place.value}>
              <button
                style={router.query.category === place.value ? { background: '#334f58', color: 'black' } : {}}
                type='button'
                className={styles.item_place}
                onClick={() => {
                  return handleClick(place.value);
                }}
              >
                {place.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Places;
