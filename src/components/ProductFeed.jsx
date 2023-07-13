import React,{useState , useEffect} from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

const max_rating = 5;
const min_rating = 1;
const ProductFeed = () => {
    const [products, setProducts] = useState([])
    const [rating] =useState(
        Math.floor(Math.random() * (max_rating - min_rating) +min_rating)
    )
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(responce => responce.json())
        .then(data =>setProducts(data) )
        
           
    })
      
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-72 md:-mt-52  sm:-mt-72 mx-auto'>
       {
        products.slice(0,4).map((product) => {
            return(
                  
                     <div className='relative flex flex-col m-5 bg-white z-30 p-10 items-center' key={product.id}>
                     <p className='absolute top-2 right-2 text-xs italic text-gray-400 capitalize'>{product.category}</p>
                    <img src={product.image}  width={200} height={200}  alt="/" />
                    <p>{product.title}</p>
                    <div className='flex'>
                        {Array(rating).fill().map((_,i) => (
                            <StarIcon className='h-5 text-yellow-500 '/>
                        ))}
                    </div>
                     <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
                     <p className='mb-5'>${product.price}</p>
                    <button className='mt-auto button w-full'>Add Cart</button>
                 </div>

            )
        })
       }
       <img
       className='md:col-span-full mx-auto'
       src="https://links.papareact.com/dyz" alt="" />
       <div className='md:col-span-2'> 
         {
        products.slice(4,5).map((product) => {
            return(
                  
                     <div className='relative flex flex-col m-5 bg-white z-30 p-10 items-center' key={product.id}>
                     <p className='absolute top-2 right-2 text-xs italic text-gray-400 capitalize'>{product.category}</p>
                    <img src={product.image}  width={200} height={200}  alt="/" />
                    <p>{product.title}</p>
                    <div className='flex'>
                        {Array(rating).fill().map((_,i) => (
                            <StarIcon className='h-5 text-yellow-500 '/>
                        ))}
                    </div>
                     <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
                     <p className='mb-5'>${product.price}</p>
                    <button className='mt-auto button w-full'>Add Cart</button>
                 </div>

            )
        })
       }
       </div>
       {
        products.slice(5,products.length).map((product) => {
            return(
                  
                     <div className='relative flex flex-col m-5 bg-white z-30 p-10 items-center' key={product.id}>
                     <p className='absolute top-2 right-2 text-xs italic text-gray-400 capitalize'>{product.category}</p>
                    <img src={product.image}  width={200} height={200}  alt="/" />
                    <p>{product.title}</p>
                    <div className='flex'>
                        {Array(rating).fill().map((_,i) => (
                            <StarIcon className='h-5 text-yellow-500 '/>
                        ))}
                    </div>
                     <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
                     <p className='mb-5'>${product.price}</p>
                    <button className='mt-auto button w-full'>Add Cart</button>
                 </div>

            )
        })
       }
    </div>
  )
}

export default ProductFeed