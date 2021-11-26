
const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <div className="pagination">
            <button
                className="pagination-first-page"
                disabled={page === 1} onClick={() => setPage(1)}>
                | &lt;
            </button>
            <button
                className="pagination-previous-page"
                disabled={page === 1}
                onClick={() => setPage(Math.max(1, page - 1))}
            >
                &lt;
            </button>
            <span>
                Page <strong>{page}</strong> of <strong>{totalPages}</strong>
            </span>
            <button
                className="pagination-next-page"
                disabled={page === totalPages}
                onClick={() => setPage(Math.min(totalPages, page + 1))}
            >
                &gt;
            </button>
            <button
                className="pagination-last-page"
                disabled={page === totalPages}
                onClick={() => setPage(totalPages)}
            >
                &gt; |
            </button>
        </div>
    );
};

export default Pagination;
