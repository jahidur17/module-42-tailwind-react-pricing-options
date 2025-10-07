import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resulData = [
  {
    id: 1,
    name: "Amit",
    physics: 85,
    chemistry: 78,
    math: 92,
  },
  {
    id: 2,
    name: "Rina",
    physics: 75,
    chemistry: 82,
    math: 88,
  },
  {
    id: 3,
    name: "Sajid",
    physics: 91,
    chemistry: 89,
    math: 95,
  },
  {
    id: 4,
    name: "Mitu",
    physics: 66,
    chemistry: 70,
    math: 72,
  },
  {
    id: 5,
    name: "Rahim",
    physics: 74,
    chemistry: 68,
    math: 80,
  },
  {
    id: 6,
    name: "Nabila",
    physics: 88,
    chemistry: 90,
    math: 86,
  },
  {
    id: 7,
    name: "Shanto",
    physics: 59,
    chemistry: 64,
    math: 71,
  },
  {
    id: 8,
    name: "Tania",
    physics: 81,
    chemistry: 76,
    math: 84,
  },
  {
    id: 9,
    name: "Arif",
    physics: 95,
    chemistry: 94,
    math: 97,
  },
  {
    id: 10,
    name: "Lima",
    physics: 70,
    chemistry: 73,
    math: 78,
  },
];



const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resulData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
               <Line dataKey="math"></Line>
               <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;