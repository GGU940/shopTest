import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "../components/ListCard";
import { getProductList } from "../store/productStore";

const Shopall = () => {
    let productsState = useSelector(state => state.products);
    let products = productsState.products;

    let [list, setList] = useState(products);

    const sortProducts = (type) => {
        let sortProducts = [...products];

        if (type === 'lowPrice') {
            sortProducts.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (type === 'highPrice') {
            sortProducts.sort((a, b) => {
                return b.price - a.price;
            })
        } else if (type === 'discount') {
            sortProducts.sort((a, b) => {
                return b.discount - a.discount;
            })
        }

        setList(sortProducts);

    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            getProductList(""))
    }, [dispatch]);

    useEffect(() => {
        setList(products)
    }, [products])


    return (
        <main className="mw shopall">
            <h2>Shopall</h2>
            <div>

                <nav>
                    <hr />
                    <button onClick={() => { dispatch(getProductList("")) }}>모든상품</button>
                    <button onClick={() => { dispatch(getProductList("new")) }}>신상품</button>
                    <button onClick={() => { dispatch(getProductList("top")) }}>인기상품</button>
                    <hr />
                    <button onClick={() => { sortProducts("lowPrice") }} >낮은가격순</button>
                    <button onClick={() => { sortProducts("highPrice") }}>높은가격순</button>
                    <button onClick={() => { sortProducts("discount") }}>할인률순</button>
                </nav>

                <ul className="listCon">


                    {list.map((product) => {
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