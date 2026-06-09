import { useState } from 'react'
import { pizzaData } from '../data/pizzaData'
import { useAuth } from '../context/AuthContext'
const Home = () => {
  const { user } = useAuth()
  console.log(user, 'user')
  const [userOrder, setUserOrder] = useState({
    userName: user.name,
    pizzas: [
      // { pizza: name,
      // toppings : toppings,
      // price: price
      //quantity: quantity}
    ],
    total: 0,
  })

  const handleAddToCart = (e, name, price) => {
    e.preventDefault()
    setUserOrder((prev) => {
      return {
        ...prev,
        pizzas: [
          ...prev.pizzas,
          {
            pizza: name,
            price,
            quantity: 1,
          },
        ],
        total: prev.total + price,
      }
    })
  }

  const increaseQuantity = (e, name, price) => {
    e.preventDefault()
    setUserOrder((prev) => {
      return {
        ...prev,
        pizzas: prev.pizzas.map((item) =>
          item.pizza === name ? { ...item, quantity: item.quantity + 1 } : item,
        ),
        total: prev.total + price,
      }
    })
  }

  const decreaseQuantity = (e, name, price) => {
    e.preventDefault()
    setUserOrder((prev) => {
      const updatedPizzas = prev.pizzas
        .map((item) =>
          item.pizza === name
            ? {
                ...item,
                quantity:
                  item.quantity >= 1 ? item.quantity - 1 : item.quantity,
              }
            : item,
        )
        .filter((item) => item.quantity > 0)

      return {
        ...prev,
        pizzas: updatedPizzas,
        total: prev.total - price,
      }
    })
  }

  // console.log(userOrder, 'userOrder')

  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-400 text-white'>
        <div className='mx-auto max-w-7xl px-6 py-20 text-center'>
          <h1 className='mb-4 text-5xl font-extrabold md:text-6xl'>
            Mario's Pizza 🍕
          </h1>

          <p className='mx-auto max-w-2xl text-lg md:text-xl'>
            Fresh ingredients, handcrafted dough, and delicious pizzas delivered
            right to your doorstep.
          </p>

          <button
            aria-label='Browse pizza menu'
            className='mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition hover:scale-105 hover:shadow-lg'
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* Pizza Gallery */}
      <section className='mx-auto max-w-7xl px-6 py-10'>
        <div className='mb-10 text-center'>
          <h2 className='text-4xl font-bold text-gray-900'>Popular Pizzas</h2>
          <p className='mt-3 text-gray-600'>
            Choose your favorite pizza and add it to your cart.
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {pizzaData.map((pizza) => (
            <article
              key={pizza.id}
              className='overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                src={pizza.image}
                alt={`${pizza.name} pizza`}
                className='h-60 w-full object-cover'
              />

              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {pizza.name}
                </h3>

                <p className='mt-3 text-gray-600'>{pizza.description}</p>

                <div className='mt-6 flex items-center justify-between'>
                  <span className='text-2xl font-bold text-red-600'>
                    ₹{pizza.price}
                  </span>
                  {
                    // userOrder?.pizzas?.find(
                    //   (item) => item.pizza === pizza.name,
                    // ) &&
                    userOrder?.pizzas?.find(
                      (item) =>
                        item.pizza === pizza.name && item.quantity !== 0,
                    ) ? (
                      <div className='flex items-center gap-1'>
                        <button
                          onClick={(e) =>
                            decreaseQuantity(e, pizza.name, pizza.price)
                          }
                          aria-label={`Decrease quantity of `}
                          className='flex h-6 w-6 items-center justify-center rounded-md border hover:bg-gray-100'
                        >
                          -
                        </button>

                        {userOrder?.pizzas?.map(
                          (item, index) =>
                            item.pizza === pizza.name && (
                              <span
                                key={index}
                                className='min-w-6 text-center font-medium'
                              >
                                {item.quantity}
                              </span>
                            ),
                        )}

                        <button
                          onClick={(e) =>
                            increaseQuantity(e, pizza.name, pizza.price)
                          }
                          className='flex h-6 w-6 items-center justify-center rounded-md border hover:bg-gray-100'
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        aria-label={`Add ${pizza.name} to cart`}
                        onClick={(e) =>
                          handleAddToCart(e, pizza.name, pizza.price)
                        }
                        className='rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700'
                      >
                        Add to Cart
                      </button>
                    )
                  }
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cart Summary */}
      <section className='border-t bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-12'>
          <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900'>Cart Summary</h2>

              <p className='mt-2 text-gray-600'>Items in Cart: 2</p>
            </div>

            <div className='w-full rounded-xl border bg-gray-50 p-6 md:max-w-md'>
              <p className='text-center text-gray-500'>Your cart is empty.</p>
              <>
                <ul className='space-y-3'>
                  {/* {cart.map((item, index) => (
                    <li
                      key={`${item.id}-${index}`}
                      className='flex items-center justify-between'
                    >
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))} */}
                </ul>

                <div className='mt-6 border-t pt-4'>
                  <div className='flex items-center justify-between text-lg font-bold'>
                    <span>Total</span>
                    <span>₹399</span>
                  </div>

                  <button
                    aria-label='Proceed to checkout'
                    className='mt-4 w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700'
                  >
                    Checkout
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
