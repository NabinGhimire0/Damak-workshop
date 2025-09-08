import React from 'react'

const Product = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-shadow'>
        <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg" alt="" 
        className='w-full h-48 object-cover rounded-md mb-4' />
        <h1 className='text-lg font-semibold text-gray-800 mb-0'>shoes</h1>
        <p className='text-lg font-semibold text-green-600'>200</p>
        <button className='bg-blue-600 rounded-md text-white py-2 px-4'>Add to Cart</button>
    </div>
  )
}

export default Product