import React from 'react';
import { DashboardWrapper, LeftSideBar, MainContent, RightSideBar } from './SCDashboard';

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <LeftSideBar>Left Sidebar</LeftSideBar>
            <MainContent>
                <h1>Dashboard</h1>
                Main Content
            </MainContent>
            <RightSideBar>Right Sidebar</RightSideBar>
        </DashboardWrapper>
    );
};

export default Dashboard;