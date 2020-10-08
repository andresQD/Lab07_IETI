var uniqid = require('uniqid');

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response
    if (req.method == "GET") {
        context.res = {
            status: 200,
            body: responseMessage
        };
    }
    else {
        responseMessage.push(task);
        task.id = uniqid();
        context.res = {
            status: 200,
            body: responseMessage
        };
    }

}

const responseMessage = [{
    id: uniqid(),
    description: "task 1 ",
    responsible: {
        name: "Andres",
        email: "andres@mail.com"
    },
    status: "ready",
    dueDate: new Date()
},
{
    id: uniqid(),
    description: "do lab",
    responsible: {
        name: "Andres",
        email: "andres@mail.com"
    },
    status: "In progress",
    dueDate: new Date()
},
{
    id: uniqid(),
    description: "Implement task ",
    responsible: {
        name: "Andres",
        email: "andres@mail.com"
    },
    status: "ready",
    dueDate: new Date()
}]