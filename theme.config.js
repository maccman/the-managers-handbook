export default {
  titleSuffix: " – The Manager's Handbook",
  github: null,
  siteGithub: null,
  footerText: "2021 © Alex MacCaw",
  footerEditOnGitHubLink: false,
  logo: (
    <>
      <span className="mx-2 font-bold hidden md:inline tracking-wide text-2xl">
        The Manager's Handbook
      </span>
    </>
  ),
  head: (
    <>
      {/* Favicons, meta */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="This handbook represents the best of our collective knowledge on management and serves as the foundation of our internal training program here at Clearbit."
      />
      <meta
        name="og:description"
        content="This handbook represents the best of our collective knowledge on management and serves as the foundation of our internal training program here at Clearbit."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@clearbit" />
      <meta
        name="twitter:image"
        content="https://themanagershandbook.com/cover/square-500x500.png"
      />
      <meta name="og:title" content="The Manager's Handbook" />
      <meta
        name="og:image"
        content="https://themanagershandbook.com/cover/square-500x500.png"
      />
      <meta name="og:url" content="https://themanagershandbook.com" />
      <meta name="apple-mobile-web-app-title" content="Manager's Handbook" />
    </>
  ),
  footerText: "",
  customNav: (
    <div className="flex-none flex space-x-3 px-5">
      <a
        className="no-underline border border-purple-300 text-purple-500 px-4 py-1.5 rounded-md text-center hover:bg-purple-500 hover:text-white hover:border-purple-500 transition duration-300"
        href="https://www.amazon.com/Managers-Handbook-Alex-MacCaw-ebook/dp/B09DFFM91C/"
      >
        Kindle
      </a>
      <a
        className="no-underline border border-purple-300 text-purple-500 px-4 py-1.5 rounded-md text-center hover:bg-purple-500 hover:text-white hover:border-purple-500 transition duration-300"
        href="https://www.amazon.com/Managers-Handbook-Alex-Maccaw/dp/1737438704"
      >
        Paperback
      </a>
    </div>
  ),
};
