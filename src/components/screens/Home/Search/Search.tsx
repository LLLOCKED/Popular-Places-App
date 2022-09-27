import React, { FC } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./search.module.scss";

const Search: FC = () => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();
    console.log(event.target.value)
  }

  return (
    <div className={styles.search}>
      <form className={styles.form_search} method="get">
        <FiSearch className={styles.icon_search} />
        <input className={styles.input_search} type="text" name="place" placeholder="Discover new place" onChange={handleChange} />
      </form>
    </div>
  )
}

export default Search;
