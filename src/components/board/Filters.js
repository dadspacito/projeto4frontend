

// faço aqui os pedidos de get para obter a lista de tarefas
// os botoes é que fazem o tipo de pedido de lista. isto é executado pelos botoes
// persiste os dados na store de tasks
///REVER ISTO


const Filters = () => {

async function fetchTasksByStatus(status) {

    const response = await fetch("http://localhost:8080/scrumpurrfect/rest/task/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            token: token,
        },
    });


async function fetchAllTasks() {
        const response = await fetch("http://localhost:8080/scrumpurrfect/rest/task/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
                token: token,
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            taskStore.getState().tasks.setTasks(data);
        } else {
            throw new Error("Failed to fetch data");
        }
    }
    
export defaut Filters;