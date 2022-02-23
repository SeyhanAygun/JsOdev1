document.getElementById("progDilleri").addEventListener("change",dil)
let sonuc = document.getElementById("sonucDiller")

function dil(){
    sonuc.classList.remove("JV","PYT","JS","C++","C#","Programlama")
    let dil=document.getElementById("progDilleri").selectedIndex;

    if(dil==0){
        document.body.style.backgroundColor="yellow"
        sonuc.innerHTML="Java, Sun Microsystems'den James Gosling tarafından geliştirilen bir programlama dilidir ve 1995 yılında Sun Microsystems'in çekirdek bileşeni olarak piyasaya sürülmüştür"
        sonuc.classList.add("JV");
        document.getElementById("Profil").setAttribute("src","")
    }
    else if(dil==1){
        document.body.style.backgroundColor="blue"
        sonuc.innerHTML="Python 1.0 sürümüne Ocak 1994'te ulaşmıştır. 2.0 sürümü 16 Ekim 2000'de yayınlanmıştır."
        sonuc.classList.add("PYT");
        document.getElementById("Profil").setAttribute("src","")
    }
    else if(dil==2){
        document.body.style.backgroundColor="red"
        sonuc.innerHTML="İlk olarak Brendan Eich tarafından geliştirilmiş olup, ilk defa Aralık 1995 tarihinde Netscape Navigator 2.0 ile birlikte piyasaya sürüldü."
        sonuc.classList.add("JS");
        document.getElementById("Profil").setAttribute("src","")
    }
    else if(dil==3){
        document.body.style.backgroundColor="orange"
        sonuc.innerHTML=" 1979 yılından itibaren geliştirilmeye başlanmış, C'yi kapsayan ve çok paradigmalı, yaygın olarak kullanılan, genel amaçlı bir programlama dilidir."
        sonuc.classList.add("C++");
        document.getElementById("Profil").setAttribute("src","")
    }
    else if(dil==4){
        document.body.style.backgroundColor="purple"
        sonuc.innerHTML="Gerçekte C# veya . NET Framework uyumlu herhangi bir programlama dili ile program yazmak için . NET Framework ve Not Defteri gibi bir editör programı yeterli olmaktadır."
        sonuc.classList.add("C#");
        document.getElementById("Profil").setAttribute("src","")
    }
    console.log(dil)
}
function Programlama(){
    let ad;
    ad=document.getElementById("txtAd").value;
}                                                                                                                       