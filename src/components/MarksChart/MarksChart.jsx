import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data processing for the chart 
    const marksChartData =  marksData.map(studentData =>{
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math:studentData.marks.math
        }
        const avg = (student.chemistry + student.math + student.physics) / 3;
        student.avg = avg;
        return student;
        
    } )
   console.log(marksChartData);
  return(
     <div>
         <BarChart width={500} height={500} data={marksChartData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="avg" fill='yellow'></Bar>
            <Bar dataKey="chemistry" fill='red'></Bar>
            <Bar dataKey="physics" fill='blue'></Bar>
         </BarChart>
     </div>
  );
};

export default MarksChart;