import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>

      <Title
        title='My Bookings'
        subtitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.'
        align='left'
      />

      <div className='max-w-6xl mt-8 w-full text-gray-800'>

        {/* Table Header */}
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* Bookings */}
        {bookings.map((booking) => (

          <div
            key={booking._id}
            className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6'
          >

            {/* Hotel Details */}
            <div className='flex flex-col md:flex-row gap-4'>

              {/* Hotel Image */}
              <img
                src={booking.room.images[0]}
                alt='hotel-img'
                className='md:w-44 h-32 md:h-28 rounded shadow object-cover'
              />

              {/* Hotel Information */}
              <div className='flex flex-col gap-1.5 max-md:mt-1'>

                <p className='text-xl font-medium'>
                  {booking.hotel.name}

                  <span className='font-inter text-sm font-normal ml-2'>
                    {booking.room.roomType}
                  </span>
                </p>

                {/* Location */}
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img
                    src={assets.locationIcon}
                    alt='location-img'
                    className='w-4 h-4'
                  />

                  <span>{booking.hotel.address}</span>
                </div>

                {/* Guests */}
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img
                    src={assets.guestsIcon}
                    alt='guests-img'
                    className='w-4 h-4'
                  />

                  <span>{booking.guests} Guests</span>
                </div>

                {/* Total */}
                <p className='text-sm font-medium mt-1'>
                  Total: ${booking.totalPrice}
                </p>

              </div>
            </div>

            {/* Date & Timings */}
            <div className='flex flex-col gap-2 max-md:mt-5 md:justify-center'>

              <div>
                <p className='text-sm font-medium'>
                  Check-in
                </p>

                <p className='text-sm text-gray-500'>
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>

              <div>
                <p className='text-sm font-medium'>
                  Check-out
                </p>

                <p className='text-sm text-gray-500'>
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>

            </div>

            {/* Payment */}
            <div className='flex flex-col gap-2 max-md:mt-5 md:justify-center'>

              <p className='text-sm font-medium'>
                ${booking.totalPrice}
              </p>

              {/* Payment Status */}
              <span
                className={`w-fit px-3 py-1 rounded-full text-xs ${
                  booking.isPaid
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-red-600'
                }`}
              >
                {booking.isPaid ? 'Paid' : 'Unpaid'}
              </span>

              {/* Pay Now Button */}
              {!booking.isPaid && (
                <button
                  className='w-fit px-4 py-2 mt-1 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition'
                  onClick={() => {
                    console.log('Paying for booking:', booking._id)
                  }}
                >
                  Pay Now
                </button>
              )}

            </div>

          </div>

        ))}

      </div>
    </div>
  )
}

export default MyBookings 