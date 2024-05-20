import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItem, addCount, minusCount } from '../store/cartStore';

const Cart = () => {

    let user = useSelector((state) => { return state.user });
    let cart = useSelector((state) => { return state.cart });

    let dispatch = useDispatch();
    let navigate = useNavigate();

    return (
        <main className="mw">
            <h2>{user.username}님의 장바구니</h2>
            <p>{cart.length}개의 상품이 담겨있음</p>
            <Table bordered hover className='cart'>
                <colgroup>
                    <col width={"4%"} />
                    <col width={"*"} />
                    <col width={"16%"} />
                    <col width={"8%"} />
                    <col width={"8%"} />
                    <col width={"16%"} />
                    <col width={"6%"} />
                </colgroup>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>상품명 [이미지]</th>
                        <th>가격</th>
                        <th>할인률</th>
                        <th>수량</th>
                        <th>최종금액</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (<tr key={item.id}>
                            <td className='center'>{item.id}</td>
                            <td className='tdTitle' onClick={() => { navigate(`/products/${item.id}`); }}>
                                <div>
                                    <img src={`img/${item.img}`} alt="{item.title}" />
                                </div>
                                <p>{item.title}</p></td>
                            <td className='right'>{Number(item.price).toLocaleString()}원</td>
                            <td className='center'>{item.discount}%</td>
                            <td className='center'>
                                {item.count === 1 ? (
                                    <button disable>-</button>) : (
                                    <button onClick={() => { dispatch(minusCount(item.id)); }}>-</button>
                                )}
                                {item.count}개
                                <button onClick={() => { dispatch(addCount(item.id)) }}>+</button>
                                {/* <button onClick={() => {
                                    dispatch(changeCount(10))
                                }}>대량구매</button> */}
                            </td>
                            <td className='right'>{(item.count * ((1 - (item.discount / 100)) * (item.price))).toLocaleString()}원</td>
                            <td className='center'>
                                <button onClick={() => { dispatch(deleteItem(item.id)) }}>🞪</button>
                            </td>
                        </tr>)
                    })}


                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={7} className='right'>최종 결제금액
                            {cart.reduce((a, b) => { return (a + ((1 - (b.discount / 100)) * (b.price)) * b.count) }, 0).toLocaleString()}원
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </main >
    )
}

export default Cart