const users = [
  { user: "user1@sportclub.cl", password: "1234", role: "user" },
  { user: "user2@sportclub.cl", password: "1234", role: "user" },

  { user: "coach1@sportclub.cl", password: "1234", role: "coach" },
  { user: "coach2@sportclub.cl", password: "1234", role: "coach" },

  { user: "admin1@sportclub.cl", password: "1234", role: "admin" },
  { user: "admin2@sportclub.cl", password: "1234", role: "admin" }
];

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  error.textContent = "";

  if (!email || !password) {
    error.textContent = "Completa todos los campos";
    return;
  }

  const user = users.find(u => u.user === email && u.password === password);

  if (!user) {
    error.textContent = "Correo o contraseña incorrectos";
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  if (user.role === "user") {
    window.location.href = "user.html";
  } else if (user.role === "coach") {
    window.location.href = "coach.html";
  } else if (user.role === "admin") {
    window.location.href = "admin.html";
  }
}
