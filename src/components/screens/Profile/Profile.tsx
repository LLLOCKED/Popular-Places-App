import Layout from '../../layouts/Layout';
import styles from './profile.module.scss';

const Profile = () => {
  return (
    <Layout>
      <div className={styles.profile}>
        <div className={styles.form}>
          <h2>Agent Login</h2>
          <span>Hey, Enter your details to get sign in to your account</span>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
