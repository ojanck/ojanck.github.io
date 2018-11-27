var x = 1;
function formInput() 
{
    var nama =     document.forms['bio']['NamaPariwisata'].value;
    var deskripsi =  document.forms['bio']['Deskripsi'].value;
    var tgl =         document.forms['bio']['TanggalDibangun'].value;
    var gambar =      document.forms['bio']['gambar'].value;
    
    var d = [nama,deskripsi,tgl,gambar];
    if(nama==null || nama=="" || deskripsi==null || deskripsi=="" || tgl==null || tgl=="" || gambar==null || gambar=="") {
      alert("data tidak boleh kosong!!!");
  }
  if(nama!=null && nama!="" && deskripsi!=null && deskripsi!="" && tgl!=null && tgl!="" && gambar!=null && gambar!="") {
   var row = document.getElementById("output").insertRow(x);
   var i;
   for (i=0; i < d.length; i++) 
   {
    var cell = row.insertCell(i);
    cell.innerHTML = d[i];
   }
x++;
alert("data berhasil di entry");
} 

}