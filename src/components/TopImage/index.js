import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* utils */
import { setParallax } from '../../utils/parallax';

/* component styles */
import { styles } from './styles.scss';

export class TopImage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        setParallax(this.refs.parallax, 10);
    };

    render() {


        const { smallTitle, title } = this.props;

        let inlineStyle = {};
        let textColor = {};

        let shader;
        if(this.props.image){
            inlineStyle.backgroundImage = `url(${this.props.image})`;

            textColor.color = "#ffffff";

            shader = (
              <div className="bg-shade"></div>
            );
        } else {
            inlineStyle.height = 'auto';
        }

        // Call To Action
        let cta;
        if(this.props.cta){
            cta = (
                <div className="cta">
                    <a href={this.props.cta.url} target="_blank" className="cta-button">
                        {this.props.cta.text}
                    </a>
                </div>
            )
        }

        return (
            <section className={`${styles}`}  ref="parallax">
                <div className="container" style={inlineStyle}>
                    <div className="row">
                    { shader }
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <LoadingOrderAnimation animation="fade-in"
                                                   move="from-bottom-to-top"
                                                   distance={60}
                                                   speed={700}
                                                   wait={900}
                            >
                                <p className="small-title">
                                        {smallTitle}
                                </p>
                            </LoadingOrderAnimation>
                            <LoadingOrderAnimation animation="fade-in"
                                                   move="from-bottom-to-top"
                                                   distance={30}
                                                   speed={700}
                                                   wait={700}
                            >
                                <h1 style={textColor} className="title">
                                    {title}
                                    { cta }
                                </h1>

                                
                            </LoadingOrderAnimation>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
