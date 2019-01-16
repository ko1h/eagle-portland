$(document).ready(function() {
  $("#eagle").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var dateInput = $("input#date").val();
    var requestInput = $("select#request").val();

    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".date").text(dateInput);
    $(".request").text(requestInput);

    $("#booking").show();
  });

});
