function Task(first, second, third) {
  this.firstTask = first;
  this.secondTask = second;
  this.thirdTask = third;
}

Task.prototype.taskList = function() {
  return this.firstTask + " " + this.secondTask + " " + this.thirdTask;
}

$(document).ready(function() {
  $("form#task-list").submit(function(event) {
    event.preventDefault();

    var inputtedFirstTask = $("input#first-task").val();
    var inputtedSecondTask = $("input#second-task").val();
    var inputtedThirdTask = $("input#third-task").val();

    var newTask = new Task(inputtedFirstTask, inputtedSecondTask, inputtedThirdTask);
    
    $("ul#tasks").append("<li><span class='task'>" + newTask.taskList() + "</span></li>");

    $(".task").last().click(function(){
      $("#show-task").show();
      $("#show-task h2").text(newTask.firstTask);
      $(".first-task").text(newTask.firstTask);
      $(".second-task").text(newTask.secondTask);
      $(".third-task").text(newTask.thirdTask);
    });

    $("input#first-task").val("");
    $("input#second-task").val("");
    $("input#third-task").val("");


  });
});
