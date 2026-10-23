/* ============================================
   BIRTHDAY GIFT WEBSITE v2 — JavaScript
   ============================================ */

/* ========================================
   CONFIG — Edit this to customize!
   ======================================== */
const CONFIG = {
  friendName: "Best Friend",
  yourName: "Your Bestie",

  // Page 2 — Yes/No
  yesNoQuestion: "So... ready for your birthday surprise? 🎁",
  noButtonMessages: [
    "Nope! 😏",
    "Try again! 😄",
    "You can't say no! 😤",
    "Nice try! 😂",
    "Getting closer... NOT! 🏃",
    "Keep trying! 😜",
    "Just give up haha! 🤪",
    "NO means YES! 💫",
    "You're persistent, I'll give you that! 👏",
    "Okay this is getting embarrassing... 🙈"
  ],

  // Page 3 — Birthday
  birthdayMessage: "Hey deluluuu may your dreams Becomes trueluluuuuuu.",
  birthdayJoke: "(You're getting older, but staying the same height. )",

  // Page 4 — Best Moments Gallery (main photos: 7)
  // Photos live in the "main photos/" folder
  bestMoments: [
    { src: "main photos/1000173100.jpg", caption: "The Office Gang!", emoji: "🌟", date: "Iconic" },
    { src: "main photos/1000173102.jpg", caption: "The unofficial 'FRIEND'", emoji: "✨", date: "Iconic" },
    { src: "main photos/IMG_20230818_135522.jpg", caption: "The trioooo!", emoji: "😌", date: "Good Vibes" },
    { src: "main photos/IMG_20250531_171347012.jpg", caption: "The main character energy !", emoji: "☀️", date: "Memories" },
    { src: "main photos/IMG-20251024-WA0026.jpg", caption: "The Alcholic", emoji: "🥰", date: "Besties" },
    { src: "main photos/IMG-20260310-WA0050.jpg", caption: "The Hands", emoji: "🔥", date: "Unstoppable" },
    { src: "main photos/IMG-20260503-WA0094.jpg", caption: "Prada Energy is real guys....", emoji: "❤️", date: "Grateful" }
  ],

  // Page 5 — Quiz (5 questions)
  quiz: [
    {
      question: "What's our go-to hangout spot? 🏠",
      options: ["My place", "Your place", "That one cafe", "Nowhere, we just wander"],
      correct: 3
    },
    {
      question: "What's my favorite late-night snack? 🌙",
      options: ["Pizza 🍕", "Instant noodles 🍜", "Chips 🍟", "Ice cream 🍦"],
      correct: 1
    },
    {
      question: "What's the dumbest thing I've ever done? 🤦",
      options: ["Locked myself out", "Walked into a glass door", "Called you by wrong name", "All of the above 😭"],
      correct: 3
    },
    {
      question: "How did we become friends? 👯",
      options: ["School/College", "Common friends", "Randomly met online", "Fate brought us together ✨"],
      correct: 3
    },
    {
      question: "What do I love most about you? 💕",
      options: ["Your humor 😂", "Your kindness 🥰", "Your loyalty 🐶", "All of the above! 🏆"],
      correct: 3
    }
  ],

  // Page 5 — Puzzle photos (all 4, cycled as levels)
  // Photos live in the "puzzle photos/" folder
  puzzlePhotos: [
    { src: "puzzle photos/1000173101.jpg", caption: "Fix the gang up....!" },
    { src: "puzzle photos/1000173103.jpg", caption: "Fix the Friend'SHIP'..." },
    { src: "puzzle photos/IMG_20250720_163949962.jpg", caption: "The BOYFRIEND" },
    { src: "puzzle photos/Shreyaa photos 032.jpg", caption: "Chinese BISHSSS!" }
  ],

  // Page 6 — Funny Photos (8 photos)
  // Photos live in the "funny photos/" folder
  funnyPhotos: [
    { src: "funny photos/IMG_20130929_144023_0.jpg", caption: "Kashmiri Gurl 😂" },
    { src: "funny photos/IMG_20130929_150317_0.jpg", caption: "Jurassic Bark" },
    { src: "funny photos/IMG_20131116_072441_0.jpg", caption: "Ms. Kushmitha" },
    { src: "funny photos/IMG_20141001_094426228.jpg", caption: "Mr and Mrs PUG" },
    { src: "funny photos/IMG_20151024_150138483.jpg", caption: "Go Green" },
    { src: "funny photos/IMG-20251101-WA0002.jpg", caption: "Assthecthic🤣" },
    { src: "funny photos/Screenshot_20260912-140817 (1).png", caption: "Certified meme moment" }
  ],

  // Page 7 — Message letter (from msg file)
  messageLetter: "Happy birthday Shreya ⛄\n\nHence I am super shy to record a video i decided to add a message to you from myself.\n\nFirst off all Happiest birthday to you ❤️. Second of all thank you for being a huge part in our life, and we are always greatful to have you as a bestfriend and for tan as a gf. I know we three are far from eachother but still close together. And Our group \"The Walking Red Flags\" has become an important part in my life nowadays, the way I wait to get a call from you guys 😭. Shareing details about each of your life's and teas of what happening around has become an habit for me to listen. Ik it's a msg about you but u guys are my parents ( tan as father and Shreya as mom lol). \nI was really planning to come and suprise you for this bday and but my life had a different plan and here I am sitting in the office and writing/typing on my second day of joining and we just got off a call, I miss you guys so much that I don't know what to say other than keep missing you guys 😭. But one thing I will proudly say is that a friend like you is always need for person like me and dude I am really grateful to have you as my bestfriend. I am really sad I am not able to come there and suprise youuu\n\nAlso a thing okay, finding a gift for is more than impossible, it's more likely humanly and ai-ily not possible, sooo I made this website from scratch (support from ai and tan) as a gift from me bestfriend and ur Bf/bestfriend tano\n(Lol my manager just came and asked to work as both soc and noc dieing in pain current life is going in a \"raa position\" if you want to know what raa is \"click here\")",
  clickHereText: "click here",

  // Sticker reveal
  stickerSrc: "sticker/STK-20260908-WA0004.webp",

  // Page 9 — Final Message
  finalMessage: "You're not just a friend — you're Bishssss.\nThank you for all the laughter, the memories,\nand for being you.\n\nHere's to many more years of friendship! 🥂"
};
/* ========== END CONFIG ========== */

/* =============================================
   STICKER FILES (from attachments zip)
   ============================================= */
var STICKER_FILES = [
  "stickers/STK-20250303-WA0005.webp",
  "stickers/STK-20250303-WA0009.webp",
  "stickers/STK-20250303-WA0010.webp",
  "stickers/STK-20250303-WA0014.webp",
  "stickers/STK-20250303-WA0017.webp",
  "stickers/STK-20250303-WA0018.webp",
  "stickers/STK-20250303-WA0027.webp",
  "stickers/STK-20250303-WA0028.webp",
  "stickers/STK-20250605-WA0005.webp",
  "stickers/STK-20250720-WA0044.webp",
  "stickers/STK-20250720-WA0045.webp",
  "stickers/STK-20250724-WA0034.webp",
  "stickers/STK-20250724-WA0037.webp",
  "stickers/STK-20250724-WA0040.webp",
  "stickers/STK-20250724-WA0042.webp",
  "stickers/STK-20251101-WA0005.webp",
  "stickers/STK-20251101-WA0006.webp",
  "stickers/STK-20260421-WA0056.webp",
  "stickers/STK-20260504-WA0237.webp"
];



/* =============================================
   PAGE NAVIGATION
   ============================================= */
function showPage(num) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });

  // Handle decimal page numbers (e.g., 5.5)
  var pageId = 'page-' + (num === parseInt(num) ? num : (num === 5.5 ? '5-5' : num));
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
  }

  // Page-specific init (first-time setup)
  if (num === 2) initRunaway();
  if (num === 3) initBirthdayPage();
  if (num === 4) initGallery();
  if (num === 5) initQuiz();
  if (num === 6) initCollage();
  if (num === 7) initMessagePage();
  if (num === 9) initFinalPage();
}



/* =============================================
   PAGE 1 — COUNTDOWN
   ============================================= */
(function initCountdown() {
  var numberEl = document.getElementById('countdown-number');
  var revealEl = document.getElementById('reveal-text');
  var container = document.getElementById('countdown-container');
  var numbers = ['3', '2', '1'];
  var index = 0;

  function showNext() {
    if (index < numbers.length) {
      numberEl.textContent = numbers[index];
      numberEl.className = 'countdown-number show';
      setTimeout(function() {
        numberEl.classList.remove('show');
      }, 700);
      index++;
      setTimeout(showNext, 900);
    } else {
      container.style.display = 'none';
      revealEl.classList.add('show');
      setTimeout(function() { showPage(2); }, 2500);
    }
  }

  setTimeout(showNext, 500);
})();



/* =============================================
   PAGE 2 — RUNAWAY NO BUTTON
   ============================================= */
var runawayAttempts = 0;
var runawayInitialized = false;

function initRunaway() {
  if (runawayInitialized) return;
  runawayInitialized = true;

  var noBtn = document.getElementById('btn-no');
  var yesBtn = document.getElementById('btn-yes');
  var msgEl = document.getElementById('runaway-message');
  var counterEl = document.getElementById('runaway-counter');

  // Position NO button next to YES initially
  var yesBtnRect = yesBtn.getBoundingClientRect();
  noBtn.style.position = 'fixed';
  noBtn.style.left = (yesBtnRect.right + 30) + 'px';
  noBtn.style.top = yesBtnRect.top + 'px';

  // YES button — proceed
  yesBtn.addEventListener('click', function() { showPage(3); });

  // NO button — run away on hover/touch
  function moveNoButton(e) {
    if (e) e.preventDefault();
    runawayAttempts++;
    var msgIndex = Math.min(runawayAttempts - 1, CONFIG.noButtonMessages.length - 1);
    msgEl.textContent = CONFIG.noButtonMessages[msgIndex];
    counterEl.textContent = 'Attempt #' + runawayAttempts + ' to say NO! 😅';

    var btnW = noBtn.offsetWidth || 80;
    var btnH = noBtn.offsetHeight || 40;
    var maxX = window.innerWidth - btnW - 20;
    var maxY = window.innerHeight - btnH - 20;
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.transition = 'left 0.15s ease, top 0.15s ease';
  }

  noBtn.addEventListener('mouseenter', moveNoButton);
  noBtn.addEventListener('touchstart', moveNoButton, { passive: true });
}



/* =============================================
   PAGE 3 — HAPPY BIRTHDAY
   ============================================= */
var birthdayInitialized = false;

function initBirthdayPage() {
  var nameEl = document.getElementById('friend-name');
  if (nameEl) nameEl.textContent = CONFIG.friendName;

  var msgEl = document.getElementById('birthday-message');
  if (msgEl) msgEl.innerHTML = CONFIG.birthdayMessage + '<br />Today is YOUR day! 🥳';

  var jokeEl = document.getElementById('birthday-joke');
  if (jokeEl) jokeEl.textContent = CONFIG.birthdayJoke;

  if (birthdayInitialized) return;
  birthdayInitialized = true;

  var container = document.getElementById('page-3');

  // Pick 12 random stickers to float around (replacing emojis)
  var shuffled = STICKER_FILES.slice();
  for (var i = shuffled.length - 1; i > 0; i--) {
    var k = Math.floor(Math.random() * (i + 1));
    var tmp = shuffled[i];
    shuffled[i] = shuffled[k];
    shuffled[k] = tmp;
  }
  var selected = shuffled.slice(0, 12);

  selected.forEach(function(src, i) {
    var el = document.createElement('img');
    el.className = 'float-item';
    el.src = src;
    el.alt = '';
    el.style.left = (Math.random() * 90 + 5) + '%';
    el.style.top = (Math.random() * 90 + 5) + '%';
    var size = Math.random() * 60 + 100;
    el.style.width = size + 'px';
    el.style.height = 'auto';
    el.style.animationDelay = (i * 0.5) + 's';
    el.style.animationDuration = (Math.random() * 4 + 4) + 's';
    container.appendChild(el);
  });

  if (window.triggerConfetti) window.triggerConfetti();

  // Start random jumpscares after a short delay
  setTimeout(setupJumpscares, 2000);
}



/* =============================================
   RANDOM JUMBSCARE STICKER POPUPS
   ============================================= */
var jumpscareTimer = null;
var jumpscareActive = false;

function setupJumpscares() {
  if (jumpscareTimer) {
    clearTimeout(jumpscareTimer);
    jumpscareTimer = null;
  }
  // Fire first one quickly so user can test
  jumpscareTimer = setTimeout(triggerJumpscare, 1000);
}

function scheduleNextJumpscare() {
  var delay = Math.random() * 10000 + 20000; // 20-30 seconds
  jumpscareTimer = setTimeout(triggerJumpscare, delay);
}

function triggerJumpscare() {
  if (jumpscareActive) return;
  jumpscareActive = true;

  try {
    var src = STICKER_FILES[Math.floor(Math.random() * STICKER_FILES.length)];

    // Create jumpscare element on-the-fly (no dependency on HTML/CSS)
    var div = document.createElement('div');
    div.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.25);z-index:10000;pointer-events:none;';

    var img = document.createElement('img');
    img.style.cssText = 'max-width:500px;max-height:500px;';
    img.src = src;

    div.appendChild(img);
    document.body.appendChild(div);

    setTimeout(function() {
      if (div.parentNode) document.body.removeChild(div);
      jumpscareActive = false;
      scheduleNextJumpscare();
    }, 1200);
  } catch(e) {
    jumpscareActive = false;
    scheduleNextJumpscare();
  }
}

/* =============================================
   PAGE 4 — CAROUSEL (Best Moments)
   ============================================= */
var carouselState = {};

function initGallery() {
  carouselState.carousel4 = {
    items: CONFIG.bestMoments,
    currentIndex: 0
  };
  updateCarousel(4);
}

function updateCarousel(pageNum) {
  var state = carouselState['carousel' + pageNum];
  if (!state || !state.items || state.items.length === 0) return;

  var img = document.getElementById('carousel-img-' + pageNum);
  var caption = document.getElementById('carousel-caption-' + pageNum);
  var counter = document.getElementById('carousel-counter-' + pageNum);

  var currentItem = state.items[state.currentIndex];
  if (img) {
    img.src = currentItem.src;
    img.alt = currentItem.caption;
    img.onerror = function() {
      this.onerror = null;
      this.style.background = 'linear-gradient(135deg,#6b3fa0,#a18cd1)';
      this.style.display = 'flex';
      this.style.justifyContent = 'center';
      this.style.alignItems = 'center';
      this.style.color = '#fff';
      this.style.fontSize = '3rem';
      this.textContent = '📷';
    };
  }

  if (caption) {
    caption.textContent = (currentItem.emoji || '') + ' ' + currentItem.caption;
  }

  if (counter) {
    counter.textContent = (state.currentIndex + 1) + ' / ' + state.items.length;
  }
}

function carouselNext(pageNum) {
  var state = carouselState['carousel' + pageNum];
  if (!state) return;
  state.currentIndex = (state.currentIndex + 1) % state.items.length;
  updateCarousel(pageNum);
}

function carouselPrev(pageNum) {
  var state = carouselState['carousel' + pageNum];
  if (!state) return;
  state.currentIndex = (state.currentIndex - 1 + state.items.length) % state.items.length;
  updateCarousel(pageNum);
}



/* =============================================
   PAGE 5 — PUZZLE GAME (cycles through all puzzle photos)
   ============================================= */
var puzzleState = null;

function initQuiz() {
  if (!puzzleState) {
    puzzleState = {
      photos: CONFIG.puzzlePhotos,
      photoIndex: 0,
      pieces: [],
      selectedId: null,
      solved: false
    };
    initializePuzzle();
  }
}

function initializePuzzle() {
  var board = document.getElementById('puzzle-board');
  if (!board) return;

  // Build pieces
  var pieces = [];
  for (var i = 0; i < 9; i++) {
    pieces.push({ id: i, correctPosition: i, currentPosition: i });
  }

  // Scramble currentPositions so the puzzle appears unsolved
  var positions = [];
  for (var i = 0; i < 9; i++) positions.push(i);
  for (var i = positions.length - 1; i > 0; i--) {
    var k = Math.floor(Math.random() * (i + 1));
    var tmp = positions[i];
    positions[i] = positions[k];
    positions[k] = tmp;
  }
  pieces.forEach(function(piece, idx) {
    piece.currentPosition = positions[idx];
  });

  puzzleState.pieces = pieces;
  puzzleState.selectedId = null;
  puzzleState.solved = false;

  // Hide the complete button until the LAST puzzle is solved
  var btn = document.getElementById('puzzle-complete-btn');
  if (btn) btn.style.display = 'none';

  renderPuzzle();
  updatePuzzleCounter();
}

// Re-render the board from currentPosition (no reshuffling!)
function renderPuzzle() {
  var board = document.getElementById('puzzle-board');
  if (!board) return;

  board.innerHTML = '';

  var photoSrc = puzzleState.photos[puzzleState.photoIndex].src;
  var photoCaption = puzzleState.photos[puzzleState.photoIndex].caption || '';

  // Show caption
  var captionEl = document.getElementById('puzzle-caption');
  if (captionEl) captionEl.textContent = photoCaption;

  // Map each grid slot -> the piece currently sitting in it
  var slotForPosition = [];
  puzzleState.pieces.forEach(function(piece) {
    slotForPosition[piece.currentPosition] = piece;
  });

  for (var pos = 0; pos < 9; pos++) {
    var piece = slotForPosition[pos];
    var el = document.createElement('div');
    el.className = 'puzzle-piece';
    el.dataset.id = piece.id;

    el.style.backgroundImage = "url('" + photoSrc + "')";
    el.style.backgroundSize = '300% 300%';
    // Slice shown = the piece's CORRECT position (its id)
    var row = Math.floor(piece.id / 3);
    var col = piece.id % 3;
    el.style.backgroundPosition = (col * 50) + '% ' + (row * 50) + '%';

    if (puzzleState.selectedId === piece.id) el.classList.add('active');

    (function(pieceId) {
      el.addEventListener('click', function() { selectPuzzlePiece(pieceId); });
    })(piece.id);

    board.appendChild(el);
  }
}

function updatePuzzleCounter() {
  var counterEl = document.getElementById('puzzle-counter');
  if (!counterEl) return;
  counterEl.textContent = 'Puzzle ' + (puzzleState.photoIndex + 1) + ' of ' +
    puzzleState.photos.length + ' 🧩';
}

function selectPuzzlePiece(id) {
  if (puzzleState.solved) return;

  if (puzzleState.selectedId === null) {
    puzzleState.selectedId = id;
  } else if (puzzleState.selectedId === id) {
    puzzleState.selectedId = null;
  } else {
    // Swap the two pieces' current positions, then just re-render
    var first = puzzleState.pieces.find(function(p) { return p.id === puzzleState.selectedId; });
    var second = puzzleState.pieces.find(function(p) { return p.id === id; });
    if (!first || !second) return;

    var temp = first.currentPosition;
    first.currentPosition = second.currentPosition;
    second.currentPosition = temp;

    puzzleState.selectedId = null;
    renderPuzzle();
    checkPuzzleSolved();
  }

  // Highlight the selected piece visually
  renderPuzzle();
}

function checkPuzzleSolved() {
  var solved = puzzleState.pieces.every(function(p) {
    return p.currentPosition === p.correctPosition;
  });

  if (solved && !puzzleState.solved) {
    puzzleState.solved = true;
    advancePuzzle();
  }
}

// When one photo is solved, move to the next; after the last one, show the button
function advancePuzzle() {
  var btn = document.getElementById('puzzle-complete-btn');

  if (puzzleState.photoIndex >= puzzleState.photos.length - 1) {
    // All puzzles done!
    if (btn) btn.style.display = 'block';
    return;
  }

  puzzleState.photoIndex++;
  initializePuzzle(); // counter updates to "Puzzle X of 4"
}



/* =============================================
   PAGE 6 — CAROUSEL (More Moments)
   ============================================= */
function initCollage() {
  carouselState.carousel6 = {
    items: CONFIG.funnyPhotos,
    currentIndex: 0
  };
  updateCarousel(6);
}



/* =============================================
   PAGE 7 — MESSAGE LETTER
   ============================================= */
var messagePageInitialized = false;

function initMessagePage() {
  if (messagePageInitialized) return;
  messagePageInitialized = true;

  var card = document.getElementById('letter-card');
  if (!card) return;

  var text = CONFIG.messageLetter;
  // Replace "click here" with a clickable span
  var clickKeyword = CONFIG.clickHereText;
  var idx = text.indexOf(clickKeyword);
  if (idx !== -1) {
    var before = text.substring(0, idx);
    var after = text.substring(idx + clickKeyword.length);
    text = before + '<span class="click-here-link" onclick="revealSticker()">' + clickKeyword + '</span>' + after;
  }

  var p = document.createElement('p');
  p.className = 'letter-text';
  p.innerHTML = text;
  card.appendChild(p);
}

/* Sticker reveal */
function revealSticker() {
  openLightbox(CONFIG.stickerSrc, 'Surprise! 😄');
}

/* =============================================
   PAGE 9 — FINAL MESSAGE
   ============================================= */
function initFinalPage() {
  var msgEl = document.getElementById('final-message');
  var nameEl = document.getElementById('your-name');
  if (msgEl) msgEl.innerHTML = CONFIG.finalMessage.replace(/\n/g, '<br />');
  if (nameEl) nameEl.textContent = CONFIG.yourName;
  if (window.triggerConfetti) window.triggerConfetti();
}



/* =============================================
   LIGHTBOX (shared)
   ============================================= */
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightboxImg.onerror = function() {
    this.onerror = null;
    this.style.background = '#333';
    this.style.minWidth = '300px';
    this.style.minHeight = '300px';
    this.style.display = 'flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';
    this.style.color = '#fff';
    this.style.fontSize = '4rem';
    this.textContent = '📷';
  };
  lightbox.classList.add('active');
}

function closeLightbox() {
  if (lightbox) lightbox.classList.remove('active');
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}
if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});



/* =============================================
   CONFETTI ENGINE (shared)
   ============================================= */
(function initConfetti() {
  var canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var animationId = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function ConfettiParticle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * -1 - 20;
    this.w = Math.random() * 10 + 5;
    this.h = Math.random() * 6 + 3;
    this.color = 'hsl(' + Math.random() * 360 + ', 90%, 60%)';
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 10;
    this.velocityY = Math.random() * 4 + 3;
    this.velocityX = (Math.random() - 0.5) * 4;
    this.opacity = 1;
    this.friction = 0.98;
  }

  ConfettiParticle.prototype.update = function() {
    this.velocityY *= this.friction;
    this.velocityX *= this.friction;
    this.y += this.velocityY;
    this.x += this.velocityX;
    this.rotation += this.rotationSpeed;
    this.opacity -= 0.003;
  };

  ConfettiParticle.prototype.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    ctx.restore();
  };

  function burst() {
    for (var i = 0; i < 120; i++) {
      particles.push(new ConfettiParticle());
    }
    if (!animationId) animate();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(function(p) {
      return p.opacity > 0 && p.y < canvas.height + 20;
    });

    particles.forEach(function(p) {
      p.update();
      p.draw(ctx);
    });

    if (particles.length > 0) {
      animationId = requestAnimationFrame(animate);
    } else {
      animationId = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  window.triggerConfetti = burst;
})();
