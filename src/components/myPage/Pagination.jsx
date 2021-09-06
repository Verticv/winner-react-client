import React from 'react'
import ReactPaginate from 'react-paginate';
import LeftIcon from '../../images/myPage/betHistory/left.png'
import RightIcon from '../../images/myPage/betHistory/right.png'
import DoubleLeftIcon from '../../images/myPage/betHistory/double_left.png'
import DoubleRightIcon from '../../images/myPage/betHistory/double_right.png'
import './Pagination.css'

const Pagination = ({page, setPage}) => {

    const LeftArrow = () => (
        <img src={LeftIcon} alt="arrow" />
    )
    const RightArrow = () => (
        <img src={RightIcon} alt="arrow" />
    )

    return (
        <div className="relative flex w-297px h-32px mb-60px items-center justify-center">
                <img className="absolute left-0 -ml-10px cursor-pointer h-32px object-none" src={DoubleLeftIcon} alt="" onClick={() => setPage(0)} />
                <ReactPaginate
                    activeClassName={'item active font-roboto w-32px h-32px'}
                    breakClassName={'item'}
                    breakLabel={'...'}
                    containerClassName={'pagination'}
                    disabledClassName={'disabled-page'}
                    marginPagesDisplayed={5}
                    nextClassName={"item next "}
                    nextLabel={<RightArrow />}
                    onPageChange={(selected) => {
                        var s = JSON.stringify(selected.selected);
                        var d = JSON.parse(s);
                        setPage(d); 
                    }}
                    pageCount={5}
                    pageClassName={'item pagination-page font-roboto'}
                    pageRangeDisplayed={5}
                    previousClassName={"previous"}
                    previousLabel={<LeftArrow />}
                    initialPage={0}
                    forcePage={page}
                    pageLinkClassName="p-10px"
                />
                <img className="absolute right-0 -mr-10px cursor-pointer h-32px object-none" src={DoubleRightIcon} alt="" onClick={() => setPage(4)} />
            </div>
    )
}

export default Pagination
