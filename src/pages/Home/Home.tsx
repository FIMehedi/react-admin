import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import LatestTransactions from '../../components/LatestTransactions/LatestTransactions';
import NewMembers from '../../components/NewMembers/NewMembers';
import { userData } from '../../fakeData/userData';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <FeaturedInfo />
            <section id="analytics">
                <Chart title="User Analytics" data={userData} dataKey="Active User" grid />
            </section>
            <div className="homeWidgets">
                <NewMembers />
                <LatestTransactions />
            </div>
        </div>
    );
};

export default Home;