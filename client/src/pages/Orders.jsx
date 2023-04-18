import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { Table } from "../components";

const Orders = () => {
  const orderDataArray = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Super stunning concept art",
      price: 59.99,
      buyer: "John Doe",
      icon: <MdMessage />,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "An AI generated concept art",
      price: 120.99,
      buyer: "George Smith",
      icon: <MdMessage />,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "High quality digital character",
      price: 119.99,
      buyer: "Elisa May",
      icon: <MdMessage />,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Illustration hyper realistic painting",
      price: 59.99,
      buyer: "Sarah Taylor",
      icon: <MdMessage />,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Original ai generated digital art",
      price: 76.99,
      buyer: "Brendan Rogers",
      icon: <MdMessage />,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Text based ai generated art",
      price: 54.99,
      buyer: "Glen Cook",
      icon: <MdMessage />,
    },
  ];

  const [orderData, setOrderData] = useState(orderDataArray);

  const currentUser = {
    id: 1,
    username: "Jax Teller",
    isSeller: true,
  };

  return (
    <main className='select-none text-sage-900 mt-10'>
      <div className='max-w-7xl mx-auto px-3 py-4'>
        {/* top part  */}
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold'>Orders</h1>
        </div>
        {/* table  */}

        <Table orderData={orderData} isOrder isSeller={currentUser?.isSeller} />
      </div>
    </main>
  );
};

export default Orders;
