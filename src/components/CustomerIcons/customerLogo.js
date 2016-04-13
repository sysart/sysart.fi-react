import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export class CustomerLogo extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            hover: false
        }
    }

    onMouseEnter = () => {
        this.setState({
            hover: true
        });
    };

    onMouseLeave = () => {
        this.setState({
            hover: false
        });
    };

    render() {
        const { logo, logo_hover, slug, link_reference } = this.props.item;
        console.log('Customer logo', this.props);

        let image = (
            <img src={logo} />
        );

        if(this.state.hover){
            if(logo_hover){
                image = (<img src={logo_hover} />)
            }

        }

        if(link_reference){
            return (
                <Link to={'asiakkaat/' + slug} activeClassName="active">
                    <div
                        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center customer-logo"
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        {image}
                    </div>
                </Link>
            )
        }else{
            return (
                <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center customer-logo"
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    {image}
                </div>
            )
        }


    }
}
