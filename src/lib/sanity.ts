import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: "us3kmq59",
    dataset: "production",
    apiVersion: '2025-01-18',
  useCdn: false,
  token:"skN3fVWKLcQsdgbWpmb5k5uNGWKx1hC4XqTGjquv4AXuENHIS2XNhqkjnAoePmY9pmYvxyRiNncrGpgsOkP8Y2cuAzfWINBlbzNSJV9ukh0KAyAzF0x7m6JuVr09VlXETd4FpIXNiTbWoAdmtN7D6IPgeoFcdVnzSdIf4sxkUqIOu0viXL4W"
})

