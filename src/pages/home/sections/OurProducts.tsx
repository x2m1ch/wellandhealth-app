import { useState } from "react";

import "./styles/our-products.css";

interface Product {
  icon: string;
  bestSeller: boolean;
  description: string;
  price: number;
  discountPrice: number;
  title: string;
}

const PRODUCTS: Product[] = [
  {
    icon: "/home/our-products/product-one.png",
    bestSeller: true,
    description: "Deserunt non fugiat aute cons",
    price: 32,
    discountPrice: 42,
    title: "Product title",
  },
  {
    icon: "/home/our-products/product-two.png",
    bestSeller: true,
    description: "Ut nostrud esse aute ipsum vo",
    price: 22,
    discountPrice: 28,
    title: "Product title",
  },
  {
    icon: "/home/our-products/product-three.png",
    bestSeller: true,
    description: "Culpa ea exercitation amet co",
    price: 18,
    discountPrice: 26,
    title: "Product title",
  },
  {
    icon: "/home/our-products/product-four.png",
    bestSeller: true,
    description: "Est veniam anim aute exercita",
    price: 48,
    discountPrice: 56,
    title: "Product title",
  },
];

const buttons = ["Best-sellers", "New products"];

export const OurProducts = () => {
  const [bestSellerButtonActive, setBestSellerButtonActive] =
    useState("Best-sellers");
  const [bestSellerButtonHover, setbestSellerButtonHover] = useState("");

  const switchProductCards = () => {
    const filteredProducts = PRODUCTS.filter((product) => {
      return bestSellerButtonActive ? product.bestSeller : !product.bestSeller;
    });

    return filteredProducts.map((product) => (
      <article className="product-card" key={product.icon}>
        {product.icon && <img src={product.icon} alt="Product" />}

        <div className={product.bestSeller ? "best-seller" : ""}></div>

        <div className="product-card-body">
          <h3>{product.title}</h3>

          <p className="product-card-description">{product.description}</p>

          <div className="product-card-bottom">
            <div className="product-card-price">
              <span className="card-price-one">${product.price}</span>
              <span className="card-price-two">${product.discountPrice}</span>
            </div>

            <button className="product-shop-button" type="button">
              🛒
            </button>
          </div>
        </div>
      </article>
    ));
  };

  return (
    <section className="our-products">
      <section className="our-products-head">
        <h2>Our products</h2>
        <section className="our-products-buttons">
          {buttons.map((button, index) => {
            const isActive = button === bestSellerButtonActive;
            const isHover = button === bestSellerButtonHover;

            return (
              <button
                className={isActive ? "product-card-active" : undefined}
                onMouseEnter={() => setbestSellerButtonHover(button)}
                onMouseLeave={() => setbestSellerButtonHover("")}
                style={
                  isHover && isActive != true ? { color: "#565cc4" } : undefined
                }
                key={index}
                onClick={() => {
                  setBestSellerButtonActive(button);
                }}
              >
                {button}
              </button>
            );
          })}
        </section>
      </section>
      <section className="our-products-cards">{switchProductCards()}</section>
    </section>
  );
};
