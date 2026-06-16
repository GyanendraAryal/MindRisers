import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/ui/Button";

let apiFetched = false;

/* 
  COMPONENT lIFECYCLE
    - componentDidMount
    - componentDidUpdate
    - componentDidUnmount

  useEffect  | sideEffect hook

*/

export default function ProductsListApiAutoLoad() {
  console.log("render | re-render");
  const [products, setProducts] = useState([]);
  const [perPage, setPerpage] = useState(30);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("useEffect: component did mount");
    axios
      .get(
        `https://dummyjson.com/products/search?q=${searchTitle}&limit=${perPage}`,
      )
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [searchTitle, perPage]);

  useEffect(() => {
    console.log("useEffect: component did update, search ", searchTitle);
  }, [searchTitle]);

  return (
    <div className="ml-8">
      <p>Product List fetched from API</p>
      <br />
      <select
        value={perPage}
        onChange={(e) => {
          console.log(e.target.value);
          setPerpage(e.target.value);
        }}
      >
        <option value="5">five</option>
        <option>15</option>
        <option>25</option>
        <option>30</option>
      </select>

      <form onSubmit={handleSubmit}>
        <input
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border"
          type="text"
          placeholder="title"
        />
      </form>

      <ul className="pl-8 mt-12 list-disc">
        {products.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
      {products.length == 0 && <p>NO products found.</p>}
    </div>
  );
}
