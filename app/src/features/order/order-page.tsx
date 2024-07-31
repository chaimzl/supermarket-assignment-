import { OrderForm } from "./order-form";
import OrderList from "./order-list";

export const OrderPage = () => {
  return (
    <>
      <div className="flex flex-row p-10">
        <div className="w-3/6 p-8">
          <OrderList />
        </div>
        <div className=" w-3/6">
          <OrderForm />
        </div>
      </div>
    </>
  );
};
