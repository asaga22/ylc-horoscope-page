export const MonthNames = [
  'January',
  'February',
  'March', 
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const toCompleteMonthName = (dateStr: string) =>  {
  // Split the input into MM and DD
  const [month, day] = dateStr.split("-").map(Number);

  // Create a date object (year is arbitrary, we only need month & day)
  const date = new Date(2000, month - 1, day); // month is 0-based in JS

  // Format the month name using Intl.DateTimeFormat
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);

  // Remove leading zero from day
  return `${monthName} ${day}`;
}

export const to3LetterMonthName = (dateStr: string) => {
  const [month, day] = dateStr.split("-").map(Number);
  const date = new Date(2000, month - 1, day);
  return `${day} ${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)}`;
}