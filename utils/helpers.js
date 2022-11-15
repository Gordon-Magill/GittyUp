const moment = require('moment')

// Standardizing dates in handlebars templates
function format_date(date) {
  // Format date as MM/DD/YYYY
  return moment(date).format('MM/DD/Y');
}

// Cutting off excessively long text
function textSummary(text) {
  if (text.length < 50) {
    return text
  } else {
    return text.slice(0, 50) + "...";
  }
}

module.exports = {
  format_date,
  textSummary,
};
