export function getFormattedDateTimeNow() {
  const monthName = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const now = new Date();
  const day = now.getDate();
  const month = monthName[now.getMonth()];
  const year = now.getFullYear();

  return `${day} ${month} ${year}`;
}
