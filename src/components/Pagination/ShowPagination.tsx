import Pagination from ".";
import './styles.css';

export default function ShowPagination({ searchKey, textType = "h4" }: { searchKey: string, textType: keyof JSX.IntrinsicElements }) {
    const TextTag = textType;
    const isHidden = TextTag == 'h4';
    return (
        <div className='flex justify-between items-center px-4 pagination_bar'>
            <TextTag>{!isHidden && 'Search Results for: '}{searchKey} Stock photos and images</TextTag>
            <Pagination />
        </div>
    )
}