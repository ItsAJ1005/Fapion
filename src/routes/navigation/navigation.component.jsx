import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as FapionLogo } from '../../assets/logo.svg';
import './navigation.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <FapionLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;