// App.jsx
import React from 'react';
import StudentCard from './card/page';

const App = () => {
  const students = [
    { name: 'Amy naz', age: 20, rollNumber: 'A1', className: '10th Grade' },
    { name: 'Sania', age: 16, rollNumber: 'B2', className: '11th Grade' },
    { name: 'Sehar', age: 17, rollNumber: 'C3', className: '12th Grade' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-100 min-h-screen">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          className={student.className}
        />
      ))}
    </div>
  );
};

export default App;
