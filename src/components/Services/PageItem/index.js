import React, {Component, PropTypes} from 'react';

export class ServicePageItem extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        console.log('Render service page item', this);

        const {item} = this.props;
        const {description, title, image} = item;


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
                <div className="col-md-6">
                    <img src={image}/>
                </div>
            )
        ];

        let template = (
            <div className="row">
                {parts[0]}
                {parts[1]}
            </div>
        );

        if(this.props.layout === 'even'){
            template = (
                <div className="row">
                    {parts[1]}
                    {parts[0]}
                </div>
            );
        }

        return (
            <div className="col-xs-12">
                {template}
            </div>
        )
    }
}
