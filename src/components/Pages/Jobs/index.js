import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/jobs';

// UI
import Meters from 'components/Meters';

import { TopImage } from 'components/TopImage';
import Contributors from 'components/Contributors';
import WpContent from 'components/WpContent';
import WpTitle from 'components/WpTitle';


import SingleJob from 'components/SingleJob';

import { styles } from './styles.scss';

/* Component */
@connect(
    state => ({
        jobs: state.jobs,
        page_content: state.jobs.jobPage
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class JobsPage extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentDidMount(){

    }

    componentWillMount(){
        console.log('emp list componentWillMount', this);
        const { dispatch, fetchJobList } = this.props;

        fetchJobList();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }

    render() {
        console.log('render jobs page ', this);


        const { jobItems } = this.props.jobs;
        const { page_content } = this.props;


        return (
            <div className={styles}>


                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1" >
                          <h1>
                            { page_content.title }
                          </h1>
                          <div dangerouslySetInnerHTML={{__html:page_content.content}}></div>
                        </div>

                        <div className="col-md-4">
                            <img className="content-image" src={ page_content.image} />
                        </div>
                    </div>


    				<div className="row">
    					<div className="col-md-10 col-md-offset-1">
                            <h1>
                                Avoimet työpaikat
                            </h1>
                            {
                                jobItems.map((item, index) => {
                                    return (
                                        <SingleJob key={index} item={item} />
                                    )
                                })
                            }
    					</div>
    				</div>
    			</div>



            </div>
        )


    }
}
