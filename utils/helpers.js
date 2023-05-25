module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString('en-us', { year:"numeric", month:"short", day:"numeric"});
  },
};
