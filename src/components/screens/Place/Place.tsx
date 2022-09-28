/* eslint-disable no-prototype-builtins */
import Image from 'next/image';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import { useGetPlaceByIdQuery } from '../../../store/tripmap/tripmap.api';
import Layout from '../../layouts/Layout';
import styles from './place.module.scss';
import Map from './Map/Map';

const Place = () => {
  const router = useRouter();
  const { place } = router.query;

  const { data, isLoading } = useGetPlaceByIdQuery(place as string);

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      <div className={styles.place}>
        <Link href='/'>
          <IoIosArrowBack className={styles.back} />
        </Link>

        {data?.preview && (
          <div className={styles.image}>
            <Image src={data.preview.source} alt={data.name} layout='fill' objectFit='cover' />
          </div>
        )}
        <div className={styles.info}>
          <h2>Place page: {data?.name}</h2>
          <span>
            <GoLocation style={{ color: 'red' }} />
            {data?.address.country}
            {data?.address.hasOwnProperty('city') && `, ${data?.address.city}`}
            {data?.address.hasOwnProperty('county') && `, ${data?.address.county}`}
            {data?.address.hasOwnProperty('pedestrian') ? `, ${data?.address.pedestrian}` : `, ${data?.address.road}`}
          </span>
          <p>{data?.wikipedia_extracts.text}</p>
          <Map lat={data?.point.lat} lng={data?.point.lon} />
        </div>
      </div>
    </Layout>
  );
};

export default Place;
