var myFirebase = new Firebase('https://fb-train-schedule.firebaseio.com/');


$('#submit').on('click', function(){
  var train = $('#train_name').val().trim();
  var destination = $('#destination').val().trim();
  var frequency = $('#frequency').val().trim();
  var firstTrain = $('#firstTrain').val().trim();

  myFirebase.push({
              trainName: train,
              destination: destination,
              frequency: frequency,
              firstTrain: Firebase.ServerValue.TIMESTAMP
          });

})

myFirebase.on("child_added", function(childSnapshot) {
  //do some math here

  $('#schedule').append("<tr><td>" + childSnapshot.val().trainName + "</td><td>" +
  childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency +
  "</td><td>" + childSnapshot.val().firstTrain + "</td></tr>")
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
})
