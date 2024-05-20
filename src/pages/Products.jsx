import style from '../css/Products.module.css';

import { Tab, Tabs } from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// url 뒤의 parameters 가져옴
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListCard from '../components/ListCard';

import { addItem } from '../store/cartStore';
import { useDispatch } from 'react-redux';

// Modal 관련
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Products = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [similarList, setSimilarList] = useState([]);
    const [count, setCount] = useState(1);

    let dispatch = useDispatch();

    // id가 일치하는 하나의 상품
    const getProductList = async () => {
        let url = `http://localhost:4000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);

        let url2 = `http://localhost:4000/products?category=${data.category}`;
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        setSimilarList(data2);
    };

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {

        setCount(count - 1);
    }

    useEffect(() => {
        getProductList();
    }, []);

    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main className='mw'>
            <h2>product datail page</h2>
            <section className={style.productCon}>
                <div className={style.imgCon}>
                    <img src={`/img/${products?.img}`} alt={products?.title} />
                </div>
                <div className={style.pInfo}>
                    <p>상품명 : {products?.title}</p>
                    <p>가격 : {Number(products?.price).toLocaleString()}원</p>
                    <p>할인률 : {products?.discount}%</p>
                    <div className={style.count}>
                        <span>수량</span>
                        {count === 1 ? (
                            <button disabled>-</button>
                        ) : (<button onClick={decrement}>-</button>
                        )}
                        <span>{count}</span>
                        <button onClick={increment}>+</button>
                    </div>
                    <button onClick={() => {
                        handleShow();

                    }}>장바구니</button>
                </div>
            </section>
            <section>
                <Tabs
                    defaultActiveKey="Description"
                    id="fill-tab-example"
                    className="mb-3"

                >
                    <Tab eventKey="Description" title="Description">
                        Description
                    </Tab>
                    <Tab eventKey="Additional info  " title="Additional info  ">
                        Additional info
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews">
                        Reviews
                    </Tab>
                </Tabs>
            </section>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {similarList.map((p) => {
                        return (
                            <SwiperSlide key={p.id}>
                                <  ListCard product={p} />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </section>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>추가되는 상품 정보를 다시 보여줄 수도 있습니다.<br /><br />
                    <p>선택상품 : {products.title}</p>
                    <p>선택수량 : {count}개</p>                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch(addItem(
                            {
                                id: products.id,
                                title: products.title,
                                img: products.img,
                                price: products.price,
                                category: products.category,
                                discount: products.discount,
                                count: count,
                            }));
                        navigate('/cart');
                    }}>
                        장바구니 추가
                    </Button>
                </Modal.Footer>
            </Modal>
        </main >
    )
}

export default Products