import React, {Component} from 'react';
import {Link} from 'react-router';

/* component styles */
import {styles} from './styles.scss';

const sysartLogo = require('./files/logo.png');


export class Header extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            mobileMenuOpen: false
        }
    }

    toggleMobileMenu = () => {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen
        })
    };

    render() {

        let navClass = '';
        if(this.state.mobileMenuOpen){
            navClass = 'visible';
        }

        return (
            <header className={`${styles}`}>
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-2 col-md-3 col-lg-3 logo">
                            <Link to="/">
                                <img src={sysartLogo}/>
                            </Link>
                        </div>

                        <div className="visible-xs-block mobile-menu-toggler">
                            <i onClick={this.toggleMobileMenu} className="fa fa-bars"></i>
                        </div>

                        <div className="col-xs-12 col-sm-10 col-md-9 col-lg-9 mobile-nav">
                            <nav className={navClass}>
                                <Link to="/palvelut" activeClassName="active">
                                    Palvelut
                                </Link>
                                <Link to="/asiakkaat" activeClassName="active">
                                    Asiakkaat
                                </Link>
                                <Link to="/tyopaikat" activeClassName="active">
                                    Työpaikat
                                </Link>
                                <Link to="/me" activeClassName="active">
                                    Me
                                </Link>
                                <Link to="/blogi" activeClassName="active">
                                    Blogi
                                </Link>
                                <Link to="/yhteystiedot" activeClassName="active">
                                    Yhteystiedot
                                </Link>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}
