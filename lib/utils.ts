import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateTimeOptions = () => {
  const times: { hour: string; times: string[] }[] = [];
  let hour = 13; // Start at 1 PM (13:00 in 24-hour format)
  let minute = 0;

  // Loop to generate times between 01:00 PM and 11:00 PM in 10-minute intervals
  while (hour < 22 || (hour === 22 && minute <= 50)) {
    const formattedHour = hour > 12 ? hour - 12 : hour; // Convert to 12-hour format
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const period = hour < 12 || hour === 24 ? "AM" : "PM";
    const time = `${formattedHour}:${formattedMinute} ${period}`;

    // Group times by hour
    const hourLabel = `${formattedHour} ${period}`;
    let hourGroup = times.find((h) => h.hour === hourLabel);
    if (!hourGroup) {
      hourGroup = { hour: hourLabel, times: [] };
      times.push(hourGroup);
    }
    hourGroup.times.push(time);

    minute += 20;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }

  return times;
};
