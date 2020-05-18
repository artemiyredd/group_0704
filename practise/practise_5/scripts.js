let name = prompt("Enter name");

if (name === "admin") {
  alert("Hello");
} else {
  name = prompt("Enter name");

  if (name === "admin") {
    alert("Hello");
  } else {
    alert("Go away");
  }
}
