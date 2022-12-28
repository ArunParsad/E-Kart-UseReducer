import React from 'react'
import productsData from './data'
import ProductItem from './ProductItem'
const Products = () => {
  return (
    <>
      <div className='container mx-auto h-screen my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center w-full mx-auto px-20 pb-20'>
          {productsData.map((product) => {
            return (
              <div key={product.id}>
                <ProductItem {...product} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
