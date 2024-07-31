import GeeksFoodLogo from '../../assets/GeeksFoodLogo.svg'
import './Nav.css'
import Button from '../Button/button.jsx';
import ApnaLink from './ApnaLink.jsx'

function NavSection(){
   return  <>
    <div className="nav-container">
    <div className="main-logo">
        <img src={GeeksFoodLogo} />
        
        <h2>GeeksFoods</h2>
    </div>
     <div>
        <ul className="list-items">
            <li><ApnaLink href="/">Home</ApnaLink></li>
            <li> <ApnaLink href="/Quote">Quote</ApnaLink></li>
            <li> <ApnaLink href="/Restaurant">Restaurants</ApnaLink></li>
            <li> <ApnaLink href="/Foods">Foods</ApnaLink></li>
            <li> <ApnaLink href="/Contact">Contact</ApnaLink></li>
        </ul>
     </div>
     <Button BtnName="Get Started"/>
    </div>
    

    </>
}
export default NavSection;