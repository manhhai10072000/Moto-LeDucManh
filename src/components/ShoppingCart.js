import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from './CardItem'
import axios from '../api/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShoppingCart = () => {


    const product = useSelector(state=>state.card)
    const dispatch = useDispatch()

    const handleDelete=(id)=>dispatch({
        type:'DELETE',
        payload:id
    })
    var total =0;
    const showTotal = (card)=>{
  // console.log(card[0].price);
      for(let i=0;i<card.length;i++){
        total += parseInt( card[i].price)
      }
        return total
    }
    const list = product.map((pr,indx)=>{     
       return <CardItem key={indx} product={pr} handleDelete={handleDelete}></CardItem>
    })


    const [namemotor,setNameMotor] = useState('');
    const [name,setName] = useState('');
    const [phone,setphone] = useState('');
    const [district,setDistrict] = useState('');
    const [ward,setWard] = useState('');
    const [street,setStreet] = useState('');
    const [bill,setBill] = useState('');
    const [subTotal,setSubTotal] = useState(0);
    useEffect(()=>{
      setNameMotor(motor)
    },[product])
    useEffect(()=>{
      setSubTotal(total)
    },[total])
    var motor=[];
    for (let i = 0; i < product.length; i++) {
      const element = product[i].name; 
      motor[i]=element
    }
    
    
    const handleBuy = async()=>{
       await axios.post('/shoppingcard',{name,phone,district,ward,street,bill,subTotal,namemotor})
      .catch((err)=>console.log(err))
      toast.success('Mua hàng thành công', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
       }


  return (
   <div className='container-shoppingcart'>
      <div className='list-shoppingcart'>{list}</div>
      <div className='function-shoppingcart'>
        <div className='infor-shoppingcart'>
          <h4>THÔNG TIN KHÁCH HÀNG</h4>
          Nam<input className='checkbox' type="checkbox" />
          Nữ<input className='checkbox' type="checkbox" />
          <div className='infor-card'>
          <input placeholder='Họ và Tên'  onChange={(e)=>setName(e.target.value)}></input>
          <input placeholder='Số điện thoại'  onChange={(e)=>setphone(e.target.value)}></input>
          </div>
          <h4>Địa điểm nhận hàng</h4>
          <div className='location-card'>
          <select>
          <option>Hà Nội</option>
          <option>Location2</option>
          <option>Location3</option>
          <option>Location4</option>
          </select>
          <select onChange={(e)=>setDistrict(e.target.value)}>
          <option>Chọn Quận / Huyện</option>
          <option value='huyen2'>Location2</option>
          <option value='huyen3'>Location3</option>
          <option value='huyen4'>Location4</option>
          </select>
          <select onChange={(e)=>setWard(e.target.value)}>
          <option>Chọn Phường / Xã</option>
          <option value='xa2'>Location2</option>
          <option value='xa3'>Location3</option>
          <option value='xa4'>Location4</option>
          </select>
          <select onChange={(e)=>setStreet(e.target.value)}>
          <option>Số nhà,tên đường</option>
          <option value='duong2'>Location2</option>
          <option value='duong3'>Location3</option>
          <option value='duong4'>Location4</option>
          </select>
          </div>
          <div className='Request-card'>
            <input placeholder='Yêu cầu khác(Không bắt buộc)'></input>
            <input className='checkbox' type="radio" name="request" value='call' onChange={(e)=>setBill(e.target.value)}/>Gọi người khác nhận hàng nếu có
            <input className='checkbox' type="radio" name="request" value='bill' onChange={(e)=>setBill(e.target.value)}/>Xuất hóa đơn công ty 
          </div>
        </div>
      <div className='total'>Total:{showTotal(product)}.VND</div>
      <button className='pay' onClick={handleBuy}>BUY</button>
      <ToastContainer />
      </div>
    </div>
  )
}

export default ShoppingCart