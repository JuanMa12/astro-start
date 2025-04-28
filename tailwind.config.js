module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.blue.600"),
              fontWeight: "700",
              fontSize: "2.5rem",
            },
            h2: {
              color: theme("colors.pink.500"),
              fontWeight: "600",
              fontSize: "2rem",
            },
            p: {
              color: theme("colors.gray.700"),
              fontSize: "1.1rem",
            },
            a: {
              color: theme("colors.indigo.500"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.indigo.700"),
              },
            },
            strong: {
              color: theme("colors.black"),
            },
          },
        },
        // También puedes hacer variantes como dark mode
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: theme("colors.teal.400") },
            strong: { color: theme("colors.white") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
