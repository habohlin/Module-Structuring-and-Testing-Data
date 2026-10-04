function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  let period = "";
  let hourString = "";

  if (hours <= 11) {
    period = "am";
  } else {
    period = "pm";
  }

  if (hours >= 13) {
    hourString = hours - 12 < 10 ? `0${hours - 12}` : `${hours - 12}`;
  } else if (hours === 0) {
    hourString = `${hours + 12}`;
  } else {
    hourString = hours < 10 ? `0${hours}` : `${hours}`;
  }

  return `${hourString}:${minutes} ${period}`;
}

export { formatAs12HourClock };
