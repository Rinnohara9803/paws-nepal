// import React from 'react'

// const OrderDetails = () => {

//     const items = [{
//         item: {}
//     }];
//     return <div className='flex flex-col items-start justify-start px-10 md:px-36'>
//         <p className="text-lg tracking-wider font-semibold text-zinc-500 mb-5">
//         {" "}
//         Home / <span className="text-white"> Cart </span>
//       </p>
//       <div className="flex flex-col items-start justify-start w-full">
//         {items.length === 0 && (
//           <div className="flex flex-row justify-center w-full my-10 tracking-widest">
//             <p> You have no items in your cart</p>
//           </div>
//         )}
//         {items.length !== 0 &&
//           items.map((item) => {
//             return (
//               <CartItem
//                 item={item.productItem}
//                 count={item.count}
//                 price={item.price}
//               ></CartItem>
//             );
//           })}
//       </div>
//       <div className="flex flex-row justify-between items-center mt-5 w-full">
//         <p className="text-zinc-500"> Subtotal</p>
//         <p className="font-semibold"> Rs. {totalPrice} </p>
//       </div>
//       <div className="flex flex-row justify-between items-center mt-5 mb-6 w-full">
//         <p className="text-zinc-500"> Total</p>
//         <p className="font-semibold"> Rs. {totalPrice} </p>
//       </div>
//     </div>
// }