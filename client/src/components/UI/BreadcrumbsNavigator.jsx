import React from "react";

const BreadcrumbsNavigator = ({ root, current }) => {
  return (
    <div className='capitalize text-sm font-medium text-sage-700'>
      {root + " > " + current}
    </div>
  );
};

export default BreadcrumbsNavigator;
