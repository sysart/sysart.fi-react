import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

const sysartLogo = require('./files/logo.png');


export class Header extends Component {
  render() {
    return (
      <header className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">
              <Link to="/">
                <img src={sysartLogo} />
              </Link>
            </div>

            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <nav>
                <Link to="/home" activeClassName="active">
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
                <Link to="/list" activeClassName="active">
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
