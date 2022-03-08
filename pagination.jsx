const Pagination = ({ items, pageSize, onPageChange }) => {
    const { Button } = ReactBootstrap;
    if (items.length <= 1) return null;

    let num = Math.ceil(item.length / pageSize); 
    let pages = range(1, num +1);
    const list = pages.map(page => {
        return (
            <Button key={page} onClick={onPageChange} className="page-item">{page}</Button>
        );
    });
}