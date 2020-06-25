function SubmitData() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    var rows = "";
    rows += "<td>" + name + "</td><td>" + username + "</td><td>" + email + "</td>";
    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);
}

