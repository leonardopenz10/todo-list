let newTask = ""

$(document).ready(function() {
    // Função para adicionar classe quando um checkbox é marcado
    function addClassToChecked() {
      $('input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
          $(this).siblings('label').addClass('taskListFinished');
        } else {
          $(this).siblings('label').removeClass('taskListFinished');
        }
      });
    }
  
    // Chamada inicial da função para os checkboxes existentes
    addClassToChecked();

    // Evento de clique no botão "Excluir"
    $('body').on('click', 'button.btn-danger', function() {
        $(this).closest('li').remove();
    });
  
    // Ao adicionar uma nova tarefa
    $("#addNewTask").click(() => {
      if ($("#taskLine").val() != "") {
        var newTask = $("#taskLine").val();
        $("#taskList").prepend('<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value=""><label class="form-check-label">' + newTask + '</label> <button class="btn btn-danger btn-sm float-end">Excluir</button></li>');
        console.log(newTask);
        $("#taskLine").val("");
  
        // Chama a função novamente para os novos checkboxes
        addClassToChecked();
      } else {
        alert("Campo não preenchido! Gentileza preencher o campo de nova tarefa.");
      }
    });
  });

