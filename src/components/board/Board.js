// import React, { useEffect, useState } from "react";
// import useFetch from "react-fetch-hook";
// import { userStore } from "../../stores/UserStore";
// import { taskStore } from "../../stores/TaskStore";
// import Swal from "sweetalert2";

// const Board = () => {
//   const [tasks, setTasks] = useState([]);

//   const token = userStore((state) => state.token);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       //  setIsLoading(true);
//       Swal.showLoading();
//       try {
//         const response = await fetch(
//           "http://localhost:8080/scrumpurrfect/rest/task/all",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "*/*",
//               token: token,
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Network response was not ok");
//         const data = await response.json();
//         setTasks(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         Swal.close();
//       }
//     };

//     fetchTasks();
//   }, [taskStore.getState().tasks]);

//   const categorizedTasks = {
//     todo: tasks.filter((task) => task.status === 100),
//     doing: tasks.filter((task) => task.status === 200),
//     done: tasks.filter((task) => task.status === 300),
//   };

//   const TaskDetails = ({ task }) => (
//     <div
//       className="task-details"
//       style={{
//         margin: "10px",
//         padding: "10px",
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//       }}
//     >
//       <h3>{task.title}</h3>
//       <p>
//         <strong>Description:</strong> {task.description}
//       </p>
//       <div className="task-details__hidden-info">
//         <p>
//           <strong>Initial Date:</strong> {task.initialDate}
//         </p>
//         <p>
//           <strong>Final Date:</strong> {task.finalDate}
//         </p>
//         <p>
//           <strong>Owner:</strong> {task.owner}
//         </p>
//         <p>
//           <strong>Priority:</strong> {task.priority}
//         </p>
//         <p>
//           <strong>Status:</strong>{" "}
//           {task.status === 100
//             ? "To Do"
//             : task.status === 200
//             ? "Doing"
//             : "Done"}
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <div style={{ display: "flex", justifyContent: "space-around" }}>
//       <div>
//         <h2>To Do</h2>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {categorizedTasks.todo.map((task) => (
//             <li key={task.id}>
//               <TaskDetails task={task} />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Doing</h2>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {categorizedTasks.doing.map((task) => (
//             <li key={task.id}>
//               <TaskDetails task={task} />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Done</h2>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {categorizedTasks.done.map((task) => (
//             <li key={task.id}>
//               <TaskDetails task={task} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Board;

import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Swal from "sweetalert2";
import { userStore } from "../../stores/UserStore";
import { taskStore } from "../../stores/TaskStore";

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const token = userStore((state) => state.token);

  useEffect(() => {
    const fetchTasks = async () => {
      Swal.showLoading();
      try {
        const response = await fetch(
          "http://localhost:8080/scrumpurrfect/rest/task/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              token: token,
            },
          }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        Swal.close();
      }
    };

    fetchTasks();
  }, [taskStore.getState().tasks]);

  // Função para lidar com o fim do arrasto
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Verificar se existe destino
    if (!destination) {
      return;
    }

    // Verificar se a localização da task mudou
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Lógica para atualizar o estado das tasks
    const updatedTasks = [...tasks];
    const movedTask = updatedTasks.find(
      (task) => task.id.toString() === draggableId
    );
    if (movedTask) {
      movedTask.status = parseInt(destination.droppableId);
      setTasks(updatedTasks);

      // LOGICA DA PERSISTENCIA; REVER
    }
  };

  // MAP STATUS E PRIORIDADE REVER
  const statusTitles = {
    100: "To Do",
    200: "Doing",
    300: "Done",
  };

  const priorityTitles = {
    100: "Low",
    200: "Medium",
    300: "High",
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.entries(statusTitles).map(([status, title]) => (
        <Droppable droppableId={status} key={status}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>{title}</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {tasks
                  .filter((task) => task.status.toString() === status)
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => {
                        // Definindo o texto da prioridade e cor de fundo
                        let priorityText = "";
                        let backgroundColor = "";
                        switch (task.priority) {
                          case 100:
                            priorityText = "Low";
                            backgroundColor = "lightgreen";
                            break;
                          case 200:
                            priorityText = "Medium";
                            backgroundColor = "yellow";
                            break;
                          case 300:
                            priorityText = "High";
                            backgroundColor = "orange";
                            break;
                          default:
                            priorityText = "Unknown";
                            backgroundColor = "grey";
                        }

                        return (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              margin: "10px",
                              padding: "10px",
                              border: "1px solid #ccc",
                              borderRadius: "5px",
                              backgroundColor,
                            }}
                          >
                            <div className="task-details">
                              <h3>{task.title}</h3>
                              <p>
                                <strong>Description:</strong> {task.description}
                              </p>
                              <div className="task-details__hidden-info">
                                <p>
                                  <strong>Initial Date:</strong>{" "}
                                  {task.initialDate}
                                </p>
                                <p>
                                  <strong>Final Date:</strong> {task.finalDate}
                                </p>
                                <p>
                                  <strong>Owner:</strong> {task.owner}
                                </p>
                                <p>
                                  <strong>Priority:</strong> {priorityText}
                                </p>
                                <p>
                                  <strong>Status:</strong>{" "}
                                  {task.status === 100
                                    ? "To Do"
                                    : task.status === 200
                                    ? "Doing"
                                    : "Done"}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      }}
                    </Draggable>
                  ))}

                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default Board;
