import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

const Shopall = () => {
    const [products, setProducts] = useState([]);

    ////    getProductList() : 전체 상품 가져오기
    const getProductList = async () => {
        let url = `http://localhost:4000/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
    };

    //    getNewList() : 카테고리 new (신상품) 가져오기
    const getNewList = async () => {
        let url = `http://localhost:4000/products?category=new`;
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
    };
    //    getTopList() : 카테고리Top (인기상품) 가져오기
    const getTopList = async () => {
        let url = `http://localhost:4000/products?category=top`;
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
    };
    //    getLowPrice() : 낮은가격순 정렬
    const getLowPrice = () => {
        products.sort((a, b) => {
            return a.price - b.price;
        })
        setProducts([...products]);
    }
    //    getHighPrice() : 높은가격순 정렬
    const getHighPrice = () => {
        products.sort((a, b) => {
            return b.price - a.price;
        })
        setProducts([...products]);
    }
    //    getHighDiscount() : 높은가격순 정렬
    const getHighDiscount = () => {
        products.sort((a, b) => {
            return b.discount - a.discount;
        })
        setProducts([...products]);
    }

    useEffect(() => {
        getProductList();
    }, []);


    return (
        <main className="mw shopall">
            <h2>Shopall</h2>
            <div>

                <nav>
                    <hr />
                    <button onClick={getProductList}>모든상품</button>
                    <button onClick={getNewList}>신상품</button>
                    <button onClick={getTopList}>인기상품</button>
                    <hr />
                    <button onClick={getLowPrice} >낮은가격순</button>
                    <button onClick={getHighPrice}>높은가격순</button>
                    <button onClick={getHighDiscount}>할인률순</button>
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