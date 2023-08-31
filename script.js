var apptTimes = [
  "9/1/2023 10:00:00 AM",
  "9/1/2023 10:30:00 AM",
  "9/1/2023 2:00:00 PM",
  "9/14/2023 10:00:00 AM",
  "9/14/2023 10:30:00 AM",
  "9/14/2023 2:00:00 PM",
  "9/14/2023 2:30:00 PM",
  "9/15/2023 10:00:00 AM",
  "9/15/2023 10:30:00 AM",
  "9/15/2023 2:00:00 PM",
  "9/15/2023 2:30:00 PM",
  "9/16/2023 10:00:00 AM",
  "9/16/2023 10:30:00 AM",
  "9/16/2023 2:00:00 PM",
  "9/16/2023 2:30:00 PM",
  "9/16/2023 6:00:00 PM",
  "9/16/2023 6:30:00 PM",
  "9/16/2023 7:00:00 PM",
  "9/17/2023 10:00:00 AM",
  "9/17/2023 10:30:00 AM",
  "9/17/2023 2:00:00 PM",
  "9/17/2023 2:30:00 PM",
  "9/17/2023 6:00:00 PM",
  "9/17/2023 6:30:00 PM",
  "9/17/2023 7:00:00 PM",
  "9/19/2023 2:00:00 PM",
  "9/19/2023 2:30:00 PM",
  "9/19/2023 6:00:00 PM",
  "9/19/2023 6:30:00 PM",
  "9/19/2023 7:00:00 PM",
  "9/19/2023 2:00:00 PM",
  "9/19/2023 2:30:00 PM",
  "9/19/2023 10:00:00 AM",
  "9/19/2023 10:30:00 AM",
  "9/19/2023 6:00:00 PM",
  "9/19/2023 6:30:00 PM",
  "9/19/2023 7:00:00 PM",
  "1/20/2023 2:00:00 PM",
  "1/20/2024 2:30:00 PM",
  "1/20/2024 10:00:00 AM",
  "1/20/2024 10:30:00 AM",
  "1/20/2024 6:00:00 PM",
  "9/20/2023 6:30:00 PM",
  "9/20/2023 7:00:00 PM",
  "9/29/2023 10:00:00 AM",
  "9/29/2023 10:30:00 AM",
  "9/29/2023 2:00:00 PM",
  "9/29/2023 2:30:00 PM",
  "9/29/2023 6:00:00 PM",
  "9/29/2023 6:30:00 PM",
  "9/29/2023 7:00:00 PM",
  "9/29/2023 10:00:00 AM",
  "9/29/2023 10:30:00 AM",
  "9/29/2023 2:00:00 PM",
  "9/29/2023 2:30:00 PM",
  "9/29/2023 6:00:00 PM",
  "9/29/2023 6:30:00 PM",
  "9/29/2023 7:00:00 PM",
  "9/23/2023 10:00:00 AM",
  "9/23/2023 10:30:00 AM",
  "9/23/2023 2:00:00 PM",
  "9/23/2023 2:30:00 PM",
  "9/23/2023 6:00:00 PM",
  "9/23/2023 6:30:00 PM",
  "9/23/2023 7:00:00 PM"
]

// Using the Date() method, check to see if a date matches the date in this using jquery: 9/14/2023 10:00:00 AM
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()

const day = document.querySelector(".calendar-dates")

const currdate = document.querySelector(".calendar-current-date")

const prenexIcons = document.querySelectorAll(".calendar-navigation span")

// Array of month names
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

// Function to generate the calendar
const manipulate = () => {
  // Get the first day of the month
  let dayone = new Date(year, month, 1).getDay()

  // Get the last date of the month
  let lastdate = new Date(year, month + 1, 0).getDate()

  // Get the day of the last date of the month
  let dayend = new Date(year, month, lastdate).getDay()

  // Get the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate()

  // Variable to store the generated calendar HTML
  let lit = ""

  // Loop to add the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    // Check to see if date matches date in appt times array
    let isAppointment = false

    let dateMonth
    let dateYear
    let dateDay
    let calendarDay = i

    $(dateArr).each(function (i) {
      dateMonth = dateArr[i].split(" ")[0].split("/")[0]
      dateYear = dateArr[i].split(" ")[0].split("/")[2]
      dateDay = dateArr[i].split(" ")[0].split("/")[1]

      if (
        dateDay == calendarDay &&
        dateMonth == month + 1 &&
        dateYear == year
      ) {
        isAppointment = true
      }
    })

    let liClass = isAppointment ? "active" : "inactive"

    lit += `<li class=${liClass} id=${
      month + 1
    }/${calendarDay}/${year}>${i}</li>`
    // // Check if the current date is today
    // let isToday =
    //   i === date.getDate() &&
    //   month === new Date().getMonth() &&
    //   year === new Date().getFullYear()
    //     ? "active"
    //     : "inactive"
    // lit += `<li class="${isToday}">${i}</li>`
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`
  }

  // Update the text of the current date element
  // with the formatted current month and year
  currdate.innerText = `${months[month]} ${year}`
  // update the HTML of the dates element
  // with the generated calendar
  day.innerHTML = lit
}

let dateArr = []
let fullDateArr = []
let timeArr = []
let monthArr = []

function populateDates() {
  $(apptTimes).each(function (i) {
    let dateOnly = apptTimes[i].split(" ")[0]

    let fullTime = apptTimes[i].split(" ").splice(1, 2).join(" ")

    fullDateArr = [...dateArr, dateOnly]
    timeArr = [...timeArr, fullTime]

    dateArr = fullDateArr.filter(function (date, i) {
      return fullDateArr.indexOf(date) === i
    })

    if (i === apptTimes.length - 1) {
      manipulate()
    }
  })
}

populateDates()

//Attach a click event listener to each icon
prenexIcons.forEach((icon) => {
  // When an icon is clicked
  icon.addEventListener("click", () => {
    $(".btn-container").empty()
    // Check if the icon is "calendar-prev"
    // or "calendar-next"
    month = icon.id === "calendar-prev" ? month - 1 : month + 1

    // Check if the month is out of range
    if (month < 0 || month > 11) {
      // Set the date to the first day of the
      // month with the new year
      let newDate = new Date(year, month, new Date().getDate())

      // Set the year to the new year
      year = newDate.getFullYear()

      // Set the month to the new month
      month = newDate.getMonth()
    }

    // Call the manipulate function to
    // update the calendar display
    manipulate()
  })
})

let btnContainer = $(".btn-container")

$(".calendar-dates").on("click", "li.active", function () {
  let clickedDate = $(this).attr("id")
  btnContainer.empty()
  console.log(clickedDate)

  $(apptTimes).each(function (i) {
    if (apptTimes[i].includes(clickedDate)) {
      let apptDateTime = apptTimes[i].split(" ").splice(1, 2)

      let time = apptDateTime[0].split(":").splice(0, 2).join(":")
      let AMPM = apptDateTime[1]

      let apptTime = `${time} ${AMPM}`

      btnContainer.append(`<button class="appt-btn">${apptTime}</button>`)
    }
  })
})

btnContainer.on("click", ".appt-btn", function () {
  console.log($(this).text())
})
