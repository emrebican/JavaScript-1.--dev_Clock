// //ilk önce isim bilgisini alıyoruz.
// let name = prompt("Lütfen isim bilgisi giriniz:");

// //sonrasında bu bilgiyi atayacağımız yeri seçiyoruz.
// let userName = document.querySelector('#username');
// //Yazdırma işlemini yapıyoruz.
// userName.innerHTML = `${name}`;

// function showTime() {   //fonsiyon
//     let now = new Date();   //Tarih bilgisini now değişkenine atadık

//     let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
//     let hour = now.getHours();          //Saat bilgisi
//     let min = now.getMinutes();         //Dakika bilgisi
//     let sec = now.getSeconds();         //Saniye bilgisi
//     let day = days[now.getDay()];       //Gün bilgisi -- Burada days değişkeninde belirlediğimiz günlerden birini seçtirdik

//     let date = document.querySelector('#clock');    //Bilgileri atayacağımız yeri seçtik
    
//     date.innerHTML = `<strong>${hour} : ${min} : ${sec} <u>${day}</u></strong>`;    //Template Literals ile yazdırdık

//     setTimeout(showTime, 1000); //fonksiyonun belirli aralıklarla yeniden çalışmasını sağlar.

//     // setInterval(showTime, 1000); === setTimeout() alternatifi
//     //1000ms çağırılma aralığı
// }
// showTime();     //Fonksiyonu çağırma


let userName = prompt("Lüften isim giriniz:");

let user = document.querySelector('#username');
user.innerHTML = userName;

function Time() {
    let now = new Date();       //Önemli

    let date = document.querySelector('#clock');

    let year = now.getFullYear();
    let number = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let day = days[now.getDay()];

    let mons = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];    

    let mon = mons[now.getMonth()];

    date.innerHTML = `${hour} : ${min} : ${sec} <br> ${number} ${mon} ${day} <br> ${year}`;

    setTimeout(Time, 1000);     //Önemli
}

Time();

















// let date = document.querySelector('#clock')

// let now = new Date();
// let hour = now.getHours();
// let min = now.getMinutes();
// let sec = now.getSeconds();
// let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
// let day = now.getDay();

// date.innerHTML = `${hour} : ${min} : ${sec} ${day}`;