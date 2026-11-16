// Everything on the site comes from this file.
const P = (f) => "photos/" + f;

window.SITE = {
  name: "Mihika Garg",
  eyebrow: "cs + data science · uc berkeley",
  heroName: "mihika garg",
  heroLine: "hey, i'm mihika",
  heroSub: "usually found at a cute coffee spot, on a trail, or petting someone's dog.",
  heroPhoto: P("me-trees.jpg"),

  about: {
    bg: P("tahoe-lake.jpg"),
    photo: P("me-beach-sunset.jpg"),
    caption: "",
    paras: [
      "I'm a student at UC Berkeley studying Data Science and Computer Science. I love building things that actually help people, like AI tools for kids and seniors, or systems that make sure money goes where it's supposed to.",
      "Off the clock I'm on a walk, on a trail, at the beach, or hunting for a new coffee spot. And I will stop to say hi to every single dog.",
    ],
  },

  // "right now" box: the record player cycles through the music vinyls below,
  // and the little terminal types these lines out
  building: {
    title: "student build nights",
    place: "@ Replit",
    items: [
      "40 first-time builders per night",
      "a toolkit to run it: intake, launcher, tracker",
      "measuring who ships and who comes back",
    ],
  },

  // Click any of these on the site to open its little story
  hobbies: [
    {
      emoji: "🌊", title: "the beach", blurb: "sand, waves, sunsets",
      cover: P("palm-beach.jpg"),
      story: "My favorite place to be. Give me a sunset and some waves and I'm happy for hours.",
      photos: [
        { src: P("me-beach-sunset.jpg"), caption: "golden hour" },
        { src: P("palm-beach.jpg"), caption: "under the palms" },
        { src: P("beach-horses.jpg"), caption: "horses on the beach!!" },
        { src: P("beach-surfboard.jpg"), caption: "quiet mornings" },
        { src: P("beach-sunset.jpg"), caption: "end of the day" },
      ],
    },
    {
      emoji: "🐶", title: "dogs", blurb: "especially this one",
      cover: P("dog-3.jpg"),
      story: "Meet my best friend. (He's also the little guy following you around this site.)",
      photos: [
        { src: P("dog-me.jpg"), caption: "" },
        { src: P("dog-1.jpg"), caption: "" },
        { src: P("dog-3.jpg"), caption: "" },
        { src: P("dog-selfie.jpg"), caption: "" },
      ],
    },
    {
      emoji: "🎧", title: "music", blurb: "always something playing",
      cover: P("concert.jpg"),
      collage: true,             // card shows a collage of the album covers below
      story: "What's on my record shelf lately. Tap one to give it a spin.",
      photos: [{ src: P("concert.jpg"), caption: "concert nights" }],
      vinyls: [
        { artist: "Olivia Dean", album: "The Art of Loving", tag: "on repeat", color: "#7fb3f0", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/08/e2/21/08e22164-7c0b-1522-818f-e0e74f62dc49/25UMGIM69703.rgb.jpg/600x600bb.jpg" },
        { artist: "SZA", album: "SOS", tag: "on repeat", color: "#9aa8f0", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg/600x600bb.jpg" },
        { artist: "Empire of the Sun", album: "Walking on a Dream", tag: "on repeat", color: "#5fbfc6", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3e/42/a7/3e42a78d-57a3-fd69-6703-14d51205dd4c/13UMGIM24968.rgb.jpg/600x600bb.jpg" },
        { artist: "Mac Miller", album: "The Divine Feminine", tag: "on repeat", color: "#b19df0", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/1e/5c/ad/1e5cadeb-6f0c-86a0-9e85-6487a848d866/093624917168.jpg/600x600bb.jpg" },
        { artist: "Drake", album: "Take Care", tag: "flip side", color: "#5b8bd6", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d2/53/62/d2536245-b94c-b3fd-7168-9512f655f6d4/00602527899091.rgb.jpg/600x600bb.jpg" },
        { artist: "PARTYNEXTDOOR", album: "PARTYNEXTDOOR TWO", tag: "flip side", color: "#7ccbe6", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/80/44/09/804409df-b7a1-6b68-288b-c1869b6bdfea/93624935247.jpg/600x600bb.jpg" },
      ],
    },
    {
      emoji: "💛", title: "my people", blurb: "the best part of everything",
      cover: P("friends-formal.jpg"),
      story: "Brunches, late nights, and walks by the water with the people I love.",
      photos: [
        { src: P("friends-formal.jpg"), caption: "my girls" },
        { src: P("friend-marina.jpg"), caption: "marina sunsets" },
        { src: P("friend-brunch.jpg"), caption: "brunch club" },
        { src: P("friend-dorm.jpg"), caption: "dorm nights" },
      ],
    },
    {
      emoji: "☕", title: "coffee spots", blurb: "always hunting for a new one",
      cover: P("me-jungle.jpg"),
      story: "Half hobby, half personality trait. I'm always on the hunt for a cozy new café to work from.",
      photos: [],
      list: [],               // add favorite cafés here, e.g. "Café Name — what to order"
    },
    {
      emoji: "🌲", title: "walks & hikes", blurb: "any trail, any view",
      cover: P("ocean-trees.jpg"),
      story: "Walks are how I think, and hikes are how I reset. Bonus points if the trail ends at the water.",
      photos: [
        { src: P("waterfall-jungle.jpg"), caption: "found a waterfall" },
        { src: P("ocean-trees.jpg"), caption: "worth the climb" },
        { src: P("ocean-trees-2.jpg"), caption: "framed by the trees" },
        { src: P("tahoe-walk.jpg"), caption: "lakeside walks" },
        { src: P("tahoe-lake.jpg"), caption: "that blue though" },
      ],
    },
  ],

  projects: [
    {
      emoji: "🧾", title: "Fineprint", year: "2026",
      blurb: "Turns grant PDFs into enforceable spend rules tied to their exact clauses.",
      tags: ["Python", "FastAPI", "Claude API", "Next.js"],
      link: "https://github.com/mihikaGarg/Fineprint",
      details: [
        "Co-built a grant-compliance system with 2 teammates that turns grant PDFs into typed spend rules tied to their clauses.",
        "Paired a Claude rule compiler with a deterministic engine that returns cited allow, block, or review verdicts in under 100ms.",
        "Led development (34 of 38 commits): the LLM client, policy setup chat, and the full Next.js app, backed by 137 unit tests.",
      ],
    },
    {
      emoji: "📚", title: "Alder Learning", year: "2026",
      blurb: "A voice-driven AI reading tutor for neurodivergent kids.",
      tags: ["JavaScript", "Web Speech API", "Claude API"],
      link: "https://github.com/Soham-R/Alder",
      details: [
        "Built the 2,500-line front end at Compiled Berkeley 2026.",
        "Designed 4 learning paths (reading, writing, brain games, story time) and 3 warm-up games that calibrate to each child's level.",
        "Added read-aloud and speech recognition, plus a calm mode and dyslexia-friendly reading.",
        "Built parent onboarding and daily/weekly progress reports wired to Claude-backed coaching and story APIs.",
      ],
    },
    {
      emoji: "🛝", title: "SafePlaceScan", year: "2025",
      blurb: "Computer vision that spots hazards near playgrounds, fully offline.",
      tags: ["Python", "TensorFlow", "Jetson Nano"],
      link: "",
      details: [
        "3rd place at the SJSU Cybersecurity & AI Hackathon.",
        "Merged 4 public datasets into one labeled training set and trained a TensorFlow/Keras model to detect potholes, trash, graffiti, and encampments.",
        "Deployed on an NVIDIA Jetson Nano for fully offline, on-device inference.",
      ],
    },
  ],

  education: {
    school: "UC Berkeley",
    degree: "B.A. in Data Science and Computer Science",
    college: "College of Computing, Data Science, and Society",
    dates: "Expected May 2029",
    courses: ["Foundations of Data Science", "Structure and Interpretation of Computer Programs", "Programming Concepts and Methods I (C/C++)"],
  },

  experience: [
    {
      role: "Software Developer & Data Analyst", org: "Replit (contract)", stat: "80", statLabel: "student builders", dates: "Aug 2026 – now", place: "Berkeley, CA",
      details: [
        "Writing a Python/SQL pipeline for funnel metrics: activation, ship rate, retention.",
        "Running 2 build events with 40 first-time student builders each, tracking where students get stuck and come back.",
        "Building a Replit toolkit (intake form, task launcher, milestone tracker, dashboard) to run the events.",
      ],
    },
    {
      role: "Instructor & Coach", org: "Magikid Robotics Lab", stat: "100+", statLabel: "K–6 students", dates: "Jun 2025 – Jul 2026", place: "Cupertino, CA",
      details: [
        "Mentored 100+ K–6 students in VEX Go, VEX IQ, Scratch, and Tinkercad.",
        "Launched the lab's first LEGO Spike curriculum.",
        "Taught weekly lessons on AI applications and LiDAR sensors.",
      ],
    },
    {
      role: "Co-Founder", org: "Tech with Teens", stat: "200+", statLabel: "seniors taught", dates: "Jun 2023 – May 2026", place: "San Jose, CA",
      details: [
        "Grew a tech-literacy program to 4 senior living communities, serving 200+ seniors over 300+ hours.",
        "Cold-emailed 20+ communities to land those partnerships.",
        "Designed a curriculum on scam and AI deepfake awareness, email, and video calls with family.",
      ],
    },
    {
      role: "Data Analytics Support Intern", org: "Duel On Jewel Inc.", stat: "18%", statLabel: "sales growth", dates: "Mar – Sep 2025", place: "San Jose, CA",
      details: [
        "Drove 18% sales growth across optimized categories.",
        "Built a JavaScript scraper for 30+ Amazon listings, cutting research time 80%.",
        "Used LLMs to rank competitor keywords, guiding 150 listing rewrites.",
      ],
    },
  ],

  awards: [
    "3rd Place, SJSU Cybersecurity & AI Hackathon (2025)",
    "Top 10 Finalist, California Sunrise VentureSpark (2025)",
  ],

  gallery: [
    { src: P("me-trees.jpg"), caption: "" },
    { src: P("friends-formal.jpg"), caption: "my girls" },
    { src: P("concert.jpg"), caption: "concert nights" },
    { src: P("friend-marina.jpg"), caption: "marina sunsets" },
    { src: P("beach-horses.jpg"), caption: "" },
    { src: P("me-waterfall.jpg"), caption: "" },
    { src: P("dog-me.jpg"), caption: "" },
    { src: P("palm-beach.jpg"), caption: "" },
    { src: P("friend-brunch.jpg"), caption: "brunch club" },
    { src: P("me-jungle.jpg"), caption: "" },
    { src: P("tahoe-lake.jpg"), caption: "" },
    { src: P("me-balloons.jpg"), caption: "" },
    { src: P("sticker-stand.jpg"), caption: "pura vida" },
    { src: P("friend-dorm.jpg"), caption: "" },
    { src: P("me-ftc.jpg"), caption: "robotics fam" },
    { src: P("ocean-trees-2.jpg"), caption: "" },
    { src: P("dog-selfie.jpg"), caption: "" },
    { src: P("me-beach-sunset.jpg"), caption: "" },
    { src: P("waterfall-jungle.jpg"), caption: "" },
    { src: P("beach-sunset.jpg"), caption: "" },
  ],

  contact: {
    bg: P("beach-sunset.jpg"),
    blurb: "Thanks for walking with me! I'm always down to chat about projects, hackathons, coffee spots, or dogs.",
    email: "mihikagarg@berkeley.edu",
    github: "https://github.com/mihikaGarg",
    linkedin: "https://linkedin.com/in/mihika-garg",
    resume: "",
  },
};
