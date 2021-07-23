var count = 0;
let r = confirm("apakah anda mau mengulang?")
while (r) {
    if (r==true) {
        count++;
        r = confirm("apakah anda mau mengulang?")
    }
    if (r==false) {
        alert("Pengulangan sudah dilakukan sebanyak :" + count)
        console.log(count)
    }
}