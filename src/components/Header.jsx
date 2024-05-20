import { useEffect, useState } from "react";
import style from "../css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [isNavOn, setIsNavOn] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = isNavOn ? "hidden" : "auto";
    }, [isNavOn]);

    const toggleNav = () => {
        setIsNavOn(!isNavOn);
    }


    return (
        <header className={`${style.hd} mw`}>
            <h1>
                {/* <a href="/"> */}
                <Link onClick={() => { setIsNavOn(false) }} to="/">
                    <img src="/img/logo.svg" alt="logo" />
                </Link>
            </h1>
            <nav className={isNavOn ? `${style.on}` : ""}>
                <div className={style.gnb}>
                    <Link to="/shopall" onClick={() => { setIsNavOn(false) }}>SHOP</Link>
                    <Link to="#">BLOG</Link>
                    <Link to="/company/ceo" onClick={() => { setIsNavOn(false) }}>OUR STORY</Link>
                </div>
                <div className={style.person}>
                    <Link onClick={() => { setIsNavOn(false) }} to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link onClick={() => { setIsNavOn(false) }} to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    <Link onClick={() => { setIsNavOn(false) }} to="#"><i className="fa-solid fa-user"></i></Link>
                </div>
            </nav>
            <button className={style.ham} onClick={toggleNav}>
                <i class="fa-solid fa-bars"></i>
            </button>
        </header>
    )
}

export default Header