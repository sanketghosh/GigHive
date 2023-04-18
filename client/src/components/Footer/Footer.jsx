import React from "react";
// importing images
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { BiBody } from "react-icons/bi";

const footerData = [
  {
    colId: 1,
    columnName: "Categories",
    columnText: [
      {
        id: 1,
        text: "Graphics & Design",
      },
      {
        id: 2,
        text: "Digital marketing",
      },
      {
        id: 3,
        text: "Writing & Translation",
      },
      {
        id: 4,
        text: "Video & Animation",
      },
      {
        id: 5,
        text: "Music & Audio",
      },
      {
        id: 6,
        text: "Programming & Tech",
      },
      {
        id: 7,
        text: "Data",
      },
      {
        id: 8,
        text: "Business",
      },
      {
        id: 9,
        text: "Lifestyle",
      },
      {
        id: 10,
        text: "Photography",
      },
      {
        id: 11,
        text: "Sitemap",
      },
    ],
  },
  {
    colId: 2,
    columnName: "About",
    columnText: [
      {
        id: 12,
        text: "Press & News",
      },
      {
        id: 13,
        text: "Partnerships",
      },
      {
        id: 14,
        text: "Privacy Policy",
      },
      {
        id: 15,
        text: "Terms of Service",
      },
      {
        id: 16,
        text: "Intellectual Property Claims",
      },
      {
        id: 17,
        text: "Investor Relations",
      },
      {
        id: 18,
        text: "Contact Sales",
      },
    ],
  },
  {
    colId: 3,
    columnName: "Support",
    columnText: [
      {
        id: 19,
        text: "Help & Support",
      },
      {
        id: 20,
        text: "Trust & Safety",
      },
      {
        id: 21,
        text: "Selling on gigger",
      },
      {
        id: 22,
        text: "Buying on gigger",
      },
    ],
  },
  {
    colId: 4,
    columnName: "Community",
    columnText: [
      {
        id: 1,
        text: "Customer Success Stories",
      },
      {
        id: 2,
        text: "Community hub",
      },
      {
        id: 3,
        text: "Forum",
      },
      {
        id: 4,
        text: "Events",
      },
      {
        id: 5,
        text: "Blog",
      },
      {
        id: 6,
        text: "Influencer",
      },
      {
        id: 7,
        text: "Affiliates",
      },
      {
        id: 8,
        text: "Podcast",
      },
      {
        id: 9,
        text: "Invite a Friend",
      },
      {
        id: 10,
        text: "Become a Seller",
      },
      {
        id: 11,
        text: "Community Standards",
      },
    ],
  },
  {
    colId: 5,
    columnName: "More From GigHive",
    columnText: [
      {
        id: 23,
        text: "GigHive Business",
      },
      {
        id: 24,
        text: "GigHive Pro",
      },
      {
        id: 25,
        text: "GigHive Logo Maker",
      },
      {
        id: 26,
        text: "GigHive Guides",
      },
      {
        id: 27,
        text: "Get Inspired",
      },
      {
        id: 28,
        text: "GigHive Select",
      },
      {
        id: 29,
        text: "ClearVoice",
      },
      {
        id: 30,
        text: "GigHive Workspace",
      },
      {
        id: 31,
        text: "Learn",
      },
      {
        id: 32,
        text: "Working Not Working",
      },
    ],
  },
];

const footerBottomIconsData = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
  },
  {
    id: 2,
    icon: <FaInstagramSquare />,
  },
  {
    id: 3,
    icon: <FaTwitterSquare />,
  },
  {
    id: 4,
    icon: <FaPinterestSquare />,
  },
  {
    id: 5,
    icon: <FaLinkedin />,
  },
  {
    id: 6,
    icon: <FaGlobe />,
    text: "English",
  },
  {
    id: 7,
    icon: <HiCurrencyRupee />,
    text: "INR",
  },
  {
    id: 8,
    icon: <BiBody />,
  },
];

function FooterBottom() {
  return (
    <section className='select-none bg-sage-900 text-sage-600'>
      <div className='max-w-7xl mx-auto px-3 py-5 justify-between flex items-center flex-col md:flex-row gap-7 md:gap-0'>
        <div className='flex flex-col sm:flex-row items-center gap-3'>
          <h2 className='font-rowdies cursor-pointer text-3xl md:text-2xl'>
            GigHive
          </h2>
          <span className='text-xs'>
            &copy; GigHive International. India 2023
          </span>
        </div>
        <div className='flex items-center gap-3'>
          {footerBottomIconsData.map((data) => {
            return (
              <span
                key={data.id}
                className='text-sm md:text-lg lg:text-xl flex items-center gap-1 cursor-pointer'>
                {data.icon}
                <span className='text-xs'>{data.text}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SingleColumnMenuItems({ data }) {
  return (
    <div className='flex flex-col gap-1 md:gap-2'>
      {data.map((data) => {
        return (
          <span
            key={data.id}
            className='text-[10px] sm:text-xs cursor-pointer capitalize'>
            {data.text}
          </span>
        );
      })}
    </div>
  );
}

function FooterColumn() {
  return (
    <>
      {footerData.map((data) => {
        return (
          <div key={data.colId} className=''>
            <h2 className='text-sm md:text-base font-semibold mb-2 md:mb-4'>
              {data.columnName}
            </h2>
            <SingleColumnMenuItems data={data.columnText} />
          </div>
        );
      })}
    </>
  );
}

const Footer = () => {
  return (
    <>
      <footer className='bg-sunset-400 mt-4'>
        <div className='max-w-7xl mx-auto px-3 py-4 md:py-8'>
          {/* top part  */}

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-7 text-sage-900 md:justify-items-center'>
            <FooterColumn />
          </div>

          {/* bottom part  */}
        </div>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
