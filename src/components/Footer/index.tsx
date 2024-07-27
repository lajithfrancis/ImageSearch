import './styles.css'
import StaticText from '@/config/static'
export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex flex-col text-center">
                <p className="bg-green-500 py-2">{StaticText.footerMessage}</p>
                <div className="bg-black text-white py-4">
                    <h2>{StaticText.projectName}</h2>
                    <p>{StaticText.footerCaption}</p>
                </div>
            </div>
        </footer>
    )
}