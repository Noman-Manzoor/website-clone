burgerevent = document.getElementById("burger");
// console.log(burger)
burgerevent.addEventListener("m", () => {
    document.getElementsByTagName("nav")[0].style.height = '100vh';
    document.getElementById("disapear1").style.display = 'block';
    document.getElementById("disapear2").style.display = 'block';
    document.getElementById("disapear3").style.display = 'block';
    document.getElementById("disapear4").style.display = 'block';
    document.getElementById("disapear5").style.display = 'block';
});

// burgerevent.addEventListener("click", () => {
//     document.getElementById("disapear1").classList.toggle = 'disapear';
//     document.getElementById("disapear2").classList.toggle = 'disapear';
//     document.getElementById("disapear3").classList.toggle = 'disapear';
//     document.getElementById("disapear4").classList.toggle = 'disapear';
//     document.getElementById("disapear5").classList.toggle = 'disapear';
// });
// burgerevent.addEventListener("ondblclick", () => {
//     document.getElementById("disapear1").style.display = 'none';
//     document.getElementById("disapear2").style.display = 'none';
//     document.getElementById("disapear3").style.display = 'none';
//     document.getElementById("disapear4").style.display = 'none';
//     document.getElementById("disapear5").style.display = 'none';
// });

function nav_responsive() {


    // document.getElementById("disapear1").classList.toggle("disapear");
    // document.getElementById("disapear2").classList.toggle("disapear");
    // document.getElementById("disapear3").classList.toggle("disapear");
    // document.getElementById("disapear4").classList.toggle("disapear");
    // document.getElementById("disapear5").classList.toggle("disapear");

}