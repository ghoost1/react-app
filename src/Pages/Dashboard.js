import React from 'react';
import './pages.css';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
         Layer, Animate, Transform, Handlers, helpers, DropShadow, Gradient } from 'rumble-charts';

function Dashboard() {
  const series = [{ data: [1, 2, 3] }, { data: [5, 7, 11] }, { data: [13, 17, 19]  }];
  return ( 
    <>
    <Header />  
    <Chart width={1000} height={550} series={series} minY={0} maxY={20}>
      <Bars innerPadding={5} groupPadding={10} />
      <Lines />
      <Dots />
    </Chart>
    <Menu />
    </>
    );
}

export default Dashboard;
