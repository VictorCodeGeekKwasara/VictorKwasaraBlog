import React from 'react';
import Layout from '../components/Layout';
import MobileHome from '../components/mobile/MobileHome';
import Home from '../components/desktop/Home'

import { useWidth } from '../hooks/useWidth';


export default function Index() {


  let mobile = useWidth(true) ;

	return <Layout>{mobile ?<MobileHome />: <Home />}</Layout>;
}
