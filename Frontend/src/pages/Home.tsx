import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const Home = () => {
  const addToCartHandler = ()=>{}
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>  
        <ProductCard productId="afddg" name="MacBook" price={2323} stock={23} photo="https://www.shutterstock.com/image-illustration/macbook-pro-2023-m2-chip-600nw-2328203513.jpg" handler={addToCartHandler}/>
        <ProductCard productId="afdg" name="Nokia" price={23} stock={21} photo="https://etimg.etb2bimg.com/thumb/msid-57158867,width-1200,height-900,resizemode-4/.jpg" handler={addToCartHandler}/>
      </main>
    </div>
  );
};

export default Home;
