import React from 'react';

import Employee from 'components/employee';

const Contributors = ({contributors}) => {

    return (
        <div className="container">
            <div className="row">
                {
                    contributors.map((contributor, key) => {
                        return (
                            <div className="col-sm-6">
                                <Employee key={'emp-' + key} employee={contributor} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default Contributors
