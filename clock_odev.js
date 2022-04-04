
//isim bilgisini alıyoruz.
let userName = prompt("Lüften isim giriniz:");

//bilgiyi atayacağımız yeri seçiyoruz.
let user = document.querySelector('#username');
//yazdırma işlemini yapıyoruz.
user.innerHTML = userName;

function setTime() {       //fonksiyon
    let now = new Date();       //Tarih bilgisini now değişkenine atadık

    let date = document.querySelector('#clock');    //Bilgileri atacağımız yeri seçtik

    let year = now.getFullYear();   //yıl
    let number = now.getDate();     //aylardan hangi gün
    let hour = now.getHours();      //saat
    let min = now.getMinutes();     //dakika
    let sec = now.getSeconds();     //saniye

    //Günleri tanımlama
    let days = [
        "Pazar",
        "Pazartesi",
        "Salı","Çarşamba",
        "Perşembe","Cuma",
        "Cumartesi"
    ];
    let day = days[now.getDay()];   //gün

    //Ayları tanımlama
    let mons = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
    ];    
    let mon = mons[now.getMonth()]; //ay

    //Topladığımız bilgileri Template Literal ile yazdırdık
    date.innerHTML = `${hour} : ${min} : ${sec} <br> ${number} ${mon} ${day} <br> ${year}`;

    setTimeout(setTime, 1000);     //fonksiyonun belirli aralıklarla yeniden çalışmasını sağlar.
                                // setInterval(showTime, 1000); === setTimeout() alternatifi
                                //     //1000ms çağırılma aralığı
}

setTime();     //Fonksiyonu çağırma