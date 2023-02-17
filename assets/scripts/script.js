let newTask = ""

$("#addNewTask").click(() => {

    if($("#taskLine").val() != 0){
        newTask = $("#taskLine").val()
        $("#taskList").prepend('<li class="taskListLine"> <img src="./assets/images/no-check.png">'+newTask+'<img src="./assets/images/cancel-task.png"> </li>')
        console.log(newTask)

        $("#taskLine").val("")
    }else
    
    alert("Campo não preenchido! Gentileza preencha o campo de nova tarefa.")

} )

$(".taskListLine").click(() => {
    $("li").toogle("taskListFinished")
})

