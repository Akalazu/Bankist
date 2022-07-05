var loginBtn = document.querySelector(".login");

const firstUser = {
  userName: "Code Burster",
  email: "akalazuD@gmail.com",
  userId: "SAFM19689",
  passcode: 2022,
};

loginBtn.addEventListener("click", function (e) {
  var inputEmail = document.querySelector("#email").value.toUpperCase();
  var password = document.querySelector("#password").value;
  e.preventDefault();
  console.log(inputEmail, password);
  if (inputEmail == firstUser.userId && password == firstUser.passcode) {
    // alert("Correct Login details");
    swal({
      title: `Welcome, ${firstUser.userName}`,
      text: "Details Match!",
      icon: "success",
      timer: 3000,
      buttons: false,
    }).then(() => {
      window.location = "index2.html";
    }); //redirects to homapage after 3s
  } else {
    swal({
      title: `Wrong User ID OR Password`,
      text: "Details do not Match!",
      icon: "error",
      //   buttons: false,
    });
  }
});
