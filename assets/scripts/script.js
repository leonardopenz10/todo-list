let newTask = 0

$("#addNewTask").click(() => {

    if($("#taskLine").val() != 0){
        newTask = $("#taskLine").val()
        $("li").html('<li class="taskListLine">'+newTask+'</li>')
        console.log(newTask)
    }else
    
    console.log("campo não preenchido")

} )

