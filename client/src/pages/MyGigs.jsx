import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Table } from "../components";

const MyGigs = () => {
  const tableDataArray = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Stunning concept art",
      price: 59.99,
      orders: 13,
      icon: <MdDelete />,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Ai generated concept art",
      price: 120.99,
      orders: 41,
      icon: <MdDelete />,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "High quality digital character",
      price: 119.99,
      orders: 34,
      icon: <MdDelete />,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Illustration hyper realistic painting",
      price: 59.99,
      orders: 13,
      icon: <MdDelete />,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Original ai generated digital art",
      price: 76.99,
      orders: 32,
      icon: <MdDelete />,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Text based ai generated art",
      price: 54.99,
      orders: 14,
      icon: <MdDelete />,
    },
  ];

  const [tabData, setTabData] = useState(tableDataArray);

  return (
    <main className='select-none text-sage-900 mt-10'>
      <div className='max-w-7xl mx-auto px-3 py-4'>
        {/* top part  */}
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold'>My Gigs</h1>
          <Link to='/'>
            <button className='text-xs bg-sage-800 transition hover:bg-sage-900 p-2.5 rounded-sm text-sage-200'>
              Add New Gig
            </button>
          </Link>
        </div>
        {/* table  */}
        <Table myGigData={tabData} />
      </div>
    </main>
  );
};

export default MyGigs;
