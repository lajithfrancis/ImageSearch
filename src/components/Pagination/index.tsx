import React, { useState, MouseEvent, ChangeEvent } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({ page, setPage }: {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}) {
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        // <TablePagination
        //     component="div"
        //     count={100}
        //     page={page}
        //     onPageChange={handleChangePage}
        //     rowsPerPage={rowsPerPage}
        //     onRowsPerPageChange={handleChangeRowsPerPage}
        // />
        <div className='flex gap-4 items-center'>
            <div className='flex gap-4 items-center'>
                <p>Page {page} or {100}</p>
                <button><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <div className='flex gap-4 items-center'>
                <p>Go to page</p>
                <input className='w-14 border' />
                <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>

        </div>
    );
}
