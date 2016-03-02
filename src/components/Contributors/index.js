import React from 'react';

import Employee from 'components/employee';

const Contributors = ({contributors}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    {
                        contributors.map((contributor, key) => {
                            return (
                                <div className="col-sm-6">
                                    <Employee key={'emp-' + key} employee={contributor} layout="horizontal" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}


export default Contributors
