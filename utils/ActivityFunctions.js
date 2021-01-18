const formatDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return year + '-' + month + '-' + dt;
};

const formatTime = (time) => {
  return time.toLocaleTimeString(navigator.language, {
    hour: 'numeric',
    minute: '2-digit',
  });
};

const getRangeOfDatesInWeek = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  const year = startDate.getFullYear();
  const month = startDate.getMonth();
  const dayOfMonth = startDate.getDate();
  const dayOfWeek = startDate.getDay();

  const distanceFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  startDate.setDate(currentDate.getDate() - distanceFromMonday);

  const targetRange = [];
  for (let i = 0; i < 7; i++) {
    const tempDate = new Date(startDate.getTime());
    const tempUTC = new Date(tempDate.setDate(startDate.getDate() + i));
    const tempFormatted = formatDate(tempUTC);
    targetRange.push(tempFormatted);
  }
  return targetRange;
};

const countEventsInWeek = (items) => {
  const targetRange = getRangeOfDatesInWeek();
  let eventCount = 0;
  for (let dateKey of targetRange) {
    const count = items[dateKey].length;
    eventCount += count;
  }
  return eventCount;
};

const calculateActivityPercentage = (items, target) => {
  const currentEventCount = countEventsInWeek(items);
  if (currentEventCount >= target) return 100;
  else {
    return Math.ceil((currentEventCount / target) * 100);
  }
};

const calculateProgressFillerWidth = (
  percentageComplete,
  minWidth,
  maxWidth,
) => {
  const calculatedWidth = maxWidth * (percentageComplete / 100);
  return Math.max(minWidth, calculatedWidth);
};

export {
  calculateActivityPercentage,
  countEventsInWeek,
  calculateProgressFillerWidth,
  formatDate,
  formatTime,
};
