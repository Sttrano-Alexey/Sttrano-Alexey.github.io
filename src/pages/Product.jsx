import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/products.css'
import startFill from '../components/Images/Products/star_fill.svg'
import startNone from '../components/Images/Products/star_none.svg'

const Product = ({ product }) => {


  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли товар уже в корзине при загрузке компонента
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isItemInCart = existingCart.includes(product.id);
    setIsInCart(isItemInCart);
  }, [product.id]);

  const addToCart = () => {
    // Получаем текущий список товаров в корзине из localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Проверяем, есть ли идентификатор товара уже в корзине
    const isItemInCart = existingCart.includes(product.id);

    // Если товар уже в корзине, не добавляем его заново
    if (!isItemInCart) {
        // Добавляем айди товара в корзину
        existingCart.push(product.id);

        // Сохраняем обновленный список товаров в localStorage
        localStorage.setItem("cart", JSON.stringify(existingCart));
        setIsInCart(true);
    } else {
        // Можно добавить здесь логику уведомления пользователя о том, что товар уже в корзине
        console.log("Товар уже добавлен в корзину");
    }
};

  return (
      <>
        <div className="product__item">
          <div className="products__slider-item">
            <img src={product.img1} alt="" />
          </div>
          <span className="product__price">{product.price} ₽</span>
          <Link to={`/info_products/${product.id}`} className="products__title">{product.title}</Link>
          <span className="product__article">(арт .{product.article})</span>
          <div className="product__rate">
            <div className="product__stars">
              <img src={startFill} alt="" />
              <img src={startFill} alt="" />
              <img src={startFill} alt="" />
              <img src={startFill} alt="" />
              <img src={startNone} alt="" />
            </div>
            <span>4.0</span>
          </div>
          <span className="products__aviability">В наличии</span>
          {isInCart ? (
            <div className="added-to-cart">
              <button className=" product__add-to-cart-btn product__added-to-cart-btn">В корзине</button>
              <div className="product-item-count">
                <button className="count_btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
                        <path d="M13 8L3 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <span className="count-content">1</span>
                <button className="count_btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="#C91111"/>
                      <path d="M8 3L8 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M13 8L3 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <button className="product__add-to-cart-btn" onClick={addToCart}>В корзину</button>
          )}
        </div>
      </>
  );
};

export default Product;