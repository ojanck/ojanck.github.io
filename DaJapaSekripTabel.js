function terimainput(){
    var x=document.forms['Biodata']['Nama'].value;
    var y=document.forms['Biodata']['Nim'].value;
    var z=document.forms['Biodata']['Alamat'].value;
    var a=document.forms['Biodata']['Fakultas'].value;
    var b=document.forms['Biodata']['ProgramStudi'].value;
    var c=document.forms['Biodata']['Suku'].value;


    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);


    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;
    cell4.innerHTML = a;
    cell5.innerHTML = b;
    cell6.innerHTML = c;
}
