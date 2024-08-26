import React from 'react';

const OrderDetails = ({ order }) => {
  const {
    shippingAddress,
    taxPrice,
    shippingPrice,
    totalOrderPrice,
    paymentMethodType,
    isPaid,
    isDelivered,
    user,
    cartItems,
    paidAt,
    createdAt,
  } = order;

  return (
    <div className='max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b pb-3 '>
        Order Details
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <div>
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>
            Shipping Address
          </h3>
          <p className='text-gray-600'>{shippingAddress.details}</p>
          <p className='text-gray-600'>{shippingAddress.city}</p>
          <p className='text-gray-600'>{shippingAddress.phone}</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>
            Customer Information
          </h3>
          <p className='text-gray-600'>
            <strong>Name:</strong> {user.name}
          </p>
          <p className='text-gray-600'>
            <strong>Email:</strong> {user.email}
          </p>
          <p className='text-gray-600'>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <div>
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>
            Order Summary
          </h3>
          <p className='text-gray-600'>
            <strong>Tax Price:</strong> ${taxPrice.toFixed(2)}
          </p>
          <p className='text-gray-600'>
            <strong>Shipping Price:</strong> ${shippingPrice.toFixed(2)}
          </p>
          <p className='text-gray-600'>
            <strong>Total Price:</strong> ${totalOrderPrice.toFixed(2)}
          </p>
          <p className='text-gray-600'>
            <strong>Payment Method:</strong> {paymentMethodType}
          </p>
          <p
            className={`text-sm font-semibold ${
              isPaid ? 'text-green-600' : 'text-red-600'
            }`}
          >
            Status: {isPaid ? 'Paid' : 'Not Paid'} /{' '}
            {isDelivered ? 'Delivered' : 'Not Delivered'}
          </p>
          <p className='text-gray-600'>
            <strong>Paid At:</strong> {new Date(paidAt).toLocaleDateString()}
          </p>
          <p className='text-gray-600'>
            <strong>Created At:</strong>{' '}
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className='border-t pt-6'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          Order Items
        </h3>
        <ul className='space-y-6'>
          {cartItems.map((item) => (
            <li key={item._id} className='flex items-center border-b pb-4'>
              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className='w-24 h-24 object-cover rounded-md mr-4'
              />
              <div className='flex-1'>
                <h4 className='text-lg font-bold text-gray-800'>
                  {item.product.title}
                </h4>
                <p className='text-gray-600'>
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className='text-gray-600'>
                  <strong>Quantity:</strong> {item.count}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
