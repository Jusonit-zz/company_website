function SubmitData() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    var mailing = "";

    if (document.getElementById('mailyes').checked) {
        mailing = document.getElementById('mailyes').value;
      }
    else if (document.getElementById('mailno').checked){
        mailing = document.getElementById('mailno').value;
    }
    else{
        mailing = " ";
    }
    
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

