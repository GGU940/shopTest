import ListCard from "./ListCard"

const MainList = ({ products }) => {
    console.log("MAinList-products", products);

    return (
        <div className="mainList">
            <h2>MainList</h2>
            <a href="#">View All</a>
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
    )
}

export default MainList