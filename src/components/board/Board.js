// import React, { useEffect } from "react";
// import useFetch from "react-fetch-hook";
// import { userStore } from "../../stores/UserStore";
// import { taskStore } from "../../stores/TaskStore";

// const Board = () => {
//   // a board mantém o estado das tarefas sempre sync com o backend. de todas as tarefas
//   const token = userStore((state) => state.token); // Acessar o token da store

// const { isLoading, tasks, error } = useFetch(
//   "http://localhost:8080/scrumpurrfect/rest/task/all",
//   {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "*/*",
//       token: token,
//       // Authorization: `Bearer ${token}`, // Assumindo que o token é enviado no header Authorization
//     },
//   }
// );

// if (isLoading) return <div>Loading...</div>;
// if (error) return <div>Error!</div>;
// if (!tasks) return <div>No tasks found</div>;
// if (tasks) return <div>tasks found</div>;

// taskStore.getState().tasks.setTasks(tasks);
// console.log(tasks);

///////////////////////// AQUI TÁ BEM /////////////////////////
//   const tasks = taskStore((state) => state.tasks);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         "http://localhost:8080/scrumpurrfect/rest/task/all",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "*/*",
//             token: token,
//           },
//         }
//       );
//       if (response.ok) {
//         const data
//       } else {
//         throw new Error("Failed to fetch data");
//       }= await response.json();
//         console.log(data);
//         taskStore.getState().setTasks(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     // dividir em 3 colunas
//     <div>
//       <div>
//         <h1>To Do</h1>
//         <ul>
//           {tasks.map((task) => {
//             if (task.status === 100) {
//               return <li key={task.id}>{task.title}</li>;
//             }
//           })}
//         </ul>
//       </div>
//       <div>
//         <h1>Doing</h1>
//         <ul>
//           {tasks.map((task) => {
//             if (task.status === 200) {
//               return <li key={task.id}>{task.title}</li>;
//             }
//           })}
//         </ul>
//       </div>
//       <div>
//         <h1>Done</h1>
//         <ul>
//           {tasks.map((task) => {
//             if (task.status === 300) {
//               return <li key={task.id}>{task.title}</li>;
//             }
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Board;

import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { userStore } from "../../stores/UserStore";
import { taskStore } from "../../stores/TaskStore";

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8080/scrumpurrfect/rest/task/all"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const categorizedTasks = {
    todo: tasks.filter((task) => task.status === 100),
    doing: tasks.filter((task) => task.status === 200),
    done: tasks.filter((task) => task.status === 300),
  };

  const TaskDetails = ({ task }) => (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h3>{task.title}</h3>
      <p>
        <strong>Description:</strong> {task.description}
      </p>
      <p>
        <strong>Initial Date:</strong> {task.initialDate}
      </p>
      <p>
        <strong>Final Date:</strong> {task.finalDate}
      </p>
      <p>
        <strong>Owner:</strong> {task.owner}
      </p>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {task.status === 100 ? "To Do" : task.status === 200 ? "Doing" : "Done"}
      </p>
    </div>
  );

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h2>To Do</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {categorizedTasks.todo.map((task) => (
            <li key={task.id}>
              <TaskDetails task={task} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Doing</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {categorizedTasks.doing.map((task) => (
            <li key={task.id}>
              <TaskDetails task={task} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Done</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {categorizedTasks.done.map((task) => (
            <li key={task.id}>
              <TaskDetails task={task} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
