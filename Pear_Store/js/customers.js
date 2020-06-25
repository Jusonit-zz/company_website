function SubmitData() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mailing = "dummy value";
    
    var services=[];
    $("input:checkbox[name=service]:checked").each(function(){
        services.push($(this).val());
    });

    var rows = "";
    rows += "<td>" + name + "</td><td>" + username + "</td><td>" + email + "</td><td>" + mailing + "</td><td>" + services.join(', ') + "</td>";
    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);
}

