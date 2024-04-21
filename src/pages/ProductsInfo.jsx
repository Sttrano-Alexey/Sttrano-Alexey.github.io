import '../styles/ProductsInfo.css'
import Header from '../components/Header/Header'
import startFill from '../components/Images/Products/star_fill.svg'
import startNone from '../components/Images/Products/star_none.svg'
import img from '../components/Images/Products/products-slide.jpg'


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer/Footer'

export default function ProductsInfo(){

    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState(null);
  
    useEffect(() => {
        // Чтение файла products.json
        fetch('../src/DATA/products.json')
            .then((response) => response.json())
            .then((data) => {
            const product = data.find((item) => item.id === parseInt(productId)); // Парсим productId к числу, если необходимо
            setProductInfo(product);
            })
            .catch((error) => {
            console.error('Ошибка при чтении файла products.json:', error);
        });
      }, [productId]); // Зависимость только от productId
  
    if (!productInfo) {
      return <div className='load'>Loading...</div>;
    }
    
    return(
        <>
            <Header></Header>
            <section className='productsInfo'>
                <div className="productsInfo__container container">
                    <div className="productsInfo__header">
                        <a href="">Каталог/</a><a href="">Компьютеры/</a><a href="">Apple/</a><a href="">Компьютер Apple Mac mini 2023 [MNH73LL/A] silver M2 Pro</a>
                    </div>
                    <div className="productsInfo__row">
                        <div className="productsInfo__column">
                            <p className='productsInfo__title'>{productInfo.title}</p>
                            <p className='productsInfo__article'>(арт. {productInfo.article})</p>
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
                            <div className="products__info-slider">
                                <div className="products__info-slider-navigation">
                                    <img className='productsInfo__img-slide' src={img} alt="" />
                                    <img className='productsInfo__img-slide' src={img} alt="" />
                                    <img className='productsInfo__img-slide' src={img} alt="" />
                                </div>
                                <img className='productsInfo__img' src={img} alt="" />
                            </div>
                            <span className='productsInfo__descTitle'>Характеристика</span>
                            <p className='productsInfo__desc'>
                            {productInfo.characteristic}
                            </p>
                        </div>
                        <div className="productsInfo__column">
                            <div className="info-add-to-cart">
                                <div className="add-to-cart-container">
                                    <div className="product-info-count">
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
                                    <div className="info-item-price">
                                        {productInfo.price} <span> ₽</span>
                                    </div>
                                </div>
                                <div className="info-add-to-cart-buttons">
                                    <button className='info-btn'>в корзину</button>                                  
                                    <button className='info-btn order'>быстрый заказ</button>      
                                </div>                                
                            </div>
                            <p className='info-column-title'>Расчитать стоимость доставки</p>
                            <div className="info-delivery">
                                <div><p className='info-delivery-text'>Доставка</p><span className='info-delivery-text'>СДЭК</span></div>
                                <div><p className='info-delivery-text'>Город</p><input className='info-input-city' type="text" placeholder='Москва, Пожарская 25'/></div>
                            </div>
                            <p className='info-column-title'>Выбрать Пункт выдачи</p>
                            <div className="info-map"></div>
                            <div className='info-delivery-courier'><p className='info-delivery-text'>Курьером</p><input className='info-input-city' type="text" placeholder='Москва, Пожарская 25'/></div>
                            <div className='info-delivery-courier-price'><p className='info-delivery-text'>Стоимость доставки</p><span className='info-delivery-text'>340 р</span></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}