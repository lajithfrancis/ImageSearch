import { Photo } from "@/app/interfaces/SearchList"
import { faCartShopping, faDownload, faPlus, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageCard({ index, item }: {
    index: number,
    item: Photo
}) {
    const iconStyleClasses = 'relative p-4 rounded bg-gray-800 text-white icon';
    const downloadImage = async () => {
        const imageUrl = item.src.original;
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${item.id}`); // Filename for the downloaded image
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the image:', error);
        }
    };

    return (
        <div key={index} className="masonry-brick">
            <img src={item.src.large} alt={item.alt} title={item.alt} className="image" />
            <p className="text-sm text-white relative left-2 bottom-8 w-fit name"><b>Photographer: </b>{item.photographer}</p>
            <div className="icon_list">
                <FontAwesomeIcon className={iconStyleClasses} icon={faCartShopping} />
                <a onClick={downloadImage}><FontAwesomeIcon className={iconStyleClasses} icon={faDownload} /></a>
                <FontAwesomeIcon className={iconStyleClasses} icon={faPlus} />
                <FontAwesomeIcon className={iconStyleClasses} icon={faImages} />
            </div>
        </div>
    )
}