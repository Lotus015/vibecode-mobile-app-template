export const env = {
  API_URL: process.env.EXPO_PUBLIC_API_URL!,
}

if (!env.API_URL) {
  throw new Error("Missing EXPO_PUBLIC_API_URL")
}
