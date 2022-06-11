

function ortalaBeyb() {
var okulunAcikGunleri, toplamSayi, kizSayisi, erkekSayisi, erkekGelmeyen, kizGelmeyen, toplamGelmeyen, toplamOrtalama, kizOrtalama, erkekOrtalama, yuzdeOrtalama


okulunAcikGunleri = parseInt(document.getElementById("oag").value);
kizSayisi = parseInt(document.getElementById("ks").value);
erkekSayisi = parseInt(document.getElementById("es").value);
kizGelmeyen = parseInt(document.getElementById("ktd").value);
erkekGelmeyen = parseInt(document.getElementById("etd").value);

toplamGelmeyen = kizGelmeyen + erkekGelmeyen;
toplamSayi = kizSayisi + erkekSayisi;


kizOrtalama = ((okulunAcikGunleri * kizSayisi) - kizGelmeyen) / okulunAcikGunleri;
erkekOrtalama = ((okulunAcikGunleri * erkekSayisi) - erkekGelmeyen) / okulunAcikGunleri;
toplamOrtalama = ((okulunAcikGunleri * toplamSayi) - toplamGelmeyen) / okulunAcikGunleri;
yuzdeOrtalama = (toplamOrtalama * 100) / toplamSayi;

document.getElementById("kdo").innerHTML = kizOrtalama.toFixed(2);
document.getElementById("edo").innerHTML = erkekOrtalama.toFixed(2);
document.getElementById("tdo").innerHTML = toplamOrtalama.toFixed(2);
document.getElementById("tdy").innerHTML = yuzdeOrtalama.toFixed(2);

console.log(okulunAcikGunleri + "\n" + kizSayisi + "\n" + erkekSayisi + "\n" + kizGelmeyen + "\n" + erkekGelmeyen + "\n" + toplamGelmeyen + "\n" + toplamSayi)

}