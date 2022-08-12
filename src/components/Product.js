import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from '../api/Product'
import '../App.css'
import {NavLink,Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../img/Banner-1.png'
import img1 from '../img/slide2.png'
import img2 from '../img/slide3.jpg'
import img3 from '../img/xe1.png'
import img4 from '../img/xe2.png'
import img5 from '../img/xe3.png'
import ReactPaginate from 'react-paginate';
const Product = () => {
    const [list,setList] = useState([])
    useEffect(()=>{
        getProduct()
    },[])
    const getProduct = async()=>{
       return await axios.get('/motor')
       .then((resp)=>setList(resp.data))  
       .catch((err)=>console.log(err))
    }
    const dispatch = useDispatch()
    const handleBuy = (product) =>
    dispatch({
      type:'ADD',
      payload:product
    })
    const items = [1, 2, 3];
    const [select,setSelect] = useState('');
    const [cc,setCc] = useState('');
    const [company,setCompany] = useState('');
    const [kind,setKind] = useState('');
    const [price,setPrice] = useState(0);
      let showSelect = list;
      if  (select==''){ 
        showSelect = [...list.slice(0,12)]
       }
      if(cc||company||kind){
      showSelect = list.filter(pr=>{
       return  pr.cc===cc||pr.company===company||pr.kind===kind
     });
    };
    if(cc&&company&&kind){
      showSelect = list.filter(pr=>{
        return pr.cc===cc&&pr.company===company&&pr.kind===kind
      });
    }
    else{
      if(cc&&company){
        showSelect = list.filter(pr=>{
          return pr.cc===cc&&pr.company===company
        });
      };
    if(cc&&kind){
      showSelect = list.filter(pr=>{
        return pr.cc===cc&&pr.kind===kind
      });
    };  
    if(company&&kind){
      showSelect = list.filter(pr=>{
        return pr.company===company&&pr.kind===kind
      });
    };
    if(price==200000000){
      showSelect = list.filter(pr=>{
        return pr.price<price
      });
    }
    if(price=='200000000-400000000'){
      const min=200000000
      const max=400000000
      showSelect = list.filter(pr=>{
        return min<pr.price&&max>pr.price
      });
    }
    if(price==400000001){
      showSelect = list.filter(pr=>{
        return pr.price>price
      });
    }
  }
    // if(kind)
    // {
    //   showSelect=list.filter(pr=>{
    //     return pr.kind===kind
    //   })
    // }

    console.log([...list].slice(0,6),showSelect);
    
    
    const showList = showSelect.map((product,index)=>{
        return <div key={index}>
          <div className='card-product'>
            <img src={product.imglink}></img>
            <div className='cc'>Phân khối:{product.cc}cc</div>
            <div className='namemotor'>{product.name}</div>
            <div className='card-product-line'></div>
            <div className='price'>GÍA BÁN LẺ ĐỀ XUẤT KHÔNG ABS:0đ/GIÁ BÁN LẺ ĐỀ XUẤT ABS
                  Giá:{product.price}.VND
            </div>
            <button className='buy-top' onClick={()=>handleBuy(product)}><i class="fa-solid fa-cart-plus"></i></button>
            <button className='view-top'><Link to="/detail" state={product}><i class="fa-solid fa-eye"></i></Link></button>
            <ToastContainer />
        </div>
        </div>
    })
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:1000,
    };
    // pagination
  return (
    <>
    <Slider {...settings}>
      <div className='slick'>
        <img src={img}></img>
      </div>
      <div className='slick'>
        <img src={img1}></img>
      </div>
      <div className='slick'>
        <img src={img2}></img>
      </div>
      <div className='slick'>
        <img src={img3}></img>
      </div>
      <div className='slick'>
        <img src={img4}></img>
      </div>
      <div className='slick'>
        <img src={img5}></img>
      </div>
    </Slider>
    <div className='container-product'>
    <div className='selecter'>
      <h3>Bộ Lọc</h3>
      <div className='se'>
      <h3>Hãng</h3>
    <select onChange={(e)=>setCompany(e.target.value)}>
          <option value=''>ALL</option>
          <option value="kawasaki">KAWASAKI</option>
          <option value="yamaha">YAMAHA</option>
          <option value="honda">HONDA</option>
        </select>
          </div>
          <div className='se'>
        <h3>Phân khối</h3>
        <select onChange={(e)=>setCc(e.target.value)}>
          <option value=''>ALL</option>
          <option value="400">400cc</option>
          <option value="650">650cc</option>
          <option value="1000">1000cc</option>
        </select>
        </div>
        <div className='se'>
        <h3>Loại</h3>
        <select onChange={(e)=>setKind(e.target.value)}>
          <option value=''>ALL</option>
          <option value="mb">MOTO BIKE</option>
          <option value="nb">NAKED BIKE</option>
          <option value="vc">VULCAN</option>
          <option value="tr">TOURING</option>
        </select>
        </div>
        <div className='se'>
        <h3>Giá</h3>
        <select onChange={(e)=>setPrice(e.target.value)}>
          <option value=''>ALL</option>
          <option value="200000000">0-200TR</option>
          <option value="200000000-400000000">200TR-400TR</option>
          <option value="400000001">400TR-2TY</option>
          </select>
          </div>
      </div>
      <div className='item-product'>
        <div className='row-product'>
          <p>SONIC XE MOTOR</p>
          <div className='line-product'></div>
        </div>
      {showList}
      </div>
    </div>
    </>
  )
}

export default Product