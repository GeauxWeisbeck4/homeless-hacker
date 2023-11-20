export default {
  siteTitle: "Homeless Hacker",
  siteDescription: "Journey with Andrew and Lisa through homelessness, love, and tech.",
  favicon: "/favicon.ico",
  siteImagePath: "/images/homelesshackerslogo.png",
  footer: "© 2023 Homeless Hacker",
  dateFormat: "dd.MM.yyyy HH:mm",
  socialMedia: {
    facebook: "homelesshacker",
    twitter: "homelesshacker4",
    linkedin: "geauxweisbeck4",
    github: "geauxweisbeck4",
  },
  pageSize: 5,
  categories: [
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
