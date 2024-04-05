import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoAdd = await inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What do you want to add in todo app: "
        },
        {
            name: "anotherItem",
            items: "confirm",
            message: "Do you want to add more items in your todo (Yes/No): ",
            default: "true"
        },
    ]);
    todos.push(todoAdd.item);
    console.log(todos);
    if (!(todoAdd.anotherItem == "yes" || todoAdd.anotherItem == "true" || todoAdd.anotherItem == "y")) {
        break;
        condition = todoAdd.anotherItem;
    }
}
//     if (todoAdd.anotherItem == "yes" || todoAdd.anotherItem == "true" || todoAdd.anotherItem == "y") {
//         console.log(todoAdd.item)
//         console.log(todoAdd.anotherItem)
//         console.log(todos)
//         todos.push(todoAdd.item);
//         // if (todoAdd.anotherItem == "yes" || todoAdd.anotherItem == "true" || todoAdd.anotherItem == "y") {
//         //     condition = false; 
//         // }
//         condition != condition ; 
//     } else {
//         todos.push(todoAdd.item);
//         console.log(todos)
//     }
// }
