export const listAnnouncementsQuery = (): string => {
  return `
  SELECT
    *
  FROM
    announcements
    `
}
