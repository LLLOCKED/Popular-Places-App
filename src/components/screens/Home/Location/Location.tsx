import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./location.module.scss";
import avatar from "../../../../assets/image/avatar.jpeg";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const Location: FC = () => {
  const { setLocation } = useActions();
  const { location } = useTypedSelector((state) => state);

  useEffect(() => {
    fetch("https://api.ipregistry.co/?key=tryout")
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        setLocation(payload.location.city);
      })
      .catch((err) => setLocation("Kiev"));
  }, []);

  return (
    <div className={styles.location}>
      <div>
        Your current location
        {location.value ? <h2>{location.value}</h2> : <h3>Loading...</h3>}
      </div>
      <div>
        <Image
          className={styles.image}
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Location;
