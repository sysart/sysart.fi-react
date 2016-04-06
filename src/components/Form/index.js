import React from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions/form';

import { styles } from './styles.scss';

@connect(
    state => state.forms,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Form extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            fields: {}
        }
    }

    componentWillMount(){
        console.log('From componentWillMount', this);
        const { dispatch, fetchForm } = this.props;

        fetchForm(this.props.formid);
    }

    sendForm = () => {
        console.log('send Form');

        request
            .post('http://185.26.50.90:8080/wp-json/sysart-extend/v1/form')
            .withCredentials()
            .send(
                {
                    fields: this.state.fields,
                    id: this.props.formid
                }
            )
            .end(function(err, res){
                console.log('Response', err,res);
            });
    };

    onFieldChange = (field, event) => {
        console.log('onFieldChange', field, event);

        let updated = {};
        updated['input_' + field.id] = event.target.value;

        this.setState({
            fields: Object.assign(
                {},
                this.state.fields,
                updated

            )
        })
    };

    render(){

        console.log('RENDER FORM', this);


        const { forms, formid } = this.props;

        if(forms.has(formid)){

            const _form = forms.get(formid);

            console.log('FOUND FORM', _form);


            return (
                <section className={`${_form.cssClass} ${styles}`}>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 form">
                                <h3>{_form.title}</h3>
                                <p>
                                    {_form.description}
                                </p>

                                {
                                    _form.fields.map((field, key) => {
                                        console.log('FIELD', field);

                                        let value = "";
                                        if(this.state.fields['input_' + field.id]){
                                            value = this.state.fields['input_' + field.id];
                                        }

                                        return (
                                            <input
                                                key={key}
                                                placeholder={field.label}
                                                onChange={this.onFieldChange.bind(this, field)}
                                                value={value}
                                                type={field.type}
                                            />
                                        )
                                    })
                                }


                                <button className="submit" onClick={this.sendForm}>
                                    { _form.button.text} <i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                    </div>


                </section>
            )
        }else{
            return (
                <div></div>
            )
        }


    }
}