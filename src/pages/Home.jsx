import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { useHistory } from 'react-router-dom';

import './home.scss'

import ByrdMenu from '../components/ByrdMenu';
import { client } from '../prismic-configuration';

const Home = () => {

	const [homeDoc, setHomeDoc] = useState(null);
	const [menuData, setMenuData] = useState(null);
	const [isPageLoading, setIsPageLoading] = useState(false)
	const [isPageChanging, setIsPageChanging] = useState(false);
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			setIsPageLoading(true);
		}, 300);
	})

	const handlePageChange = () => {
		setIsPageChanging(true);
		setTimeout(() => {
			history.push('/page1');
		}, 500);
	}

  // Get the homepage and blog post documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle('page');
        const menu2 = await client.getSingle('menu2');
       	setHomeDoc(homeDoc)
       	setMenuData(menu2.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPrismicData();
  }, []);
  
  return (
  	<div>
  		<div className={`pageChangeOverlay ${isPageLoading ? 'loading' : ''} ${isPageChanging ? 'changing' : ''}`} />
	  		<h1 className="pageHeader">Home</h1>
	  		<button className="centerButton" onClick={handlePageChange}>Change</button>
  		<ByrdMenu data={menuData} />
  	</div>
  );
};

export default Home;