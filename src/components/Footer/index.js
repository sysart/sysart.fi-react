import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

let codelogo = require('./files/koodiasuomesta.png');
let twitterlogo = require('./files/twitter.png');

export class Footer extends Component {

  render() {
    return (
      <footer className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <h4>Helsinki</h4>
                    <p>Itämerenkatu 5, 00180, Helsinki</p>
                    <p>040 123 1234</p>

                    <h4>Oulu</h4>
                    <p>Yrttipellontie 1B, 90230, Oulu</p>
                    <p>040 123 1234</p>

                    <h4>Asiakaspalvelu sopimusasiakkaille</h4>
                    <p>+358 123 1321</p>
                    <p>helpdesk@sysart.fi</p>
                </div>
            </div>
            <div className="col-xs-12 col-sm-4 social-quote">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <img src={twitterlogo} />
                    <p>Joku twitter päivitys, joka on yllättävän pitkä ollakseen twitterpäivitys ja se vaan jatkuu #nakkijuna</p>
                    </div>
            </div>
            <div className="col-xs-12 col-sm-4 footer-logo">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <img src={codelogo} />
                </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
