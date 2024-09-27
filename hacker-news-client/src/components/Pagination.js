import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex space-x-4 mt-4">
            <button
                onClick={handlePrevious}
                className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 cursor-pointer transition duration-200"
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="self-center">{currentPage} / {totalPages}</span>
            <button
                onClick={handleNext}
                className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 cursor-pointer transition duration-200"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
