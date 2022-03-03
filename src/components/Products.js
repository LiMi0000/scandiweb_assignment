import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Products = () => {
  const [products, setProduct] = useState([]);
  const [currency, setCurrency] = useState('$');

  const currencyChange = (e) => {
    const currency = e.target.value;
    setCurrency(currency);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const respond = await axios.get('https://fakestoreapi.com/products');
      setProduct(respond.data);
      // console.log(respond.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <select className="currency" onClick={currencyChange}>
        <option value="$">$ USD</option>
        <option value="€">€ EUR</option>
        <option value="¥">¥ YJP</option>
      </select>

      <h1 className="products_title">All Products</h1>

      <section className="products_section">
        {products.map((product) => {
          const { category, id, image, price, title } = product;
          return (
            <div key={id} className="products">
              <div className="products_images">
                <img src={image} alt={title} className="products_image" />
                <h4 className="product_title">{title}</h4>
                <p className="product_price">
                  {currency}
                  {price}
                  <div className="products_cart">
                    <a>
                      <img
                        alt=""
                        className="products_cart"
                        src="https://conceptdraw.com/a1715c3/p3/preview/640/pict--shopping-cart-marketing-vector-stencils-library"
                      />
                    </a>
                  </div>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Products;
