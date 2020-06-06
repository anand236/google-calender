
var dd = new Date();

function renderDate() {                 //this functon automatically executes when page loads
    
    // this step shows the current date, month and year in the navbar

    var today = dd.getDate();

    var month = ['jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    var mm = dd.getMonth();
    
    var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    
    var dday = dd.getDay();
    
    var current_week = week[dday]
    
    var word_month = month[mm];
    
    var yy = dd.getFullYear();

    //this line shows the output in navbar
    document.getElementById('todays_date').innerHTML ='<b>'+ current_week+ '</b>' + ' '+ word_month + ' ' + today + ' ' + yy;    



    // this step gives the exact end date of the month which can differ from month to month and im using it in for loop for the length of the month

    var end_date = new Date(dd.getFullYear(), dd.getMonth() + 1, 0).getDate();
    console.log(end_date)

    //this step for showing previous month dates

    var prev_month_date = new Date(dd.getFullYear(), dd.getMonth(), 0).getDate();
    console.log(prev_month_date)


    var date_number = '';

    var todays_Date = dd.setDate(1);
    var current_day = dd.getDay();
 
    // this step for matching the current day and date

    for (var x = current_day; x > 0; x--) {
        date_number = date_number + '<div>' + (prev_month_date - x +1) + '</div>';    
    }

    // this step is for positioning the dates according to day

    for (var i = 1; i <= end_date; i++) {

        var thisDay = new Date();

        if (i == thisDay.getDate() && dd.getMonth() == thisDay.getMonth()) {
            date_number = date_number + '<div class="today">' + i + '</div>';     // this step changes the color of the date according to current date,using today class for color change

        }

        //this step shows the national holidays in red color

        else if (i == 26 && dd.getMonth() == 0) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Republic day</p></div>';
        }
        else if (i == 1 && dd.getMonth() == 0) {
            date_number = date_number + '<div class="holidays">' + i + '<p>New Year</p></div>';
        }
        else if (i == 1 && dd.getMonth() == 0) {
            date_number = date_number + '<div class="holidays">' + i + '<p>New Year</p></div>';
        }
        else if (i == 10 && dd.getMonth() == 2) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Holi</p></div>';
        }

        else if (i == 14 && dd.getMonth() == 3) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Ambedkar Jayanti</p></div>';
        }
        else if (i == 25 && dd.getMonth() == 4) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Ramzaan</p></div>';
        }

        else if (i == 31 && dd.getMonth() == 6) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Bakr id</p></div>';
        }

        else if (i == 15 && dd.getMonth() == 7) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Independence day</p></div>';
        }
        else if (i == 25 && dd.getMonth() == 9) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Dussehra</p></div>';
        }
        else if (i == 14 && dd.getMonth() == 10) {
            date_number = date_number + '<div class="holidays">' + i + '<p>Diwaali</p></div>';
        }
        else if (i == 25 && dd.getMonth() == 11) {
            date_number = date_number + '<div class="holidays">' + i + '<p>christmas</p></div>';
        }
        else {
            date_number = date_number + '<div class="day">' + i + '</div>';
        }
    }
    document.getElementsByClassName('days')[0].innerHTML = date_number;
}


//this step is for after clicking next button to  move to next month
function next_month(para) {
    if (para === 'next') {
        dd.setMonth(dd.getMonth() + 1);
        renderDate();
    }
}


//this step is for after clicking next button to  move to prev month
function prev_month(para2) {
    if (para2 === 'prev') {
        dd.setMonth(dd.getMonth() - 1);
        renderDate();
    }
}

//this shows when a day clicked a modal pops up to add a reminder or any event
$(document).ready(function(){
    $('div.days').on('click','div',function(){
        $('#popup').modal('show')
    })
})

//this is for getting the current date to show in the modal

var modal_day = new Date()

var modal_date = modal_day.getDate();

var modal_month = modal_day.getMonth()+1;

var month = ['jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var modal_month_final = month[modal_month]

var modal_year = modal_day.getFullYear();

document.getElementById('modalDate').innerHTML = modal_date+ ' '+modal_month_final +' '+ modal_year + ' - '+modal_date+ ' '+modal_month_final +' '+ modal_year


 




