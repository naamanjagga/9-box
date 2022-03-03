var count = 0;
$(document).ready(function() {
   
    $('#td1').css('background-color','rgb(0, 0, 0)')
    $('#td3').css('background-color','rgb(0, 0, 0)')
    $('#td5').css('background-color','rgb(0, 0, 0)')
    $('#td7').css('background-color','rgb(0, 0, 0)')
    $('#td9').css('background-color','rgb(0, 0, 0)')
    
})

$('#td1').on('click' , function() {

    if(count == 10){
        alert('you lose')
    }
    else{
    count++;
    if ($("#td1").css('background-color')=="rgb(0, 0, 0)") {
        $('#td1').css('background-color','rgb(255, 255, 255)')
        if($("#td2").css('background-color')=="rgb(0, 0, 0)"){
           $('#td2').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td2').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td4").css('background-color')=="rgb(0, 0, 0)"){
            $('#td4').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td4').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td1').css('background-color','rgb(0, 0, 0)')
        if($("#td2").css('background-color')=="rgb(0, 0, 0)"){
            $('#td2').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td2').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td4").css('background-color')=="rgb(0, 0, 0)"){
             $('#td4').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td4').css('background-color','rgb(0, 0, 0)')
          }
    }
}

if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}  
})

$('#td2').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td2").css('background-color')=="rgb(0, 0, 0)") {
        $('#td2').css('background-color','rgb(255, 255, 255)')
        if($("#td1").css('background-color')=="rgb(0, 0, 0)"){
           $('#td1').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td1').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td3").css('background-color')=="rgb(0, 0, 0)"){
            $('#td3').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td3').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td2').css('background-color','rgb(0, 0, 0)')
        if($("#td1").css('background-color')=="rgb(0, 0, 0)"){
            $('#td1').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td1').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td3").css('background-color')=="rgb(0, 0, 0)"){
             $('#td3').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td3').css('background-color','rgb(0, 0, 0)')
          }
          if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#td4').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td4").css('background-color')=="rgb(0, 0, 0)") {
        $('#td4').css('background-color','rgb(255, 255, 255)')
        if($("#td1").css('background-color')=="rgb(0, 0, 0)"){
           $('#td1').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td1').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td7").css('background-color')=="rgb(0, 0, 0)"){
            $('#td7').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td7').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td4').css('background-color','rgb(0, 0, 0)')
        if($("#td1").css('background-color')=="rgb(0, 0, 0)"){
            $('#td1').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td1').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td7").css('background-color')=="rgb(0, 0, 0)"){
             $('#td7').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td7').css('background-color','rgb(0, 0, 0)')
          }
          if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#td6').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td6").css('background-color')=="rgb(0, 0, 0)") {
        $('#td6').css('background-color','rgb(255, 255, 255)')
        if($("#td9").css('background-color')=="rgb(0, 0, 0)"){
           $('#td9').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td9').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td3").css('background-color')=="rgb(0, 0, 0)"){
            $('#td3').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td3').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td6').css('background-color','rgb(0, 0, 0)')
        if($("#td9").css('background-color')=="rgb(0, 0, 0)"){
            $('#td9').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td9').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td3").css('background-color')=="rgb(0, 0, 0)"){
             $('#td3').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td3').css('background-color','rgb(0, 0, 0)')
          }
          if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}  
})

$('#td8').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td8").css('background-color')=="rgb(0, 0, 0)") {
        $('#td8').css('background-color','rgb(255, 255, 255)')
        if($("#td7").css('background-color')=="rgb(0, 0, 0)"){
           $('#td7').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td7').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td9").css('background-color')=="rgb(0, 0, 0)"){
            $('#td9').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td9').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td8').css('background-color','rgb(0, 0, 0)')
        if($("#td7").css('background-color')=="rgb(0, 0, 0)"){
            $('#td7').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td7').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td9").css('background-color')=="rgb(0, 0, 0)"){
             $('#td9').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td9').css('background-color','rgb(0, 0, 0)')
          }
          if($("#td5").css('background-color')=="rgb(0, 0, 0)"){
            $('#td5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#td5').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td5").css('background-color')=="rgb(0, 0, 0)") {
        $('#td5').css('background-color','rgb(255, 255, 255)')
        if($("#td2").css('background-color')=="rgb(0, 0, 0)"){
           $('#td2').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td2').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td4").css('background-color')=="rgb(0, 0, 0)"){
            $('#td4').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td4').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td6").css('background-color')=="rgb(0, 0, 0)"){
            $('#td6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td6').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td8").css('background-color')=="rgb(0, 0, 0)"){
            $('#td8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td8').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td5').css('background-color','rgb(0, 0, 0)')
        if($("#td2").css('background-color')=="rgb(0, 0, 0)"){
            $('#td2').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td2').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td4").css('background-color')=="rgb(0, 0, 0)"){
             $('#td4').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td4').css('background-color','rgb(0, 0, 0)')
          }
          if($("#td6").css('background-color')=="rgb(0, 0, 0)"){
            $('#td6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td6').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td8").css('background-color')=="rgb(0, 0, 0)"){
            $('#td8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td8').css('background-color','rgb(0, 0, 0)')
         }
    }
}

if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#td3').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td3").css('background-color')=="rgb(0, 0, 0)") {
        $('#td3').css('background-color','rgb(255, 255, 255)')
        if($("#td2").css('background-color')=="rgb(0, 0, 0)"){
           $('#td2').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td2').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td6").css('background-color')=="rgb(0, 0, 0)"){
            $('#td6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td6').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td3').css('background-color','rgb(0, 0, 0)')
        if($("#td2").css('background-color')=="rgb(0, 0, 0)"){
            $('#td2').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td2').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td6").css('background-color')=="rgb(0, 0, 0)"){
             $('#td6').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td6').css('background-color','rgb(0, 0, 0)')
          }console.log(count);
    }
}
if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
} 
})
$('#td7').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td7").css('background-color')=="rgb(0, 0, 0)") {
        $('#td7').css('background-color','rgb(255, 255, 255)')
        if($("#td8").css('background-color')=="rgb(0, 0, 0)"){
           $('#td8').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td8').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td4").css('background-color')=="rgb(0, 0, 0)"){
            $('#td4').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td4').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td7').css('background-color','rgb(0, 0, 0)')
        if($("#td8").css('background-color')=="rgb(0, 0, 0)"){
            $('#td8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td8').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td4").css('background-color')=="rgb(0, 0, 0)"){
             $('#td4').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td4').css('background-color','rgb(0, 0, 0)')
          }
    }console.log(count);
}
if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})
$('#td9').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#td9").css('background-color')=="rgb(0, 0, 0)") {
        $('#td9').css('background-color','rgb(255, 255, 255)')
        if($("#td6").css('background-color')=="rgb(0, 0, 0)"){
           $('#td6').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#td6').css('background-color','rgb(0, 0, 0)')
        }
        if($("#td8").css('background-color')=="rgb(0, 0, 0)"){
            $('#td8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td8').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#td9').css('background-color','rgb(0, 0, 0)')
        if($("#td6").css('background-color')=="rgb(0, 0, 0)"){
            $('#td6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#td6').css('background-color','rgb(0, 0, 0)')
         }
         if($("#td8").css('background-color')=="rgb(0, 0, 0)"){
             $('#td8').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#td8').css('background-color','rgb(0, 0, 0)')
          }
    }

}

if($("#td1").css('background-color') == "rgb(255, 255, 255)" && $("#td2").css('background-color') == "rgb(255, 255, 255)" && $("#td3").css('background-color') == "rgb(255, 255, 255)" && $("#td4").css('background-color') == "rgb(255, 255, 255)" && $("#td5").css('background-color') == "rgb(255, 255, 255)" && $("#td6").css('background-color') == "rgb(255, 255, 255)" && $("#td7").css('background-color') == "rgb(255, 255, 255)" && $("#td8").css('background-color') == "rgb(255, 255, 255)" && $("#td9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})