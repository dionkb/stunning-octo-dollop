module.exports = {
  // This takes in a date, and formats it to a prettier output
  format_time: (date) => {
    return date.toLocaleTimeString('en-us', { year:"numeric", month:"short", day:"numeric"});
  },
};
