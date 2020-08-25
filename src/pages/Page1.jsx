import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './page1.scss';

const Page1 = () => {	
	const history = useHistory();

	const [isPageLoading, setIsPageLoading] = useState(false);
	const [isPageChanging, setIsPageChanging] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsPageLoading(true);
		}, 300);
	})


	const handlePageChange = () => {
		setIsPageChanging(true);
		setTimeout(() => {
			history.push('/home');
		}, 500);
	}

	return (
		<div>
			<div className={`page1-pageChangeOverlay ${isPageLoading ? 'loading' : ''} ${isPageChanging ? 'changing' : ''}`} />
			<h1 className="pageHeader">Page 1</h1>
			<button className='centerButton' onClick={handlePageChange}>Change</button>
		</div>
	)
};

export default Page1;