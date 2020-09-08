// vars
var saveBtn = document.querySelector("#saveBtn");
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17" ]
var  text = "";
// var value = document.querySelector(".description")
// var myStorage = window.localStorage;
// var aValue = storage.getItem(keyName);
var currentHour = moment().hour();

// // vars for each hour 
// var t9 =   localStorage.getItem("9am");
// var t10 =  localStorage.getItem("10am");
// var t11 =  localStorage.getItem("11am");
// var t12 =  localStorage.getItem("12pm");
// var t13 =  localStorage.getItem("1pm");
// var t14 =  localStorage.getItem("2pm");
// var t15 =  localStorage.getItem("3pm");
// var t16 =  localStorage.getItem("4pm");
// var t17 =  localStorage.getItem("5pm");


// add current day and date with moments to #currentDay
var update = function() {
document.querySelector("#currentDay").innerHTML = moment().format('LLLL');
}
setInterval(update, 1000);


// function readFromLocalStorage ()
    //   (this is to look for anything saved previously in local storage)

// document.querySelector(".description").innerHTML = localStorage.getItem("")
    //         use for loop
    for(i = 0; i < hours.length; i++) {
    //             - read value from time property

    //             - assign as text back in element (using its class (.description) and id (specific to each hour)
    //                 document.querySelector(".description").innerHTML = text;

    //             - check current hour vs time slot (to determine color of text area)
    //             - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
                    if (hours[0] == currentHour) {
                    $("#hour9")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[0] < currentHour) {
                    $("#hour9")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[0] > currentHour) {
                    $("#hour9")                    
                    .addClass("future")
                    .removeClass("present past");
                    };
                    
                    if (hours[1] == currentHour) {
                    $("#hour10")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[1] < currentHour) {
                    $("#hour10")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[1] > currentHour) {
                    $("#hour10")                    
                    .addClass("future")
                    .removeClass("present past");
                    };

                    if (hours[2] == currentHour) {
                    $("#hour11")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[2] < currentHour) {
                    $("#hour11")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[2] > currentHour) {
                    $("#hour11")                    
                    .addClass("future")
                    .removeClass("present past")
                    };

                    if (hours[3] == currentHour) {
                    $("#hour12")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[3] < currentHour) {
                    $("#hour12")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[3] > currentHour) {
                    $("#hour12")                    
                    .addClass("future")
                    .removeClass("present past");
                    };

                    if (hours[4] == currentHour) {
                    $("#hour13")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[4] < currentHour) {
                    $("#hour13")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[4] > currentHour) {
                    $("#hour13")                    
                    .addClass("future")
                    .removeClass("present past");
                    };

                    if (hours[5] == currentHour) {
                    $("#hour14")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[5] < currentHour) {
                    $("#hour14")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[5] > currentHour) {
                    $("#hour14")                    
                    .addClass("future")
                    .removeClass("present past");
                    };

                    if (hours[6] == currentHour) {
                    $("#hour15")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[6] < currentHour) {
                    $("#hour15")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[6] > currentHour) {
                    $("#hour15")                    
                    .addClass("future")
                    .removeClass("present past");
                    };

                    if (hours[7] == currentHour) {
                    $("#hour16")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[7] < currentHour) {
                    $("#hour16")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[7] > currentHour) {
                    $("#hour16")                    
                    .addClass("future")
                    .removeClass("present past");
                    };

                    if (hours[8] == currentHour) {
                    $("#hour17")
                    .addClass("present")
                    .removeClass ("future past")    
                    }   
                    else if (hours[8] < currentHour) {
                    $("#hour17")
                    .addClass("past")
                    .removeClass("future present")
                    }
                    else if (hours[8] > currentHour) {
                    $("#hour17")                    
                    .addClass("future")
                    .removeClass("present past")
                    }
            
                console.log(hours[i], currentHour)
    }

//    function writeToLocalStorage () {
//(this is to save a value from the text area to local storage, using the hour as the key when save button is clicked)
 // add click event to save button class to run function         


// $(saveBtn).on("click" , "writeToLocalStorage() {

// //     //             - read text from text area (class = "description", should be parent of save button)
//                         myStorage.getItem(".description")
// //     //             - read schedule hour
//                         .getHour()
// //     //             - trim text, trim schedule hour
//                         .trim()
// //     //             - send to local storage
//                         myStorage.setItem(".description")
//   });      
    
//     }

// call readFromLocalStorage(); 
