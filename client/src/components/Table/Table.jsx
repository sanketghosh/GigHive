import React from "react";
import TableBody from "./TableBody";

const Table = ({ myGigData, isOrder, orderData, isSeller }) => {
  const tableHeadData = [
    {
      id: 1,
      text: "Images",
    },
    {
      id: 2,
      text: "Title",
    },
    {
      id: 3,
      text: "Price",
    },
    {
      id: 4,
      text: isOrder ? (isSeller ? "Seller" : "Buyer") : "Orders",
    },
    {
      id: 5,
      text: isOrder ? "Contact" : "Action",
    },
  ];

  return (
    <div className='flex items-center justify-center mt-4'>
      <div className='cols-span-12'>
        <div className='overflow-auto lg:overflow-visible '>
          <table className='table text-sage-900 border-separate space-y-6 text-sm'>
            <thead className='bg-sage-300 text-sage-900'>
              <tr>
                {tableHeadData.map((data) => (
                  <th
                    className='p-3 text-center font-semibold text-base'
                    key={data.id}>
                    {data.text}
                  </th>
                ))}
              </tr>
            </thead>
            {isOrder ? (
              <tbody>
                {orderData.map((data) => (
                  <TableBody
                    key={data.id}
                    title={data.title}
                    image={data.image}
                    price={data.price}
                    buyer={data.buyer}
                    icon={data.icon}
                    isOrder
                  />
                ))}
              </tbody>
            ) : (
              <tbody>
                {myGigData.map((data) => (
                  <TableBody
                    key={data.id}
                    title={data.title}
                    image={data.image}
                    orders={data.orders}
                    price={data.price}
                    icon={data.icon}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
