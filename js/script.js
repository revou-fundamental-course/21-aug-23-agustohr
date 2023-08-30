function replaceName() {
    let name = prompt("Siapakah Nama Anda", "")
    document.getElementById("name").innerHTML = name
}

replaceName()

document.getElementById('changeName').addEventListener("click", function() {
    replaceName()
})

var messageForm = document.getElementById("messageForm");
var outputName = document.getElementById("outputName");
var outputBirthdate = document.getElementById("outputBirthdate");
var outputGender = document.getElementById("outputGender");
var outputMessage = document.getElementById("outputMessage");
var currentTime = document.getElementById("currentTime");

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = messageForm.name.value;
  var birthdate = messageForm.birthdate.value;
  var gender = messageForm.gender.value;
  var message = messageForm.message.value;

  currentTime.textContent = "Current Time: " + new Date();
  outputName.textContent = "Nama: " + name;
  outputBirthdate.textContent = "Tempat Tanggal Lahir: " + birthdate;
  outputGender.textContent = "Jenis Kelamin: " + gender;
  outputMessage.textContent = "Pesan: " + message;

  messageForm.reset();
});
