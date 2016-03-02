import React from 'react';

import Meter from './meter';

import { styles } from './styles.scss';

const Meters = ({meters}) => {
    console.log('==> Meters ', meters.meters);
    return(
        <div className={styles}>
            <div className="container">
                <div className="row">
                    {
                        meters.map((meter) => {
                            console.log('meter', meter);
                            return (
                                <Meter meter={meter} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Meters;
