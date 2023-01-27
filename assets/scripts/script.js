let newTask = ""

$("#addNewTask").click(() => {

    if($("#taskLine").val() != 0){
        newTask = $("#taskLine").val()
        $("#taskList").prepend('<li class="taskListLine">'+newTask+'</li>')
        console.log(newTask)

        $("#taskLine").val("")
    }else
    
    alert("Campo não preenchido! Gentileza preencha o campo de nova tarefa.")

} )

