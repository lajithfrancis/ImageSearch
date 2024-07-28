import { Photo } from "@/app/interfaces/SearchList";
import './styles.css';
import ImageCard from "./ImageCard";

export default function ImageGallery({ results }: { results: Photo[] }) {
    return (
        <div className="masonry">
            {results.map((item, index) => (
                <ImageCard key={index} index={index} item={item} />
            ))}
        </div>
    )
}