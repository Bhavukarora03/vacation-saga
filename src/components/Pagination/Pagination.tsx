import React, { FC } from "react";
import { Link } from "react-router-dom";


const Pagination = ({postsPerPage, totalPosts,paginate}) =>{
  //let postsPerPage=10;
//let totalPosts=600;
 const pageNumbers=[];
   for (let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
    
   }
   const anchortagstyle={
     'cursor':'pointer',
     'background-color':'#f5a655',
      'color':'#fff',
   }
  return (
    <div class="flex mt-16 justify-center items-center">
      <nav class="nc-Pagination inline-flex space-x-1 text-base font-medium ">
    {pageNumbers.map(number =>(
    <a
    key={number}
    onClick={() => paginate(number) }
    class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
    style={anchortagstyle}
  >
    
    {number}
  </a>
  
  ))}
  </nav>
  </div>
  )

}

export default Pagination;
