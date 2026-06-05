import { DateTime } from "luxon";

// All app-facing dates render in Belgrade local time regardless of server TZ.
export const APP_TIMEZONE = "Europe/Belgrade";
export const APP_LOCALE = "sr-Latn";

/** Current time in the app timezone. */
export function nowBelgrade(): DateTime {
  return DateTime.now().setZone(APP_TIMEZONE);
}

/** Format a Date/ISO string in Belgrade time. Defaults to e.g. "05.06.2026. 19:40". */
export function formatBelgrade(
  value: Date | string,
  format = "dd.MM.yyyy. HH:mm",
): string {
  const dt =
    typeof value === "string"
      ? DateTime.fromISO(value, { zone: APP_TIMEZONE })
      : DateTime.fromJSDate(value, { zone: APP_TIMEZONE });
  return dt.setLocale(APP_LOCALE).toFormat(format);
}
