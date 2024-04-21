import './Header.css'
import logo from '../Images/Logo/logo.svg'
import search from '../Images/Icons/search.svg'
import cart from '../Images/Icons/cart.svg'
import CatalogMain from '../Catalog/CatalogMain'
import React, { useState } from 'react'

export default function Header(){

    const [isCatalogOpen, setCatalogOpen] = useState(false)


    const openCatalog = () => {
        setCatalogOpen(!isCatalogOpen)
        document.querySelector('body').classList.toggle('lock')
    }

    
        // В функции goToCartPage() в компоненте header
        const goToCartPage = () => {
            const currentUrl = window.location.href;
            
            if (currentUrl.includes('cart')) {
                // Если пользователь уже на странице корзины, перенаправляем его на предыдущую страницу
                const previousUrl = localStorage.getItem('previousUrl');
                if (previousUrl) {
                    window.location.href = previousUrl;
                } else {
                    // Если нет сохраненного предыдущего URL, перенаправляем на главную страницу или другую страницу по умолчанию
                    window.location.href = '/';
                }
            } else {
                // Если пользователь не на странице корзины, перенаправляем его на страницу корзины
                // Также сохраняем текущий URL в локальное хранилище как предыдущий URL
                localStorage.setItem('previousUrl', currentUrl);
                window.location.href = '/cart';
            }
        }

    return(
    <>
    <header className="header">
        <div className="header__container container">
            <a href="index.html" className="header__logo">
                <img className="header__logo-img" src={logo} alt=""/>
            </a>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item"><a href="delivery" className="header__menu-link">Доставка</a></li>
                    <li className="header__menu-item"><a href="person.html" className="header__menu-link">Юр. Лицам</a></li>
                    <li className="header__menu-item"><a href="payment.html" className="header__menu-link">Оплата</a></li>
                    <li className="header__menu-item"><a href="safeguard.html" className="header__menu-link">Гарантия</a></li>
                    <li className="header__menu-item"><a href="about.html" className="header__menu-link">О нас</a></li>
                    <li className="header__menu-item"><a href="contacts.html" className="header__menu-link">Контакты</a></li>
                </ul>
            </nav>
            <div className="header__contact">
                <p className="header__contact-time" href="#">10:00 - 19:00</p>
                <a className="header__contact-email" href="mailto:1@TECHPRO.RU">1@TECHPRO.RU</a>
                <a className="header__contact-phone" href="tel:8-910-00-00">8-910-00-00</a>
            </div>
            <button id="catalog_open" className="header__button" onClick={openCatalog}>
                Каталог
            </button>
            <div className="header__search">
                <form className="header__search-form" action="/search" method="get">
                    <input className="header__search-input" type="text" placeholder="Искать товары" name="search"/>
                    <input className="header__search-icon" type="image" src={search} alt="Поиск" />
                </form>
                <button className="header__shop" onClick={goToCartPage}>
                    <img src={cart} alt="" />
                </button>
            </div>
        </div>
        <div className="header__mobile-search">
            <div className="header__mobile-container">
                <span className="header__mobile-title">
                    Поиск товара
                </span>
                <form action="/search" method="get" className="header__mobile-form">
                    <input className="header__mobile-input" type="text" placeholder="Артикул, категория, бренд, модель..." name="search" />
                    <button className="header__mobile-button">Искать в каталоге</button>
                </form>
            </div>
        </div>
    </header>
    {isCatalogOpen && <CatalogMain></CatalogMain>}
    </>
    )
}