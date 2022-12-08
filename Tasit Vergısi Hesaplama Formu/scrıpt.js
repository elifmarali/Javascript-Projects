let sonucDom = document.querySelector("#sonuc");
function yillar() {
  var tarih = new Date();
  var yil = tarih.getFullYear();
  for (let i = yil; i >= 1950; i--) {
    var secenekler = document.createElement("option");
    document.getElementById("aracModeli").options.add(secenekler);
    secenekler.value = i;
    secenekler.text = i;
  }
}
function vergiyiHesapla() {
  let aracYili,aracTipi,aracGucu;
  let odenecekTutar;
  let i = 0;

  //1. section icin yapilan kodlamadir . Arac tipi secimini alma
  for (i; i < document.querySelector("#aracTipi").length; i++) {
    if (document.querySelector("#aracTipi").options[i].selected) {
      aracTipi = document.querySelector("#aracTipi").options[i].value;
    } 
  }
  if (aracTipi == "Motorsiklet") {
    odenecekTutar = 100;
  } else if (aracTipi == "Otomobil") {
    odenecekTutar = 200;
  }

  //2. section icin dongu .arac gucu secimini alalim
 
  for (i = 0; i < document.getElementsByName("motorGucu").length; i++) {
    if (document.getElementsByName("motorGucu")[0].checked) {
      aracGucu = "999cc";
    } else if (document.getElementsByName("motorGucu")[1].checked) {
      aracGucu = "1000cc-1600cc";
    } else if (document.getElementsByName("motorGucu")[2].checked) {
      aracGucu = "1601cc-2000cc";
    } else if (document.getElementsByName("motorGucu")[3].checked) {
      aracGucu = "2001cc";
    }
  }
  //2. kontrol blogu arac gucune gore eklenecek tutari belirleme
  if (aracGucu == "999cc") {
    odenecekTutar += 0;
  } else if (aracGucu == "1000cc-1600cc") {
    odenecekTutar += 50;
  } else if (aracGucu == "1601cc-2000cc") {
    odenecekTutar += 100;
  } else if (aracGucu == "2001cc") {
    odenecekTutar += 150;
  }

  //3. dongu blogu-arac yilini secimini alma
  for (i; i < document.getElementById("aracModeli").length; i++) {
    if (document.getElementById("aracModeli").options[i].selected) {
      aracYili = document.getElementById("aracModeli").options[i].value;
    }
  }
  //3. dongu bloguna gore indirim yapma
  if (aracYili <= 2005) {
    odenecekTutar -= 25;
  }

  sonucDom.innerHTML =
    "Arac tipi : " +
    aracTipi +
    " Arac gucu : " +
    aracGucu +
    " Arac modeli : " +
    aracYili +
    "<br> </br>" +
    " Odenecek Tutar = " +
    odenecekTutar +
    " TL dir.";
}

/* function sonucuYazdir() {
    if (aracTipi == " ") {
      sonucDom.innerHTML = "Arac tipi secip tekrar deneyiniz.";
    } else if (aracGucu == " ") {
      sonucDom.innerHTML = "Arac gucu secip tekrar deneyiniz.";
    } else if (aracGucu == undefined && aracTipi == undefined) {
      sonucDom.innerHTML = "Arac tipi ve arac gucu secip tekrar deneyiniz.";
    } else {
      sonucDom.innerHTML =
        "Arac tipi : " +
        aracTipi +
        "Arac gucu : " +
        aracGucu +
        "Odenecek Tutar = " +
        odenecekTutar;
    }
  } */
