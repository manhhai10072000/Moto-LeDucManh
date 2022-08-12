import axios from '../api/Product'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Search = (props) => {
    const handleBuy = (prod) => dispatch({
    type:'ADD',
    payload:prod
    })
    const dispatch = useDispatch()
    const [list,setList] = useState([])
    useEffect(()=>{
        getResult()
    },[props.searchParam])
    console.log(list);
    
    const getResult = async()=>{
    return await axios.get(`/motor?name=${props.searchParam}`)  
            .then((resp)=>{setList(resp.data)})
            .catch((err)=>console.log(err))
    }

    const show = list.map((prod,index)=>{
        return<div key={index}>
          <div className='card-product'>
            <img src={prod.imglink}></img>
            <div className='cc'>Phân khối:{prod.cc}cc</div>
            <div className='namemotor'>{prod.name}</div>
            <div className='price'>GÍA BÁN LẺ ĐỀ XUẤT KHÔNG ABS:0đ/GIÁ BÁN LẺ ĐỀ XUẤT ABS
                  Giá:{prod.price}.VND
            </div>
            <button className='buy-top' onClick={()=>handleBuy(prod)}><i class="fa-solid fa-cart-plus"></i></button>
            <button className='view-top'><Link to="/detail" state={prod}><i class="fa-solid fa-eye"></i></Link></button>
        </div>
        </div>
    })
    const [select,setSelect] = useState('')
    let showSelect = [];
    if (select=='') {
      showSelect = [...list]
    }else if(select=='400'){
      showSelect = list.filter(pr=>pr.cc==='400')
    }else if(select=='650'){
      showSelect = list.filter(pr=>pr.cc==='650')
    }else if(select=='1000'){
      showSelect = list.filter(pr=>pr.cc==='1000')
    }
    if (select=='') {
      showSelect = [...list]
    }else if(select=='kawasaki'){
      showSelect = list.filter(pr=>pr.company==='kawasaki')
    }else if(select=='yamaha'){
      showSelect = list.filter(pr=>pr.company==='yamaha')
    }else if(select=='honda'){
      showSelect = list.filter(pr=>pr.company==='honda')
    }
    if (select=='') {
      showSelect = [...list]
    }else if(select=='mb'){
      showSelect = list.filter(pr=>pr.kind==='mb')
    }else if(select=='nb'){
      showSelect = list.filter(pr=>pr.kind==='nb')
    }else if(select=='vc'){
      showSelect = list.filter(pr=>pr.kind==='vc')
    }else if(select=='tr'){
    showSelect = list.filter(pr=>pr.kind==='tr')
    }
    if (select=='') {
      showSelect = [...list]
    }else if(select=='mb'){
      showSelect = list.filter(pr=>pr.kind==='mb')
    }else if(select=='nb'){
      showSelect = list.filter(pr=>pr.kind==='nb')
    }
  return (
    <>
    <div className='container-product'>
    <div className='selecter'>
      <h3>Bộ Lọc</h3>
      <h3>Hãng</h3>
    <select onChange={(e)=>setSelect(e.target.value)}>
          <option value=''>ALL</option>
          <option value="kawasaki">KAWASAKI</option>
          <option value="yamaha">YAMAHA</option>
          <option value="honda">HONDA</option>
        </select>
        <h3>Phân khối</h3>
        <select onChange={(e)=>setSelect(e.target.value)}>
          <option value=''>ALL</option>
          <option value="400">400cc</option>
          <option value="650">650cc</option>
          <option value="1000">1000cc</option>
        </select>
        <h3>Loại</h3>
        <select onChange={(e)=>setSelect(e.target.value)}>
          <option value=''>ALL</option>
          <option value="mb">MOTO BIKE</option>
          <option value="nb">NAKED BIKE</option>
          <option value="vc">VULCAN</option>
          <option value="tr">TOURING</option>
        </select>
        <h3>Giá</h3>
        <select onChange={(e)=>setSelect(e.target.value)}>
          <option value=''>ALL</option>
          <option value="mb">MOTO BIKE</option>
          </select>
      </div>
      <div className='item-product'>
        <div className='row-product'>
          <p>SONIC XE MOTOR</p>
          <div className='line-product'></div>
        </div>
      {show}
      </div>
    </div>
    </>
  )
}

export default Search