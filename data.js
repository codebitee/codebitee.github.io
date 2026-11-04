/* codebitee: add new items here, one block per line. The page builds the cards and the search from this list.

   type : "tool", "featured" or "blog"
   name : title shown on the card
   desc : short one-line description (optional)
   link : where the card opens. Leave "" to show "soon".
            - your own page or repo site:  "/tools/json-formatter.html"  or  "/my-repo/"
            - another website:             "https://example.com"  (opens in a new tab)
   icon : tools only, 1-2 characters shown in the small square
   tag  : featured only, e.g. "HTML / JS"
   date : blog only, e.g. "3 Nov 2026"
*/
window.SITE_ITEMS = [
  // ---- Tools ----
  { type: "tool", name: "GetYT", desc: "Download Youtube Videos.", icon: "[YT]", link: "https://codebitee.github.io/GetYT/" },
  { type: "tool", name: "Text Counter", desc: "Words and characters.", icon: "Aa", link: "" },
  { type: "tool", name: "Converter", desc: "Units made simple.", icon: "\u21C4", link: "" },
  { type: "tool", name: "Color Picker", desc: "Pick and copy colors.", icon: "\u25D0", link: "" },
  { type: "tool", name: "Base64", desc: "Encode and decode.", icon: "64", link: "" },
  { type: "tool", name: "QR Maker", desc: "Make a QR code.", icon: "\u25A6", link: "" },
  { type: "tool", name: "Timer", desc: "A simple countdown.", icon: "\u25F7", link: "" },
  { type: "tool", name: "Notes", desc: "Quick scratchpad.", icon: "\u270E", link: "" },

  // ---- Featured ----
  { type: "featured", name: "First big tool", tag: "Coming soon", link: "" },
  { type: "featured", name: "Open data set", tag: "Coming soon", link: "" },
  { type: "featured", name: "Experiment", tag: "Coming soon", link: "" },

  // ---- Blogs ----
  { type: "blog", name: "Article template (example)", desc: "A sample page to copy for new articles.", date: "Example", link: "/blog/article-template.html" },
  { type: "blog", name: "How a tool was built", link: "" },
  { type: "blog", name: "Notes and tips", link: "" }
];
