import { useState } from "react";

import "./styles/our-products.css";

interface Product {
  icon: string;
  bestSeller: boolean;
  description: string;
  price: number;
  discountPrice: number;
}

const PRODUCTS: Product[] = [
  {
    icon: "/home/our-products/product-one.png",
    bestSeller: true,
    description: "Deserunt non fugiat aute cons",
    price: 32,
    discountPrice: 42,
  },
  {
    icon: "/home/our-products/product-two.png",
    bestSeller: true,
    description: "Ut nostrud esse aute ipsum vo",
    price: 22,
    discountPrice: 28,
  },
  {
    icon: "/home/our-products/product-three.png",
    bestSeller: true,
    description: "Culpa ea exercitation amet co",
    price: 18,
    discountPrice: 26,
  },
  {
    icon: "/home/our-products/product-four.png",
    bestSeller: true,
    description: "Est veniam anim aute exercita",
    price: 48,
    discountPrice: 56,
  },
];

export const OurProducts = () => {
  const [bestSellerButtonActive, setBestSellerButtonActive] = useState(true);

  const switchProductCards = () => {
    switch (bestSellerButtonActive) {
      case true:
        return PRODUCTS.map((products) => (
          <article className="product-card">
            <div className="best-seller"></div>

            {products.icon && <img src={products.icon} alt="" />}

            <section className="product-card-body">
              <h3>Product title</h3>
              <p className="product-card-description">{products.description}</p>
            </section>
            <section className="product-card-bottom">
              <section className="product-card-price">
                <p className="card-price-one">${products.price}</p>
                <p className="card-price-two">${products.discountPrice}</p>
              </section>
              <button className="product-shop-button">
                <img src="/home/our-products/shop.svg" alt="" />
              </button>
            </section>
          </article>
        ));
    }
  };

  return (
    <section className="our-products">
      <section className="our-products-head">
        <h2>Our products</h2>
        <section className="our-products-buttons">
          <button
            className={bestSellerButtonActive ? "product-card-active" : ""}
            onClick={() => {
              setBestSellerButtonActive(true);
            }}
          >
            Best-sellers
          </button>
          <button
            className={bestSellerButtonActive ? "" : "product-card-active"}
            onClick={() => {
              setBestSellerButtonActive(false);
            }}
          >
            New products
          </button>
        </section>
      </section>
      <section className="our-products-cards">{switchProductCards()}</section>
    </section>
  );
};
