const list = {
    "create a task": "In Progress",
    // "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus() {
    list["write a post"] = "Done"
}
function addTask() {
    list['have a walk'] = "To Do"
}
function deleteTask() {
    delete list['have a walk']
}

function showList() {
    let checkKey

    console.log("To Do:")
    for (let key in list) {
        if (list[key] == "To Do") {
            console.log(key)
            checkKey = list[key]
        }
    }
    if (checkKey !== "To Do") {
        console.log("None")
    }

    console.log("In Progress:")
    for (let key in list) {
        if (list[key] == "In Progress") {
            console.log(key)
            checkKey = list[key]
        }
    }
    if (checkKey !== "In Progress") {
        console.log("None")
    }

    console.log("Done:")
    for (let key in list) {
        if (list[key] == "Done") {
            console.log(key)
            checkKey = list[key]
        }
    }
    if (checkKey !== "Done") {
        console.log("None")
    }

}
