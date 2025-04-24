function trygeolocationforY(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(tryAPIforY, err=>{
            console.error(err)
        })
    }
}
async function tryAPIforY(where){
    try{
        var wherex = where.coords.latitude
        var wherey = where.coords.longitude
        var answer = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${wherex}&lon=${wherey}&appid=b4147cb96ae213f164e31ca3471b1c7d&units=metric&lang=ru`)
        if (!answer.ok){
            throw new Error($answer.status)
        }
        var answerjson = await answer.json()
        document.getElementById("параметр4").value = answerjson.main.temp
        document.getElementById("параметр5").value = answerjson.main.pressure * 100
        document.getElementById("purpose").value = "Па"
    }
    catch(error){
        console.error(error)
    }
}
trygeolocationforY()
var ugol=document.getElementById('уголкрыла')
ugol.addEventListener("change", function(){
    if (ugol.value==15){
        lk[0].value=1.28, lk[1].value=1.13, lk[2].value=1.2, lk[3].value=0.98, lk[4].value=1.06, lk[5].value=1.66, lk[6].value=1.43, lk[7].value=1.58, lk[8].value=1.21, lk[9].value=1.36, lk[10].value=1.19, lk[11].value=1.09, lk[12].value=1.07, lk[13].value=1.11, lk[14].value=1.17, lk[15].value=1.24, lk[16].value=1.32, lk[17].value=1.38
        forsopr[0]=0.03, forsopr[1]=0.022, forsopr[2]=0.025, forsopr[3]=0.019, forsopr[4]=0.016, forsopr[5]=0.034, forsopr[6]=0.03, forsopr[7]=0.032, forsopr[8]=0.025, forsopr[9]=0.022, forsopr[10]=0.038, forsopr[11]=0.033, forsopr[12]=0.035, forsopr[13]=0.03, forsopr[14]=0.025, forsopr[15]=0.022, forsopr[16]=0.041, forsopr[17]=0.034;
    }
    else if(ugol.value==10){
        lk[0].value=0.85, lk[1].value=0.75, lk[2].value=0.8, lk[3].value=0.65, lk[4].value=0.7, lk[5].value=1.1, lk[6].value=0.95, lk[7].value=1.05, lk[8].value=0.8, lk[9].value=0.9, lk[10].value=0.8, lk[11].value=0.72, lk[12].value=0.7, lk[13].value=0.74, lk[14].value=0.78, lk[15].value=0.82, lk[16].value=0.88, lk[17].value=0.92
        forsopr[0]=0.019, forsopr[1]=0.015, forsopr[2]=0.017, forsopr[3]=0.013, forsopr[4]=0.011, forsopr[5]=0.023, forsopr[6]=0.02, forsopr[7]=0.022, forsopr[8]=0.017, forsopr[9]=0.015, forsopr[10]=0.026, forsopr[11]=0.022, forsopr[12]=0.024, forsopr[13]=0.02, forsopr[14]=0.017, forsopr[15]=0.015, forsopr[16]=0.028, forsopr[17]=0.023;
    }
    else{
        lk[0].value=0.1, lk[1].value=0.05, lk[2].value=0.08, lk[3].value=0.12, lk[4].value=0.09, lk[5].value=0.13, lk[6].value=0.07, lk[7].value=0.11, lk[8].value=0.16, lk[9].value=0.14, lk[10].value=0.18, lk[11].value=0.06, lk[12].value=0.12, lk[13].value=0.1, lk[14].value=0.05, lk[15].value=0.08, lk[16].value=0.03, lk[17].value=0.04
        forsopr[0]=0.001, forsopr[1]=0.008, forsopr[2]=0.009, forsopr[3]=0.007, forsopr[4]=0.006, forsopr[5]=0.013, forsopr[6]=0.011, forsopr[7]=0.013, forsopr[8]=0.009, forsopr[9]=0.008, forsopr[10]=0.014, forsopr[11]=0.012, forsopr[12]=0.013, forsopr[13]=0.011, forsopr[14]=0.009, forsopr[15]=0.008, forsopr[16]=0.015, forsopr[17]=0.013;
    }
})
const Кнопочка=document.getElementById("Кнопка");
Кнопочка.addEventListener("click", function(){
    for (let jud=0; jud<5; jud++){
        if (dic[jud].checked){
            for (let hge=0; hge<18; hge++){
                if (lk[hge].checked){
                    var perem = lk[hge].value
                    var effzn = forsopr[hge]
                }
            }
        }
    }
    if (perem!='on' && perem){
        let cho = document.getElementById("purpose")
        let ps = document.getElementById("параметр5").value;
        if (cho.value == 'мм.рт.ст.'){
            var pp=ps*133.322
        }
        else{
            var pp = ps
        }
        const R=287.058
        let tc=document.getElementById("параметр4").value;
        let tk=Number(tc)+273.15
        let rho=pp/(R*tk)
        console.log(rho)
        let c=document.getElementById("параметр2").value;
        let d=document.getElementById("параметр3").value;
        let itd = d * effzn
        document.getElementById("вывод").innerHTML = perem*rho*c*c*d*0.5 + " Ньютонов";

    }
    else if (perem=='on'){
        document.getElementById("вывод").innerHTML = "Не указан угол наклона";
    }
    else{
        document.getElementById("вывод").innerHTML = "Не указаны профиль и форма крыла";
    }
})
var l=0
var a1=document.getElementById("симметрия")
var a2=document.getElementById("асимметрия")
var a3=document.getElementById("плоский")
var a4=document.getElementById("наклвниз")
var a55=document.getElementById("волной")
var lk=document.querySelectorAll('input[name="профкрыл"]')
var forsopr = []
for (let i=0; i<18;i++){
    forsopr[i]=i
}
var mas=[a1, a2, a3, a4, a55]
var dic=document.querySelectorAll('input[name="выбор"]')
dic.forEach(lik => {
    lik.addEventListener("change", function(){
        for (let i=0; i<5 ;i++){
            mas[i].className="выпвыбор"
        }
        for (let y=0; y<5 ;y++){
            if (dic[y].checked){
                l=y
            }
        }
        forone.push(window.scrollY + document.querySelectorAll("#крылья")[l].getBoundingClientRect().top)
        mas[l].className=""
        window.scrollTo(0, forone[0])
        forone.shift()
        for (let p=0; p<18 ;p++){
            lk[p].checked=false
        }
    })
})
let b3=document.getElementById("табло")
let b1=document.getElementById("совет")
b1.innerHTML = "Показать";
b1.addEventListener("click", function(){
    if (b3.className==""){
        b3.className="таблица"
        b1.innerHTML = "Показать";
    }
    else{
        b3.className=""
        b1.innerHTML = "Скрыть";
    }
})
let c1=document.getElementById("подъёмка")
let c3=document.getElementById("подъёмная сила")
c1.innerHTML="Показать"
c1.addEventListener("click", function(){
    if (c3.className==""){
        c3.className="расчёт1"
        c1.innerHTML = "Показать";
    }
    else{
        c3.className=""
        c1.innerHTML = "Скрыть";
        for (let ind=0; ind<5; ind++){
            dic[ind].checked=false;
            mas[ind].className="выпвыбор"
        }
        for (let p=0; p<18 ;p++){
            lk[p].checked=false
        }
        document.getElementById("вывод").innerHTML = ''
    }
})
let d1=document.getElementById("формулы")
let d3=document.getElementById("сноска")
d1.innerHTML="Показать"
d1.addEventListener("click", function(){
    if (d3.className==""){
        d3.className="сносить"
        d1.innerHTML = "Показать";
    }
    else{
        d3.className=""
        d1.innerHTML = "Скрыть";
    }
})
var nov=document.getElementById("Нажми")
nov.addEventListener("click", function(){
    let arg=document.getElementById("мактол").value
    let ban=document.getElementById("хорда").value
    let it=arg/ban
    if (it){
        document.getElementById("вывотн").innerHTML = it *100 + '%'
    }
    else{
        document.getElementById("вывотн").innerHTML = "Не указаны толщина и хорда крыла";
    }
})
var pok=document.getElementById("покотн")
pok.textContent="Показать"
var tol=document.getElementById("Толкрыл")
pok.addEventListener("click", function(){
    if (tol.className==""){
        tol.className = "убери"
        pok.textContent = "Показать"
        document.getElementById("вывотн").innerHTML = "";
    }
    else{
        tol.className = ""
        pok.textContent = "Скрыть"
    }
})
var fuz = document.getElementById("удлиненф")
var fuzal = document.getElementById("уфюз")
fuzal.textContent = "Показать"
fuzal.addEventListener("click", function(){
    if (fuz.className==""){
        fuz.className="сносить"
        fuzal.textContent = "Показать";
        document.getElementById("вывудлф").innerHTML = ""
    }
    else{
        fuz.className=""
        fuzal.textContent = "Скрыть";
    }
})
var drinkme = document.getElementById("выпей")
drinkme.addEventListener("click", function(){
    let lenf =  document.getElementById("длинфюз").value
    let nbd =  document.getElementById("мидсеч").value
    let lpn = lenf/nbd
    if (lpn){
        document.getElementById("вывудлф").innerHTML = lpn 
    }
    else{
        document.getElementById("вывудлф").innerHTML = "Не указаны длина и наибольший диаметр фюзеляжа";
    }  
})
const chertbut = document.getElementById("чертила")
const chertdiv= document.getElementById("групчерт")
chertbut.textContent = "Показать"
chertbut.addEventListener("click", function(){
    if (chertdiv.className == ""){
        chertdiv.className = "надодлячерч"
        chertbut.textContent = "Показать"
    }
    else{
        chertdiv.className = ""
        chertbut.textContent = "Скрыть"
    }
})
var forone = []
spischerch = document.querySelectorAll("#чертежи")
spischerch.forEach(nowelem => {
    nowelem.addEventListener("click", function(){
        var coordy = window.scrollY
        if (nowelem.className == ""){
            nowelem.className = "увелчерч"
            forone.push(coordy)
        }
        else{
            nowelem.className = ""
            window.scrollTo(0, forone[0])
            forone.shift()
        }
    })
})
