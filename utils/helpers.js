const moment = require('moment')

function format_date(date) {
  // Format date as MM/DD/YYYY
  return moment(date).format('MM/DD/Y');
}

module.exports = {
  format_date,
};
