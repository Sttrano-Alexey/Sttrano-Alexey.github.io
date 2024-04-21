import './brands.css'
import appleImg from './BrandsImg/apple.svg'
import honorImg from './BrandsImg/HONOR.svg'
import hpImg from './BrandsImg/hp.svg'
import intelImg from './BrandsImg/intel.svg'
import miIMg from './BrandsImg/mi.svg'

export default function Brand(){
    return(
        <>
            <section className="brands">
                <div className="brands__container container">
                    <img className='brands__item' src={appleImg} alt="apple" />
                    <img className='brands__item' src={honorImg} alt="honor" />
                    <img className='brands__item' src={hpImg} alt="hp" />
                    <img className='brands__item' src={intelImg} alt="intel" />
                    <img className='brands__item' src={miIMg} alt="mi" />
                </div>
            </section>
        </>
    )
}