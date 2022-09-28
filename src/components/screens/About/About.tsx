import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import Layout from '../../layouts/Layout';
import styles from './about.module.scss';

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h2>About Us</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque ex a eveniet. Voluptates nihil, iusto officiis facilis laudantium non fugiat ut quaerat
          magnam, quibusdam minima, repellat aliquid molestias eligendi.
        </span>
        <div>
          <span>
            <BsFillPeopleFill style={{ fontSize: '30px' }} />
          </span>
          <h2>Who are we?</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque ex a eveniet. Voluptates nihil, iusto officiis facilis laudantium non fugiat ut quaerat
            magnam, quibusdam minima, repellat aliquid molestias eligendi.
          </span>
        </div>
        <div>
          <span>
            <AiTwotoneHome style={{ fontSize: '30px' }} />
          </span>
          <h2>Where are we?</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque ex a eveniet. Voluptates nihil, iusto officiis facilis laudantium non fugiat ut quaerat
            magnam, quibusdam minima, repellat aliquid molestias eligendi.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque ex a eveniet. Voluptates nihil, iusto officiis facilis laudantium non fugiat ut quaerat
            magnam, quibusdam minima, repellat aliquid molestias eligendi.
          </span>
        </div>
        <div className={styles.contact}>
          <h2>Contact Support</h2>
          <button type='button'>Contact support</button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
