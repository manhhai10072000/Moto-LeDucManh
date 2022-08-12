import React from 'react'

const CardItem = (props) => {

    const handleDelete = ()=>{
        props.handleDelete(props.product.id)
    }
  return (
    <>
    <div className='card-shoppingcart'>
    <img src={props.product.imglink}></img>
    <div className='item-shoppingcart'>
    <div>Tên:{props.product.name}</div>
    <div>Giá:{props.product.price}</div>
    <div>Phân khối:{props.product.cc}</div>
    <button onClick={handleDelete}>DELETE</button>
    </div>
    </div>
    </>
  )
}

export default CardItem