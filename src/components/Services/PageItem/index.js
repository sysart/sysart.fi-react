import React, {Component, PropTypes} from 'react';

import { styles } from './styles.scss';

export class ServicePageItem extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        console.log('Render service page item', this);

        const {item} = this.props;
        const {description, title, image, icons} = item;


        // Setup template parts
        const parts = [
            (
                <div className="col-md-6">
                    <h3>
                        {title}
                    </h3>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                </div>
            ),
            (
                <div className="col-md-6 one-image">
                    <img src={image}/>
                </div>
            )
        ];


        // Set default layout order
        let template = (
            <div className="row">
                {parts[0]}
                {parts[1]}
            </div>
        );

        // if even item reverse order
        if(this.props.layout === 'even'){
            template = (
                <div className="row">
                    {parts[1]}
                    {parts[0]}
                </div>
            );
        }

        return (

            <div className="service-wrapper">
                <div className="container">
                    <div className="row">

                        <div className={`col-xs-12 ${styles}`}>
                            {template}

                            <div className="row icon-row">
                                {
                                    icons.map((icon, index) => {
                                        return (
                                            <div key={index} className="icon">
                                                <img src={icon.image} alt=""/>
                                                <p>
                                                    {icon.text}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            

        )
    }
}
