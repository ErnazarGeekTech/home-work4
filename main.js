let form = document.getElementById("my-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let firstName = form.elements.firstName.value;
  let lastName = form.elements.lastName.value;

  let data = { firstName, lastName };

  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  let result = await response.json();
  console.log(result);
});

