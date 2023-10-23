/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = "work",
  tuesday = "work",
  wednesday = "work",
  thursday = "work",
  friday = "work",
  saturday = "relax",
  sunday = "relax",
}

function isWeekend(day: string): boolean {
  return Days[day.toLowerCase()] === "relax";
}

console.log(isWeekend("saturday"));
