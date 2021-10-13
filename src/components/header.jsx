import { Link, useLocation } from "react-router-dom"
import menuList from "../assets/menu.json"

export default function Header() {
    const currentLocation = useLocation()
    console.log(currentLocation)

    return (
        <header>
            <div className="section-inner">
                <Link to='/'>
                    <h1>
                        <span style={{color: 'var(--dash-yellow)'}}>-</span>dash
                    </h1>
                </Link>
                <ul className="header-menu">
                    {menuList.map((item, key)=>(
                        <Link key={key} to={item.Link}>
                            <li className={currentLocation.pathname == item.Link ? 'active' : 'inactive'}>{item.Name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </header>
    )
}
