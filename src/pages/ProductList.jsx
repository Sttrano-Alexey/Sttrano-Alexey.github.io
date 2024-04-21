import React, { useState, useEffect } from "react";
import Product from "./Product";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductHeader from "../components/ProductsHeader/ProductsHeader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [showAll, setShowAll] = useState(false); // Состояние для отслеживания показа всех элементов

  useEffect(() => {
    fetch("../src/DATA/products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const loadMoreProducts = () => {
    if (visibleProducts >= products.length) {
      // Если все элементы уже показаны, переключите состояние showAll
      setShowAll(true);
    } else {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    }
  };

  const hideAllProducts = () => {
    setVisibleProducts(6); // Устанавливаем количество видимых продуктов обратно в 6
    setShowAll(false); // Переключаем состояние showAll на false
  };

  return (
    <>
      <Header></Header>
      <section className="products">
        <div className="products__container container">
          <ProductHeader></ProductHeader>
          <div className="products__row">
            <div className="products__filter">
              <button>Цена</button>
              <button>Бренд</button>
              <button>Категории</button>
            </div>
            <div className="product-list">
              {products
                .slice(0, showAll ? products.length : visibleProducts) // Используйте showAll для определения количества видимых элементов
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))}
                {showAll && (
                  <button className="show-more-products-btn" onClick={hideAllProducts}>
                    Скрыть
                  </button>
                )}
                {!showAll && (
                  <button className="show-more-products-btn" onClick={loadMoreProducts}>
                    {visibleProducts >= products.length ? "Скрыть" : "Показать еще"}
                  </button>
                )}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ProductList;