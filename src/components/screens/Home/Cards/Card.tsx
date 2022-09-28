import Link from 'next/link';
import styles from './cards.module.scss';

type TCard = {
  name: string;
  kinds: string;
  id: string;
};

const splitKinds = (kinds: string) => {
  const arr = kinds.split(',');
  const upperArr = arr.map((kind) => {
    const repKind = kind.replace(/_/g, ' ');
    return repKind.charAt(0).toUpperCase() + repKind.slice(1);
  });
  return upperArr;
};

const Card = ({ name, kinds, id }: TCard) => {
  const arrKinds = splitKinds(kinds);

  return (
    <Link href={`/place/${id}`}>
      <div className={styles.card}>
        <h2>{name}</h2>
        <div className={styles.kinds}>
          {arrKinds.map((kind) => {
            return <span key={kind}>{kind}</span>;
          })}
        </div>
      </div>
    </Link>
  );
};

export default Card;
