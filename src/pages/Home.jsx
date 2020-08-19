import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';

import ByrdMenu from '../components/ByrdMenu';
import { client } from '../prismic-configuration';

const Home = () => {

	const [homeDoc, setHomeDoc] = useState(null);
	const [menuData, setMenuData] = useState(null);

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
  		<ByrdMenu data={menuData} />
  	</div>
  );
};

export default Home;