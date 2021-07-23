let r = prompt("Sebutkan kepanjangan dari nama IB?")
let jawab = "Impact Byte"
while (r) {
    if (r==jawab) {
        alert("Selamat jawaban kamu benar")
        break;
    }
    if (r != jawab) {
        r = prompt("Sebutkan kepanjangan dari nama IB?")
    }
}