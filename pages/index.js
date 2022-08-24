import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar"
const index = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Navbar />
      <Banner />
    </div>
  );
};

export default index;