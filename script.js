$(document).ready(function () {
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

  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()

  const day = $(".calendar-dates")
  const currdate = $(".calendar-current-date")
  const prenexIcons = $(".calendar-navigation span")
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

  const manipulate = () => {
    let dayone = new Date(year, month, 1).getDay()
    let lastdate = new Date(year, month + 1, 0).getDate()
    let dayend = new Date(year, month, lastdate).getDay()
    let monthlastdate = new Date(year, month, 0).getDate()
    let lit = ""

    for (let i = dayone; i > 0; i--) {
      lit += `<li class="inactive">${monthlastdate - i + 1}</li>`
    }

    for (let i = 1; i <= lastdate; i++) {
      let isAppointment = false
      let dateMonth,
        dateYear,
        dateDay,
        calendarDay = i

      $.each(dateArr, function (i) {
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

      lit += `<li class="${liClass}" id="${
        month + 1
      }/${calendarDay}/${year}">${i}</li>`
    }

    for (let i = dayend; i < 6; i++) {
      lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    currdate.text(`${months[month]} ${year}`)
    day.html(lit)
  }

  let dateArr = []
  let fullDateArr = []
  let timeArr = []

  function populateDates() {
    $.each(apptTimes, function (i) {
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

  prenexIcons.on("click", function () {
    $(".btn-container").empty()
    month = $(this).attr("id") === "calendar-prev" ? month - 1 : month + 1

    if (month < 0 || month > 11) {
      let newDate = new Date(year, month, new Date().getDate())
      year = newDate.getFullYear()
      month = newDate.getMonth()
    }

    manipulate()
  })

  const btnContainer = $(".btn-container")

  day.on("click", "li.active", function () {
    const clickedDate = $(this).attr("id")

    console.log(clickedDate)

    btnContainer.empty()

    $.each(apptTimes, function (i) {
      if (apptTimes[i].includes(clickedDate)) {
        const apptDateTime = apptTimes[i].split(" ").splice(1, 2)
        const time = apptDateTime[0].split(":").splice(0, 2).join(":")
        const AMPM = apptDateTime[1]
        const apptTime = `${time} ${AMPM}`
        btnContainer.append(`<button class="appt-btn">${apptTime}</button>`)
      }
    })
  })

  btnContainer.on("click", ".appt-btn", function () {
    console.log($(this).text())
  })
})
