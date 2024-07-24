import blog from "blog";

blog({
  author: "Stephen Melnicki",
  title: "Stephen Melnicki",
  description: "Software Engineer",
  avatar: "/avatar.png",
  avatarClass: "rounded-full",
  links: [
    {
      title: "Email",
      url: "mailto:hello@stephenmelnicki.com",
    },
    {
      title: "GitHub",
      url: "https://github.com/stephenmelnicki",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/stephen-melnicki",
    },
  ],
  lang: "en-US",
  dateFormat: (date: Date) =>
    new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date),
});
