// Project images (served from public/images/ or direct URLs)
const images = {
  colorGuess: "/images/game_color_guess.png",
  ticTacToe: "/images/tic_tac_toe.png",
  typingSpeed: "/images/game_typing.png",
  clickCounter: "/images/game_countclick.png",
  whackMole: "/images/game_wakemole.png",
  memoryCard: "/images/game_memory.png",
  todoList: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
  medRemind: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  untuckit: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  lazarev: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
  litecoin: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop",
  decure: "https://decure.in/cdn/shop/files/Decure_Logo_1000x500Px.png?height=628&pad_color=ffffff&v=1711642701&width=1200"
};

export const projectsData = [
  // FEATURED PROJECT
  {
    id: 1,
    title: "Med-Remind",
    category: "Healthcare Platform",
    type: "featured",
    status: "Completed",
    featured: true,
    image: images.medRemind,
    overview: "A comprehensive full-stack healthcare reminder application designed to help patients log, schedule, and track their medication intake.",
    problem: "Patients frequently forget complex medication dosages, leading to missed logs and recovery delays.",
    solution: "Developed a MERN stack portal featuring custom calendar alerts, medication log lists, and dashboard status trackers.",
    outcome: "Improved scheduling visibility, creating a performant prototype with dynamic state updates.",
    features: [
      "User Authentication & Authorization",
      "Medication calendar scheduler",
      "Dynamic reminder logging logs",
      "Interactive health dashboard analytics"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Framer Motion"],
    github: "https://github.com/codinggita/medremind.git",
    liveDemo: "https://medremind-z2yo.vercel.app/"
  },
  
  // MAJOR PROJECTS
  {
    id: 2,
    title: "UNTUCKit Clone",
    category: "E-Commerce Mockup",
    type: "major",
    status: "Completed",
    featured: false,
    image: images.untuckit,
    overview: "A responsive frontend replica of the famous clothing brand UNTUCKit with functional cart state drawer.",
    problem: "Replicating complicated sizing filters and product layouts without code duplication.",
    solution: "Designed clean modular layout blocks using HTML/CSS and JavaScript with state variables.",
    outcome: "Fluid responsiveness across all viewport sizes, with a sub-second page rendering score on mobile.",
    features: [
      "Dynamic product filtering by size and fit",
      "Interactive cart slide drawer",
      "Responsive navigation drawer menu"
    ],
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/SaptakBhattacharyya/untuckitclone-web6.git",
    liveDemo: "https://saptak108267untuckitweb6.netlify.app/"
  },
  {
    id: 3,
    title: "Litecoin Web3 landing",
    category: "Web3 / Cryptocurrencies",
    type: "major",
    status: "Completed",
    featured: false,
    image: images.litecoin,
    overview: "A modern Web3 landing page showcasing cryptocurrency statistics, charts, and clean aesthetic modules.",
    problem: "Displaying complicated crypto coin data in a clean, visual layout.",
    solution: "Used clean radial gradients, gold color palettes, and glass card structures.",
    outcome: "Highly responsive crypto dashboard concept that aligns with modern decentralization designs.",
    features: [
      "Dynamic crypto statistical layouts",
      "Interactive charts and tables",
      "Custom gold themed border outlines"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SaptakBhattacharyya/litecoin-clone-web-4.git",
    liveDemo: "https://saptak108267litecoinweb3.netlify.app/"
  },
  {
    id: 4,
    title: "Decure Interior Clone",
    category: "Architecture & Design",
    type: "major",
    status: "Completed",
    featured: false,
    image: images.decure,
    overview: "A premium interior design agency page featuring smooth layout animations and architectural showcases.",
    problem: "Traditional layouts lacked interactive visual transitions that convey high-end interior styling.",
    solution: "Engineered responsive scroll containers, smooth hover transitions, and clean layout grids.",
    outcome: "A pixel-perfect prototype highlighting interior designs with optimized image assets.",
    features: [
      "Elegant parallax scrolling effects",
      "High-contrast text layouts",
      "Responsive media grids"
    ],
    tech: ["React", "Tailwind CSS", "GSAP"],
    github: "https://github.com/SaptakBhattacharyya/decure-web5.git",
    liveDemo: "https://saptak108267decurewebclone5.netlify.app/"
  },
  {
    id: 5,
    title: "Lazarev Agency Clone",
    category: "Digital Agency Showcase",
    type: "major",
    status: "Completed",
    featured: false,
    image: images.lazarev,
    overview: "A high-fidelity mockup of the award-winning Lazarev Product Design Agency landing page.",
    problem: "Replicating intricate custom cursor overlays and fluid video masking effects.",
    solution: "Utilized CSS clip-path masks, absolute mouse coordinates, and keyframe animations.",
    outcome: "An optimized frontend replica showcasing complex UI animations.",
    features: [
      "Dynamic layout slide panels",
      "Custom cursor follow effects",
      "Smooth viewport reveal triggers"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SaptakBhattacharyya/frontend-Lazarev-Digital-Product-Design-Agency-Webpage.git",
    liveDemo: "https://lazarev-frontend-webpage-saptak.netlify.app/"
  },

  // MINI PROJECTS
  {
    id: 6,
    title: "Color Guess Game",
    category: "Reflex Game",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.colorGuess,
    overview: "An interactive color matching game where users identify RGB values.",
    problem: "Validating user selection score in a lightweight structure.",
    solution: "Built dynamic color array generator mapping click events to state score counters.",
    outcome: "Fun browser reflex game showing streak high score.",
    features: [
      "Streak tracking system",
      "Interactive difficulty options"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/guess-the-color.git",
    liveDemo: "/games/color guess/index.html"
  },
  {
    id: 7,
    title: "Tic-Tac-Toe Game",
    category: "Logic Game",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.ticTacToe,
    overview: "A clean, dynamic 2-player grid game featuring instant win/draw validation.",
    problem: "Ensuring win paths are evaluated in real-time on every state change.",
    solution: "Used matrix validation logic tracking player indices.",
    outcome: "Minimal classic logic game with clean glassmorphic elements.",
    features: [
      "Local 2-player support",
      "Dynamic win path highlighting"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/tic-tac-toe.git",
    liveDemo: "/games/TIC-TAC-TOE/tic-tac-toe3x3/index.html"
  },
  {
    id: 8,
    title: "Typing Speed Test",
    category: "Utility Tool",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.typingSpeed,
    overview: "WPM and accuracy validation tool with real-time countdown timer.",
    problem: "Calculating character differences dynamically during rapid typing.",
    solution: "Built character change observer comparing input strings with target paragraphs.",
    outcome: "Highly responsive tool tracking average words per minute.",
    features: [
      "Real-time WPM calculation",
      "Accuracy index metrics"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/typing-speed-test.git",
    liveDemo: "/games/Typing-speed-test/index.html"
  },
  {
    id: 9,
    title: "Click Counter Game",
    category: "Reflex Game",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.clickCounter,
    overview: "10-second reflex challenge tracking maximum clicks per second.",
    problem: "Accurate click event updates without debounce delays.",
    solution: "Used direct click listener hooks bypasses and countdown triggers.",
    outcome: "Lightweight, responsive game layout.",
    features: [
      "High score local record",
      "Precision timers"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/clickcounter-.git",
    liveDemo: "/games/countclick/index.html"
  },
  {
    id: 10,
    title: "Whack-a-Mole Game",
    category: "Reflex Game",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.whackMole,
    overview: "Reflex browser game — click the moles before they hide.",
    problem: "Random grid movement timing loops causing layout glitches.",
    solution: "Implemented stable JS interval timers mapping indices dynamically.",
    outcome: "Smooth, responsive game loop.",
    features: [
      "Random grid selectors",
      "Dynamic speed acceleration"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/wake-a-mole.git",
    liveDemo: "/games/dug the hole/index.html"
  },
  {
    id: 11,
    title: "Memory Card Puzzle",
    category: "Logic Game",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.memoryCard,
    overview: "Classic card matching memory game with grid card flips.",
    problem: "Tracking selected card pairs without state logic conflicts.",
    solution: "Engineered comparative grid state checks handling double card selects.",
    outcome: "Polished CSS grid logic game.",
    features: [
      "Card flipping animations",
      "Move counts & matches tracker"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/memory-card-.git",
    liveDemo: "/games/memory  card/index.html"
  },
  {
    id: 12,
    title: "To-Do List Manager",
    category: "Productivity",
    type: "mini",
    status: "Completed",
    featured: false,
    image: images.todoList,
    overview: "A lightweight task manager utilizing local storage persistence.",
    problem: "State losses on page updates.",
    solution: "Wired LocalStorage serialize and deserialize hooks inside state updates.",
    outcome: "Functional productivity layout.",
    features: [
      "Local storage persistence",
      "Item filter toggles"
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/SaptakBhattacharyya/html-all-assignments/tree/main/My-Porfolio/vite-project/src/games/todo%20list",
    liveDemo: "/games/todo list/index.html"
  }
];
