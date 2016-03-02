import React from 'react';

import { styles } from './styles.scss';

const Employee = ({employee}) => {



    return (
        <div className={styles}>
            <div className="image" style={{backgroundImage: 'url(' + employee.image + ')'}}></div>
            <div>
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
    )
}

export default Employee
