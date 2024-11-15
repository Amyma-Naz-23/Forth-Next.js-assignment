// StudentCard.jsx
import React from 'react';

const StudentCard = ({ name, age, rollNumber, className } : {name:string, age:number|string, rollNumber:number|string, className:string}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 max-w-sm mx-auto mt-6 border-l-4 border-blue-500">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600 mb-1">Age: {age}</p>
      <p className="text-gray-600 mb-1">Roll Number: {rollNumber}</p>
      <p className="text-gray-600">Class: {className}</p>
    </div>
  );
};

export default StudentCard;
