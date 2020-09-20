import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import style from './style.module.css'
const Pagination = ({ products, setCurrentSelect, perPage, setPerPage }) => {

    const [pageCount, setPageCount] = useState(0);

    const changePerPage = (val) => {
        console.log()
        setPerPage(+val.target.value)
    }

    const handlePageClick = (data) => {

        const currentValue = (+data.selected * perPage);
        setCurrentSelect(products.slice(currentValue, currentValue + perPage));
        console.log(currentValue)
    };

    useEffect(() => {
        setPageCount(Math.ceil(products.length / perPage));
    }, [products, perPage, setCurrentSelect])
  
    return (
        <div className='text-center mt-5'>

            <ReactPaginate
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount} //this.state.pageCount
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick} //
                containerClassName={'pagination'}
                subContainerClassName={'pages-item'}
                activeClassName={'active'}
            />
            <div className={style.options}>
                <Form.Label>Products per page</Form.Label>
                <Form.Control
                    onChange={(e) => changePerPage(e)}
                    as="select">
                    <option >5</option>
                    <option>10</option>
                    <option>20</option>
                </Form.Control>
            </div>



        </div>
    )
}

export default Pagination
