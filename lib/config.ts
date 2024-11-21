export const APP_NAME = "Erez App";
export const COURSE_GITHUB = "https://github.com/product-jam-2025";
export const COURSE_CREDITS = "Product Jam 2025";

export const DEMOS_ENABLED =
  process.env.DEMOS_ENABLED === "true" ? true : false;
export const DEMOS = [
  {
    title: "tic-tac-toe",
    slug: "/tic-tac-toe",
    description: "tic-tac-toe game",
  },
  {
    title: "Nasa data",
    slug: "/nasa",
    description:
      "nasa data",
  },
  {
    title: "sockTime",
    slug: "/design",
    description:
      "sockTime design",
  },
  {
    title: "Basic Data Visualization",
    slug: "/demos/02_viz",
    description:
      "A simple example of reading data from a public API and displaying it in a chart.",
  },
  {
    title: "Random Team Generator",
    slug: "/random",
    description:
      "An example of a fully functional application that builds random teams and product ideas from this year's students.",
  },
];

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
export const EMAIL_HOST = process.env.EMAIL_HOST || "";
export const EMAIL_PORT = process.env.EMAIL_PORT || 587;

export const PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const PRIVATE_SUPABASE_SERVICE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const SUPABASE_ENABLED =
  PUBLIC_SUPABASE_URL &&
  PUBLIC_SUPABASE_ANON_KEY &&
  PRIVATE_SUPABASE_SERVICE_KEY
    ? true
    : false;

export const NASA_API_KEY = process.env.NASA_API_KEY || "";
