import ReactPaginate from "react-paginate";

const Pagination = () => {

    /*const handlePageClick = (page) => {
        setPage(page);
    }*/

    return (
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            //pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            //onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
}

export default Pagination;