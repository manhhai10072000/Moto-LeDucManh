import React,{useState,useEffect} from 'react'
import axios from '../api/Product'
import {NavLink,Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import img from '../img/Logo-01.png'
import imgslide1 from '../img/Banner-1.png'
import img1 from '../img/home-page-image-1-min.jpg'
import imgproduct from '../img/xe1.png'
import imgproduct1 from '../img/xe2.png'
import imgproduct2 from '../img/xe3.png'
import imgproduct3 from '../img/xe3.png'
import Carousel from '../components/Carousel'


const Header = (props) => {
  const [searchParam,setSearchParam] = useState('')
  const handleSearch = (e)=>{
    e.preventDefault()
    props.handleSearch(searchParam)
  }

      const [list,setList] = useState([])
      const getMotor = async()=>{
        const motor = await axios.get("/motor")
        setList(motor.data)
      }
     useEffect(()=>{
       getMotor()
     },[])
     const showList = list.slice(0,4).map((pr,indx)=>{
      return   <NavLink to="/detail" key={indx} state={pr}>
                <div className='li__img'><img src={pr.imglink} alt="#" /></div>
                <div className='li__line'>{pr.name}</div>
              </NavLink>
     })
     const showList1 = list.slice(4,8).map((pr,indx)=>{
      return   <NavLink to="/detail" key={indx} state={pr} >
      <div className='li__img'><img src={pr.imglink} alt="#" /></div>
       <div className='li__line'>{pr.name}</div>
    </NavLink>
     })
     const showList2 = list.slice(8,9).map((pr,indx)=>{
      return   <NavLink to="/detail" key={indx} state={pr} >
      <div className='li__img'><img src={pr.imglink} alt="#" /></div>
      <div className='li__line'>{pr.name}</div>
    </NavLink>
     })
     const showList3 = list.slice(9).map((pr,indx)=>{
      return   <NavLink to="/detail" key={indx} state={pr} >
      <div className='li__img'><img src={pr.imglink} alt="#" /></div>
      <div className='li__line'>{pr.name}</div>
    </NavLink>
     })

    const product = useSelector(state=>state.card)

  return (
    
    <div className="header">
  <div className="header-row">
    <div className="logo">
      <NavLink to="/">
        <img src={img} alt="" />
      </NavLink>
    </div>
    <div className="nav">
      <div className="nav-top">
        <ul>
          <li>
            <Link to='/card'><i className="fa-solid fa-cart-shopping"></i> </Link>
            <div className='pr-num'>{product.length}</div>
          </li>
        </ul>
        <div className="search">
          <input className="txt-search" type="text" placeholder="Tìm kiếm" onChange={(e)=>setSearchParam(e.target.value)}/>
          <button onClick={handleSearch}>
            <Link to="/search">
            <i className="fa-solid fa-magnifying-glass" />
            </Link>
          </button>
        </div>
        <label for="nav-input-table" className='input-menu'><i class="fa-solid fa-bars"></i></label>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            <NavLink to="/">TRANG CHỦ</NavLink>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <NavLink to="/product">SẢN PHẨM <i class="fa-solid fa-angle-down"></i></NavLink>
            <ul className="nav-con">
              <li><div className='nav-con-line'></div>
                <a href="">NINJA</a>
                {showList}
              </li>
              <li><div className='nav-con-line'></div>
                <a href="">NAKED BIKE</a>
                {showList1}
              </li>
              <li><div className='nav-con-line'></div>
                <a href="">VULCAN</a>
                {showList2}
              </li>
              <li><div className='nav-con-line'></div>
                <a href="">TOURING</a>
                {showList3}
              </li>
            </ul>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <NavLink to="/about">GIỚI THIỆU</NavLink>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <NavLink to="/blog">TIN TỨC</NavLink>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <NavLink to="/contact">LIÊN HỆ</NavLink>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <a href="">PHỤ TÙNG</a>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <a href="">KHUYẾN MÃI</a>
          </li>
          <div className='nav-bottom-line'></div>
          <li>
            <NavLink to="/">ĐẠI LÝ</NavLink>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="nav-input-table" hidden className='nav__input'></input>
      <label for="nav-input-table" className='nav-overlay'></label>
      <div className="nav-bottom-table">
        <label for="nav-input-table" className='out-menu'><i class="fa-solid fa-xmark"></i></label>
        <div className="logo-table">
        <NavLink to="/">
        <img src={img} alt="" />
        </NavLink>
        <p>Sonic Motor</p>
        </div>
        <ul>
          <li>
            <NavLink to="/">TRANG CHỦ</NavLink>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <NavLink to="/product">SẢN PHẨM <i class="fa-solid fa-angle-down"></i></NavLink>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <NavLink to="/about">GIỚI THIỆU</NavLink>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <NavLink to="/blog">TIN TỨC</NavLink>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <NavLink to="/contact">LIÊN HỆ</NavLink>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <a href="">PHỤ TÙNG</a>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <a href="">KHUYẾN MÃI</a>
          </li>
          <div className='nav-bottom-table-line'></div>
          <li>
            <NavLink to="/">ĐẠI LÝ</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>  

  )
}


export default Header