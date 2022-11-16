const moment = require("moment");

// Standardizing dates in handlebars templates
function format_date(date) {
  // Format date as MM/DD/YYYY
  return moment(date).format("MM/DD/Y");
}

// Cutting off excessively long text for card rendering purposes
function textSummary(text) {
  if (text.length < 50) {
    return text;
  } else {
    return text.slice(0, 50) + "...";
  }
}

// Cutting off excessively long text for dashboard cards, but not as strict
function dashSummary(text) {
  if (text.length < 50) {
    return text;
  } else {
    return text.slice(0, 150) + "...";
  }
}

module.exports = {
  format_date,
  textSummary,
  dashSummary,
};
