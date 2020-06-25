function SubmitData() {
    var name = document.getElementById("inputName").value;
    var username = document.getElementById("inputUsername").value;
    var email = document.getElementById("inputEmail").value;
    
    var rows = "";
    rows += "<td>" + name + "</td><td>" + username + "</td><td>" + email + "</td>";
    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);
}


