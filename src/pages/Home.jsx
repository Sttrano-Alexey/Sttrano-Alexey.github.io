import Advantages from "../components/Advantages/Advantages"
import Footer from "../components/Footer/Footer"
import Brand from "../components/Head/Brands/Brands"
import Head from "../components/Head/Head"
import Header from "../components/Header/Header"
import Categories from "../components/Categories/Categories"
import Appliances from "../components/Appliances/Appliances"
import CatalogMain from "../components/Catalog/CatalogMain"
export default function Home (){
    return(
        <>
        <Header></Header>
        <div className="wrapper">
            <Head></Head>
            <Brand></Brand>
            <Advantages></Advantages>
            <Categories></Categories>
            <Appliances></Appliances>
        </div>
        <Footer></Footer>
        </>
    )
}