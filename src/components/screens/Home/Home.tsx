import Layout from "../../layouts/Layout";
import Cards from "./Cards/Cards";
import Location from "./Location/Location";
import Places from "./Places/Places";
import Search from "./Search/Search";

const Home = () => {
  return (
    <Layout>
      <Location />
      <Search />
      <Places />
      <Cards />
    </Layout>
  );
};

export default Home;
