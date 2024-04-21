import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import '../styles/cart.css'

export default function Cart(){

     const fetchProductById = async (productId) => {
        try {
            // Загрузка данных из файла products.json
            const response = await fetch('../src/DATA/products.json');
            if (!response.ok) {
                throw new Error('Не удалось загрузить продукты');
            }
    
            const productsData = await response.json();
            // Возврат данных о продукте по его идентификатору
            return productsData[productId];
        } catch (error) {
            console.error('Ошибка при загрузке продуктов:', error);
            return null; // или обработка ошибки по вашему усмотрению
        }
    };


    // Состояние для списка товаров в корзине
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        // Загружаем данные о каждом товаре из корзины
        const loadCartItems = async () => {
            const itemsWithData = await Promise.all(existingCart.map(async (itemId) => {
                // Вместо передачи идентификатора товара напрямую, мы будем использовать его индекс в базе данных
                const productData = await fetchProductById(itemId - 1); // уменьшаем на 1, так как идентификаторы в массиве начинаются с 1, а индексы массива с 0
                return productData;
            }));
            setCartItems(itemsWithData);
        };
    
        loadCartItems();
    }, []);

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1); // Удаляем товар из массива
        setCartItems(updatedCartItems); // Обновляем состояние корзины
        localStorage.setItem("cart", JSON.stringify(updatedCartItems.map(item => item.id))); // Обновляем localStorage
    };

    const clearCart = () => {
        setCartItems([]); // Очищаем корзину
        localStorage.removeItem("cart"); // Удаляем корзину из localStorage
    };


    return(
        <>
        <Header></Header>
        <section className="cart">
            <div className="cart__container container">
                <div className="cart__mainRow">
                    <div className="cart__mainColumn">
                        <table className="cart-table">
                            <tbody>
                                <tr>
                                    <th className="cart-title">Корзина <span>{cartItems.length} товара</span></th>
                                    <th className="cart-puncts">Артикль</th>
                                    <th className="cart-puncts">Кол-во</th>
                                    <th className="cart-puncts">1 товар</th>
                                    <th className="cart-puncts">x-товар</th>
                                    <th className="last-column clear-cart" onClick={clearCart}>Очистить корзину</th>
                                </tr>
                                {cartItems.map((item, index) => (
                                    <tr className="item-in-cart" key={item.id}>
                                        <td className="item-cart-title"><img src={item.img1} alt="Ноутбук CBR"/><span>{item.title} </span></td>
                                        <td className="item-cart-article">(арт. {item.article})</td>
                                        <td className="count">
                                            <button className="count_btn" data-action="minus" >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
                                                    <path d="M13 8L3 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                            </button>
                                            <span className="count-content">1</span>
                                            <button className="count_btn" data-action="plus">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#C91111"/>
                                                    <path d="M8 3L8 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                    <path d="M13 8L3 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="item-cart-price">{item.price} ₽</td>
                                        <td className="item-cart-price">{item.price} ₽</td>
                                        <td className="delete__cart-td" onClick={() => removeFromCart(index)}>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.21815 3.75C7.45613 2.61625 8.48734 1.75 9.7433 1.75C11.1785 1.75 12.3202 2.88115 12.3202 4.25C12.3202 4.52614 12.5441 4.75 12.8203 4.75H19.4869C19.7631 4.75 19.9869 4.52614 19.9869 4.25C19.9869 3.97386 19.7631 3.75 19.4869 3.75H13.2841C13.0357 2.0453 11.5352 0.75 9.7433 0.75C7.95136 0.75 6.45095 2.0453 6.20248 3.75H0.512695C0.236553 3.75 0.0126953 3.97386 0.0126953 4.25C0.0126953 4.52614 0.236553 4.75 0.512695 4.75H10.7691C11.0452 4.75 11.2691 4.52614 11.2691 4.25C11.2691 3.97386 11.0452 3.75 10.7691 3.75H7.21815Z" fill="#757575"/>
                                                <path d="M17.6922 6.75L16.2487 20.3555C16.1947 20.8641 15.7657 21.25 15.2543 21.25H4.74559C4.23415 21.25 3.80513 20.8641 3.75117 20.3555L2.30762 6.75M6.03178 8.75159L6.24977 15.7482M9.73069 9.25V16.25M13.4294 8.75159L13.2117 15.7482" stroke="#757575" strokeLinecap="round"/>
                                            </svg>
                                            <span>
                                                удалить
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {cartItems.length === 0 ? (
                            <div className="empty-cart-message">
                                <p>Ваша корзина пуста, но это легко исправить!</p>
                                <button onClick={() => {window.location.href ='/products'}}>
                                    Перейти к покупкам
                                </button>
                            </div>
                        ): <></>}
                    </div>
                    {cartItems.length === 0 ? (
                        <></>
                        ):
                        <div className="cart__mainColumn">
                            <div className="order-item-container">
                                <div className="order__items">
                                    <div className="order__item"><span>{cartItems.length} товара</span><span>22 100 р</span></div>
                                    <div className="order__item"><span>Доставка</span><span>СДЭК</span></div>
                                    <div className="order__item-main"><p>К оплате:</p> <span>22 100 р</span></div>
                                </div>
                                <button className="order-btn">Оформить заказ</button>
                                <p className="order-confirmation">
                                    Нажимая на кнопку "Оформить" Вы подтверждаете своё согласие на обработку персональных данных.
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )

}