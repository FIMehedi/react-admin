import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, Line, Tooltip, CartesianGrid, YAxis } from 'recharts';
import './Chart.css';

interface IProps {
    title: string;
    data: Array<{ name: string; 'Active User'?: number; 'Sales'?: number; }>;
    dataKey: string;
    grid: boolean;
}

const Chart = ({ title, data, dataKey, grid }: IProps) => {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#0dacac" />
                    <YAxis stroke="#0dacac" />
                    <Line type="monotone" dataKey={dataKey} stroke="#0dacac" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;