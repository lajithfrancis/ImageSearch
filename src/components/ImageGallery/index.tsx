import { Photo } from "@/app/interfaces/SearchList";
import './styles.css';

export default function ImageGallery({ results }: { results: Photo[] }) {
    return (
        <div className="masonry">
            {results.map((item, index) => (
                <div key={index} className="masonry-brick">
                    <img src={item.src.large} alt={item.alt} className="image" />
                    {/* <p className="text-lg">{item.id}</p> */}
                </div>
            ))}
        </div>
    )
}