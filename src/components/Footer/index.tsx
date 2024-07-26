import './styles.css'

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full p-4">
            <div className="flex flex-col text-center">
                <p className="bg-green-500 py-2">366,681,625 stock photos, 360 panoramic images, vectors and videos</p>
                <div className="bg-black text-white py-4">
                    <h2>My Image Search</h2>
                    <p>Changing the world one image at a time</p>
                </div>
            </div>
        </footer>
    )
}