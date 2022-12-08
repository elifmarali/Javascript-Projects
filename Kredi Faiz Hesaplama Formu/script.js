function krediHesapla() {
  let cekilecekTutar = document.getElementById("krediTutari").value;
  let vadeMiktariSecenek = document.getElementById("listeVade");
  let vadeSayısı =
    vadeMiktariSecenek.options[vadeMiktariSecenek.selectedIndex].value;
  if (vadeSayısı == 12) {
    odenecekToplamFaizliTutar = cekilecekTutar * 1.1;
  }
  if (vadeSayısı == 24) {
    odenecekToplamFaizliTutar = cekilecekTutar * 1.2;
  }
  if (vadeSayısı == 36) {
    odenecekToplamFaizliTutar = cekilecekTutar * 1.3;
  }
  if (vadeSayısı == 48) {
    odenecekToplamFaizliTutar = cekilecekTutar * 1.4;
  }
  let aylıkOdenecekTaksitTutarı = odenecekToplamFaizliTutar / vadeSayısı;
  document.querySelector(".sonuc").innerHTML =
    "Geri ödenecek toplam tutar : " +
    odenecekToplamFaizliTutar +
    "Aylık ödenecek tutar : " +
    aylıkOdenecekTaksitTutarı.toFixed(2);
}
