import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { webdesigner } from '../data/data';


export default function Layout({ children }) {
    return(
     <>
     <header>
        <Header/>
     </header>
     <main>
         <div className="wrap">
            {children}
         </div>
     </main>
     <footer>
         <a href={webdesigner}><FontAwesomeIcon icon={faCopyright} />LovestreetDesign</a>
      </footer>
     </>
    )
 }