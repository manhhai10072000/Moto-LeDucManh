import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from '../api/Product'
import  { useEffect, useState } from 'react';
import product from '../api/Product';
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
    const [list,setList] = useState([])
    useEffect(()=>{
        getDetail()
    },[])
    const getDetail = async()=>{
       return await axios.get('/motor')
       .then((resp)=>setList(resp.data))  
       .catch((err)=>console.log(err))
    }
    const dispatch = useDispatch()
    const handleBuy = (product) =>dispatch(
      toast.success('Đã thêm vào giỏ hàng', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      ,dispatch({
        type:'ADD',
        payload:product
      })
      )
  const getMotor = async()=>{
   const motor = await axios.get("/motor")
   setList(motor.data)
  }
  useEffect(()=>{
    getMotor()
  },[])

  const location = useLocation()
  const motor = location.state
  const showList = list.slice(0,6).map((pr,indx)=>{
    return <div className="col-md-3" key={indx}>
            <div className="content">
              <h3>{pr.name}</h3>
              <h3>{pr.cc} CC</h3>
              <h4>POWERED BY {pr.company}</h4>
              <h5>${pr.price}</h5>
            </div>
            <Link to="/detail" state={pr}>
              <img src={pr.imglink} alt="#" />
            </Link>
          </div>
  })

  return (
    <>
    <div className="overlay">
  <div className="overlay-product">
  <main>
  <div className="card">
    <div className="card__title">
      <NavLink to="/product">
        <div className="icon">
          <i className="fa fa-arrow-left" />
        </div>
      </NavLink>
      <h3>SẢN PHẨM MỚI</h3>
    </div>
    <div className="card__body">
      <div className="half">
        <div className="featured_text">
          <h1>KAWASAKI</h1>
          <p className="sub">Sports Moto</p>
          <p className="price">
            {motor.price}.VND
          </p>
        </div>
        <div className="image">
          <img src={motor.imglink}></img>
        </div>
      </div>
      <div className="half">
        <div className="description">
          <h2>
            {motor.name}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptatem nam pariatur voluptate perferendis, asperiores
            aspernatur! Porro similique consequatur, nobis soluta minima, quasi
            laboriosam hic cupiditate perferendis esse numquam magni.
          </p>
        </div>
        <span className="stock">
          <i className="fa fa-pen" /> In stock
        </span>
        <div className="reviews">
          <ul className="stars">
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star-o" />
            </li>
          </ul>
          <span>(64 reviews)</span>
        </div>
      </div>
    </div>
    <div className="card__footer">
      <div className="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div>
      <div className="action">
        <button type="button" onClick={()=>handleBuy(motor)}>Thêm sản phẩm vào giỏ hàng</button>
        <ToastContainer />
      </div>
    </div>
  </div>
</main>

    <div className="container-motorcycle">
      <div className="container-motorcycle-title">
        <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
        <h3>
          LỰA CHỌN MỚI HƠN
          <br />
        </h3>
        <h2>
          {" "}
          CHỌN MOTOR
          <br />
        </h2>
        <h4>
          Mọi người đều cần chủ đề thiết kế đồ họa tùy chỉnh cho đại lý ô tô của bạn
          kinh doanh trên thế giới
          <br />. Cửa hàng sẽ giới thiệu cho các bạn một vài mẫu motor đẹp
          được thực hiện bởi motor Sonic,
          <br /> Nó phù hợp cho tất cả những ai muốn sở hữu một chiếc xe phân khối lớn
        </h4>
      </div>
      <div className="container-motorcycle-item-top-detail">
     {showList}
      </div>
      </div>
    </div>
  </div>


    </>
  )
}

export default Detail