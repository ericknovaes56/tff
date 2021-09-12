document.getElementById("a1").addEventListener("click", function(){
    document.getElementById("a1").classList.add("active")
    document.getElementById("a2").classList.remove("active")
    document.getElementById("a3").classList.remove("active")
})
document.getElementById("a2").addEventListener("click", function(){
    document.getElementById("a2").classList.add("active")
    document.getElementById("a3").classList.remove("active")
    document.getElementById("a1").classList.remove("active")
})
document.getElementById("a4").addEventListener("click", function(){
    document.getElementById("a2").classList.add("active")
    document.getElementById("a3").classList.remove("active")
    document.getElementById("a1").classList.remove("active")
})
document.getElementById("a3").addEventListener("click", function(){
    document.getElementById("a3").classList.add("active")
    document.getElementById("a2").classList.remove("active")
    document.getElementById("a1").classList.remove("active")

})
window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop <= 50){
        document.getElementById("a1").classList.add("active")
        document.getElementById("a2").classList.remove("active")
        document.getElementById("a3").classList.remove("active")
    }
    if (document.documentElement.scrollTop >= 50){
        document.getElementById("menu").style.width="100%"
        document.getElementById("menu").style.marginTop="0"
        document.getElementById("menu").style.borderRadius="0"
        document.getElementById("menu").style.borderTop="none"
        document.getElementById("menu").style.borderBottom="none"
        document.getElementById("backt").style.bottom="0"
    }
    else {
        document.getElementById("menu").style.width="90%"
        document.getElementById("menu").style.marginTop="30px"
        document.getElementById("menu").style.borderRadius="10px"
        document.getElementById("menu").style.borderTop=""
        document.getElementById("menu").style.borderBottom=""
        document.getElementById("backt").style.bottom="-1000px"
    }
    const l1=document.getElementById("sobre")
    const l2 = l1.getBoundingClientRect().top
    if (document.documentElement.scrollTop >= l2 - 300){
        document.getElementById("a2").classList.add("active")
        document.getElementById("a1").classList.remove("active")
        document.getElementById("a3").classList.remove("active")
    }
    const l3=document.getElementById("regras")
    const l4 = l3.getBoundingClientRect().top
    if (document.documentElement.scrollTop >= l4 + 600){
        document.getElementById("a3").classList.add("active")
        document.getElementById("a1").classList.remove("active")
        document.getElementById("a2").classList.remove("active")
    }
    const m1 = document.getElementById("body")
    const m2 = m1.getBoundingClientRect().bottom
    if(document.documentElement.scrollTop >= m2){
        document.querySelector(".mi1").classList.add("active1")
    }
    else{
        document.querySelector(".mi1").classList.remove("active1")
    }
    if (document.documentElement.scrollTop <= 50){
        document.getElementById("a21").classList.add("active")
        document.getElementById("a22").classList.remove("active")
        document.getElementById("a23").classList.remove("active")
    }
    const l21=document.getElementById("sobre")
    const l22 = l21.getBoundingClientRect().top
    if (document.documentElement.scrollTop >= l22 - 300){
        document.getElementById("a22").classList.add("active")
        document.getElementById("a21").classList.remove("active")
        document.getElementById("a23").classList.remove("active")
    }
    const l23=document.getElementById("regras")
    const l24 = l23.getBoundingClientRect().top
    if (document.documentElement.scrollTop >= l24 + 600){
        document.getElementById("a23").classList.add("active")
        document.getElementById("a21").classList.remove("active")
        document.getElementById("a22").classList.remove("active")
    }
})

document.getElementById("back").addEventListener("click" , function(){
    var k1 = document.getElementById("back1")
    k1.style.height="230px"
    document.querySelector(".lollol").style.display="none"
    document.getElementById("clo").style.display="flex"
    document.getElementById("clo").style.marginTop="45px"
    const n1 =document.querySelectorAll(".s1")
    n1.forEach((n2) => {
        n2.style.display="block"
    });
})
document.getElementById("clo").addEventListener("click" , function(){
    var k1 = document.getElementById("back1")
    k1.style.height="60px"
    document.querySelector(".lollol").style.display="flex"
    document.getElementById("clo").style.display="none"
    document.getElementById("clo").style.marginTop="45px"
    const n1 =document.querySelectorAll(".s1")
    n1.forEach((n2) => {
        n2.style.display="none"
    });
})

