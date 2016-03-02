import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/employees';

// UI
import Meters from 'components/Meters';

import { TopImage } from 'components/TopImage';
import Contributors from 'components/Contributors';
import WpContent from 'components/WpContent';
import WpTitle from 'components/WpTitle';

import Employee from 'components/Employee';

import { styles } from './styles.scss';

/* Component */
@connect(
    state => ({
        employees: state.employees.employeeList
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class EmployeesPage extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentDidMount(){

    }

    componentWillMount(){
        console.log('emp list componentWillMount', this);
        const { dispatch, fetchEmployeeList } = this.props;

        fetchEmployeeList();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }

    render() {
        console.log('render emp page ', this);

        const { employees } = this.props;


        return (
            <div className={styles}>


                <div className="container">
    				<div className="row">
    					<div className="col-md-10 col-md-offset-1">
                            {
                                employees.map((employee) => {
                                    return (
                                        <div className="col-sm-3">
                                            <Employee employee={employee} layout="vertical" />
                                        </div>
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
