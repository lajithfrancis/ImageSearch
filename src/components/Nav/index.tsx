import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css'

export const Nav = () => {
    return (
        <nav className='flex items-center bg-black text-white p-4'>
          <h1 className="text-4xl font-bold text-start flex-1">My Image Search</h1>
          <ul className='flex gap-2'>
            <li><FontAwesomeIcon icon={faHeart}/> Lightboxes</li>
            <li><FontAwesomeIcon icon={faCartShopping}/> Cart</li>
            <li>Sign in</li>
          </ul>
        </nav>
    )
}