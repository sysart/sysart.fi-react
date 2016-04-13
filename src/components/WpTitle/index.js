import React from 'react';
import { styles } from './styles.scss';
import moment from 'moment';

const WpTitle = ({title, published}) => {
    console.log('====> ', published);
    return(
        <div className={styles}>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center">
                        <div className="publish-date">{published}</div>
						<h2>{title}</h2>
					</div>
				</div>
			</div>
		</div>
    )
}

export default WpTitle
