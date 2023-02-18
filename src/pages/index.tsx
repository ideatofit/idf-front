import React from 'react';
import { Layout, Space } from 'antd';
import Slide from '@/components/slide';
import Navigation from '@/components/Navigation';


const Home: React.FC = () => (
  <div>
    <Navigation/>
    <Slide/>
  </div>
);

export default Home