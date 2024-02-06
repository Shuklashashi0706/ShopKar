import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  
  const addToCartHandler = ()=>{}

  const isPrevPage = page <= 1;
  const isNextPage = page >= 4;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
          </select>
        </div>
      </aside>
      <main>
        <ProductCard
          productId="afddg"
          name="MacBook"
          price={2323}
          stock={23}
          photo="https://www.shutterstock.com/image-illustration/macbook-pro-2023-m2-chip-600nw-2328203513.jpg"
          handler={addToCartHandler}
        />
        <article>
          <button disabled={isPrevPage} onClick={()=>setPage((prev)=>prev-1)}>Prev</button>
          <span>{page} of {4}</span>
          <button disabled={isNextPage} onClick={()=>setPage((prev)=>prev+1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
