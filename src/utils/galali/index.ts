import moment from "jalali-moment";
// this function return date in "YYYY/MM/DD"  (EG: 1403/15/05)
export function getJalaliDate() {
  const now = moment().locale("fa");
  return now.format("YYYY/MM/DD");
}
