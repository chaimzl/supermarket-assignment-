import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const OrderList = () => {
    const orderedList = useSelector((state: RootState) =>
        state?.cart?.data
      );

  return (
    <ul className=" me-6    divide-gray-200 dark:divide-gray-700">
        {orderedList?.map(x=> <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={x.imageUrl}
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {x.title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
           {x.description}
          </p>
        </div>
        <div className="flex-3 min-w-0">
          <small className="font-medium text-gray-500  truncate dark:text-white">
            {x.count} פריטים
          </small>
          
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        ₪${(x.count ||0) * x.price}
        </div>
      </div>
    </li>)}
  
  </ul>
  )
}

export default OrderList