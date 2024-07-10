import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";
export function ValidUser(user1, user2) {
  if (user1 === "" || user2 === "") {
    Swal.fire({
      icon: "error",
      title: "Hey!!!",
      text: "Por favor rellene todos los campos",
      footer: ">:v",
    });
    return false;
  } else {
    return true;
  }
}
