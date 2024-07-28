import Pagination from ".";
import './styles.css';

export default function ShowPagination({ searchKey, textType = "h4", page, setPage, count, totalPages }:
    {
        searchKey: string,
        textType: keyof JSX.IntrinsicElements,
        page: number,
        setPage: React.Dispatch<React.SetStateAction<number>>,
        count: number,
        totalPages: number
    }) {
    const TextTag = textType;
    const isHidden = TextTag == 'h4';
    return (
        <div className='flex justify-between items-center px-4 pagination_bar'>
            <TextTag>{!isHidden && 'Search Results for: '}{searchKey} Stock photos and images</TextTag>
            <Pagination page={page} setPage={setPage} isHidden={isHidden} count={count} totalPages={totalPages} />
        </div>
    )
}