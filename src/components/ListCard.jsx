import style from "../css/ListCard.module.css"
import { useNavigate } from "react-router-dom"


const ListCard = ({ product }) => {

    const navigate = useNavigate();
    function goDetail() {
        navigate(`/products/${product.id}`);
    }
    return (
        <div className={style.listCard} onClick={goDetail}>
            <div className={style.pImg}>
                <img src={`../img/${product.img}`} alt={product.title} />
            </div>
            <div className={style.pInfo}>
                <p>{product.title}</p>
                <p>{Number(product.price).toLocaleString()}원</p>
                {/* Number(number형으로변경).toLocaleString():number를 0,000 형태 처리  */}
            </div>
            {product.discount === '0' ? null : (
                <span className={style.discount}>-{product.discount}%</span>
            )}
        </div>
    )
}

export default ListCard