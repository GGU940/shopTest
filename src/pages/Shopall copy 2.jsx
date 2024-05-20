import { useEffect, useCallback } from "react";
import ListCard from "../components/ListCard";

const Shopall = ({ products, getProductList, setProducts }) => {


    const sortProducts = useCallback((type) => {

        if (type === 'lowPrice') {
            products.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (type === 'highPrice') {
            products.sort((a, b) => {
                return b.price - a.price;
            })
        } else if (type === 'discount') {
            products.sort((a, b) => {
                return b.discount - a.discount;
            })
        }
        let sortProducts = [...products];

        setProducts(sortProducts);

    }, [products, setProducts]);



    useEffect(() => {
        getProductList("");
    }, [getProductList]);


    return (
        <main className="mw shopall">
            <h2>Shopall</h2>
            <div>

                <nav>
                    <hr />
                    <button onClick={() => { getProductList("") }}>모든상품</button>
                    <button onClick={() => { getProductList("new") }}>신상품</button>
                    <button onClick={() => { getProductList("top") }}>인기상품</button>
                    <hr />
                    <button onClick={() => { sortProducts("lowPrice") }} >낮은가격순</button>
                    <button onClick={() => { sortProducts("highPrice") }}>높은가격순</button>
                    <button onClick={() => { sortProducts("discount") }}>할인률순</button>
                </nav>

                <ul className="listCon">


                    {products.map((product) => {
                        return (
                            <li key={product.id}>
                                <ListCard product={product} />
                            </li>
                        )
                    })}

                </ul>
            </div>
        </main>
    )
}

export default Shopall