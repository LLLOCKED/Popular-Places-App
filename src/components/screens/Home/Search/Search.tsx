import React, { FC, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import useActions from '../../../../hooks/useActions';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import styles from './search.module.scss';

const Search: FC = () => {
  const { setLocation } = useActions();

  const { location } = useTypedSelector((state) => {
    return state;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocation(event.target.value);
    localStorage.setItem('inputValue', event.target.value);
  };

  useEffect(() => {
    setLocation(localStorage.getItem('inputValue') || '');
  }, []);

  return (
    <div className={styles.search}>
      <div className={styles.form_search}>
        <FiSearch className={styles.icon_search} />
        <input className={styles.input_search} type='text' name='place' placeholder='Discover new place' value={location.value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Search;
