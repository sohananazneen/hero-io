import { useLoaderData } from "react-router";
import Banner from "./Components/Banner/Banner";
import States from "./Components/States/States";
import TrendingApps from "./Components/TrendingApps/TrendingApps";

function App() {
  const TrendingProducts = useLoaderData();
  return (
    <>
      <Banner />
      <States />
      <TrendingApps TrendingProducts={TrendingProducts}/>
    </>
  );
}

export default App;
