function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;

  const gender = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  )
    .map((el) => el.value)
    .join(", ");
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  const popupContent = `
              <strong>First Name:</strong> ${firstName}<br>
              <strong>Last Name:</strong> ${lastName}<br>
              <strong>Date of Birth:</strong> ${dob}<br>
              <strong>Country:</strong> ${country}<br>
              <strong>Gender:</strong> ${gender}<br>
              <strong>Profession:</strong> ${profession}<br>
              <strong>Email:</strong> ${email}<br>
              <strong>Mobile Number:</strong> ${mobile}
          `;

  document.getElementById("popupContent").innerHTML = popupContent;
}

surveyForm.addEventListener("submit", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
  resetForm();
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
    myPopup.classList.remove("show");
  }
});
function resetForm() {
  document.getElementById("surveyForm").reset();
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}