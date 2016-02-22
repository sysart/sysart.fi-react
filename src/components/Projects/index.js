import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

const PROJECTS = [{
  url: 'http://sysart.fi',
  name: 'Digitaaliset palvelut',
  about: 'Meillä hihat kääritään kainaloon asti kun kyseessä on digitaalinen palvelu',
}, {
  url: 'http://sysart.fi',
  name: 'Integraatiot',
  about: 'Kun useampi järjestelmä halutaan juttusille keskenään, tiedät kehen ottaa yhteyttä',
}, {
  url: 'http://sysart.fi',
  name: 'Sähköisen asioinnin alusta',
  about: 'Helpota asiakkaasi elämää ja tarjoa hänelle ratkaisu digitaalisena itsepalveluna. Niin tekee myös vero.fi',
}];

/* images */
const icons = [];
PROJECTS.map(project => icons.push(require(`./files/Landed.jpg`)));

export class Projects extends Component {
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">


          <div className="row">
          {
            PROJECTS.map((project, key) =>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center"
                key={key}
              >
                <a href={project.url}>
                  <img src={icons[key]} />
                </a>
                <h4>
                  {project.name}
                </h4>
                <p>
                  {project.about}
                </p>
                <a href={project.url}>
                  {project.url.replace('http://', '')}
                </a>
              </div>
            )
          }
          </div>

        </div>
      </section>
    );
  }
}
