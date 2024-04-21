import HeadSlider from '../Slider/HeadSlider'
import Brand from './Brands/Brands'
import './head.css'

export default function Head(){
    return(
        <>
            <section className='head'>
                <div className="head__container container">
                    <div className="head__catalog">
                        <ul>
                            <li>Компьютеры, ноутбуки, планшеты</li>
                            <li>Серверы и хранение</li>
                            <li>Портативная электроника</li>
                            <li>Оргтехника, периферия</li>
                            <li>Расходные материалы</li>
                            <li>Комплектующие</li>
                            <li>Носители информации</li>
                            <li>Сетевое оборудование</li>
                            <button>Открыть полный каталог</button>
                        </ul>
                    </div>
                    <HeadSlider></HeadSlider>
                </div>
            </section>
            
        </>
    )
}