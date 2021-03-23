import React from "react";

export const Courses = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div className="Courses-Container">
      {courses.map(({ name, id, parts }) => {
        //Hago la desestructuracion directamente
        let totalExercises = 0;
        return (
          <div key={id} className="Course-Container">
            <h1>{name}</h1>
            <ul>
              {parts.map(({ name, exercises, id }) => {
                //Hago la desestructuracion directamente
                totalExercises += exercises;
                return (
                  <li key={id}>
                    {name} {exercises}
                  </li>
                );
              })}
            </ul>
            <h2>Total of exercises: {totalExercises}</h2>
          </div>
        );
      })}
    </div>
  );
};
