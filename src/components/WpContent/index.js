import React from 'react';

import { styles } from './styles.scss';

const WpContent = ({content}) => {
return (

		<div className={styles}>
			<div className="container">	
				<div className="row">
					<div dangerouslySetInnerHTML={{__html:content}}>
					</div>
				</div>
			</div>
		</div>

	)
}

export default WpContent