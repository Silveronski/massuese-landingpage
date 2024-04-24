import React from 'react'

const ProductCard = ({imgUrl, productName, productDescription}) => {
  return (
    <div className='my-product'>
        <img src={imgUrl} alt="" />
        <div>
            <h5>{productName}</h5>
            <p>{productDescription}</p>         
        </div>          
    </div>
  )
}

export default ProductCard