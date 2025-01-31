import { useDispatch, useSelector } from "react-redux";
import { countDown, countUp, removeFromBasket,selectTotalPrices } from "./basket.slice";

export const Basket = () => {
  const dispatch = useDispatch()
  const basketItems = useSelector((state) => state.basket?.items)
  const totalBasketPrice = useSelector(selectTotalPrices)

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-200 mb-6 text-center">
        Shopping Basket
      </h2>

      {basketItems.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">Your basket is empty.</p>
      ) : (
        <ul className="space-y-6">
          {basketItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-5 bg-gray-800 rounded-xl shadow-lg"
            >
              {console.log(item)}
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-lg font-semibold text-blue-200">{item.title}</p>
                  <p className="text-gray-400">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(countDown(item.id))}
                  className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  -
                </button>
                <span className="text-lg font-bold text-white">{item._count}</span>
                <button
                  onClick={() => dispatch(countUp(item.id))}
                  className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  +
                </button>
              </div>
              <p className="text-lg text-gray-300">${useSelector((state) => selectTotalPrices(state, item.id))}</p>


              <button
                onClick={() => dispatch(removeFromBasket(item.id))}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
