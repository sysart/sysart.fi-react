import React from 'react';

import { styles } from './styles.scss';

const Employee = ({employee, layout}) => {

    let layoutClass = "";
    if(layout && layout.length !== 0){
        layoutClass = layout;
    }

    return (
        <div className={styles}>
            <div className={layoutClass}>
                <div className="image" style={{backgroundImage: 'url(' + employee.image + ')'}}></div>
                <div className="info">
                    <div className="name" >
                        {employee.name}
                    </div>

                    <div className="title">
                        {employee.title}
                    </div>

                    <div className="email">
                        {employee.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee
