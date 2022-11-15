// console.log("check");
var panel1 = document.getElementById('panel-1');
var panel2 = document.getElementById('panel-2');
var panel3 = document.getElementById('panel-3');
var panel4 = document.getElementById('panel-4');

// var panelremain=document.getElementsByClassName("panel");
function resetSelected()
{
    panel1.classList.remove("selected");
    panel2.classList.remove("selected");
    panel3.classList.remove("selected");
    panel4.classList.remove("selected");
}
// console.log(panel1.classList)
function selectPanel(panelNo)
{
    resetSelected();
    console.log(panelNo);
    document.getElementById(panelNo).classList.add("selected");
}

// function selectPanel(panelNo) {
//     //remove active from all remaining elemnts
//    resetSelected();
//     switch (panelNo) {
//         case 1:
//             panel1.classList.add('selected');
//             break;
//         case 2:
//             panel2.classList.add('selected');
//             break;
//         case 3:
//             panel3.classList.add('selected');
//             break;
//         case 4:
//             panel4.classList.add('selected');
//             break;
//         // default:
//         //     panel1.classList.add('selected');
//     }
// }