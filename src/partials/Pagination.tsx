import React from 'react';

type PaginationProps = {
    profilesPerPage: number;
    totalProfiles: number;
    handlePageChange: (x: number) => void;
    previousPage: () => void;
    nextPage: () => void;
    currentPage: number
  };

const Pagination = ({ profilesPerPage, totalProfiles, handlePageChange, previousPage, nextPage, currentPage }: PaginationProps) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
      pageNumbers.push(i);
   }
   return (
      <div className='float-right'>
         <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm mb-10 mt-10">
            <li onClick={previousPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
            </li>
            {pageNumbers.map((number) => (
               <li
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={currentPage === number
                    ? 'relative z-10 inline-flex items-center bg-[rgba(255,124,92,1)] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }
               >
                  {number}
               </li>
            ))}
            <li onClick={nextPage} className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
            </li>
         </ul>
      </div>
   );
};
 
export default Pagination;