document.getElementById("addAddress").addEventListener("click", () => {
  const addressContainer = document.getElementById("addressContainer");
  const newAddressInput = document.createElement("input");
  newAddressInput.type = "text";
  newAddressInput.name = "address";
  newAddressInput.classList.add("address");
  newAddressInput.required = true;
  addressContainer.appendChild(newAddressInput);
});

document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const userName = document.getElementById("userName").value;
    const address = Array.from(document.getElementsByClassName("address")).map(
      (input) => input.value
    );

    const response = await fetch("http://localhost:5001/api/register", {
      // Adjust the URL as needed
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, address }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.data);
      alert("Registration successful!");
    } else {
      const jsonResponse = await response.json();
      alert(jsonResponse.data.errorMessage);
    }
  });
