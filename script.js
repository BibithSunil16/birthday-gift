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
  birthdayMessage: "The world is a better place because you're in it.",
  birthdayJoke: "(You're not getting older, you're just upgrading your version. 📱)",

  // Page 4 — Best Moments Gallery (main photos: 7)
  // Photos live in the "main photos/" folder
  bestMoments: [
    { src: "main photos/1000173100.jpg", caption: "The star of the show!", emoji: "🌟", date: "Iconic" },
    { src: "main photos/1000173102.jpg", caption: "You being you", emoji: "✨", date: "Iconic" },
    { src: "main photos/IMG_20230818_135522.jpg", caption: "Looking good!", emoji: "😌", date: "Good Vibes" },
    { src: "main photos/IMG_20250531_171347012.jpg", caption: "Golden moment", emoji: "☀️", date: "Memories" },
    { src: "main photos/IMG-20251024-WA0026.jpg", caption: "Our favorite person", emoji: "🥰", date: "Besties" },
    { src: "main photos/IMG-20260310-WA0050.jpg", caption: "A whole mood", emoji: "🔥", date: "Unstoppable" },
    { src: "main photos/IMG-20260503-WA0094.jpg", caption: "Forever grateful for you", emoji: "❤️", date: "Grateful" }
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
    { src: "puzzle photos/1000173101.jpg", caption: "Piece it together!" },
    { src: "puzzle photos/1000173103.jpg", caption: "Almost there..." },
    { src: "puzzle photos/IMG_20250720_163949962.jpg", caption: "Keep going!" },
    { src: "puzzle photos/Shreyaa photos 032.jpg", caption: "Final piece!" }
  ],

  // Page 6 — Funny Photos (8 photos)
  // Photos live in the "funny photos/" folder
  funnyPhotos: [
    { src: "funny photos/IMG_20130929_144023_0.jpg", caption: "Blast from the past 😂" },
    { src: "funny photos/IMG_20130929_150317_0.jpg", caption: "Old-school goofiness" },
    { src: "funny photos/IMG_20131116_072441_0.jpg", caption: "The chaos begins" },
    { src: "funny photos/IMG_20141001_094426228.jpg", caption: "Peak silliness" },
    { src: "funny photos/IMG_20151024_150138483.jpg", caption: "Can't stop laughing" },
    { src: "funny photos/IMG-20251101-WA0002.jpg", caption: "This one's a classic 🤣" },
    { src: "funny photos/Screenshot_20260828-225532 (1) (1) (1).png", caption: "Caught in 4K 📸" },
    { src: "funny photos/Screenshot_20260912-140817 (1).png", caption: "Certified meme moment" }
  ],

  // Page 7 — Final Message
  finalMessage: "You're not just a friend — you're family.\nThank you for all the laughter, the memories,\nand for being you.\n\nHere's to many more years of friendship! 🥂"
};
/* ========== END CONFIG ========== */



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
  if (num === 7) initFinalPage();
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

  if (birthdayInitialized) return;
  birthdayInitialized = true;

  var container = document.getElementById('page-3');
  var emojis = ['🎈', '🎉', '🎊', '⭐', '✨', '🌟', '💫', '🎁', '💖', '🌸', '🎀', '🎵'];

  emojis.forEach(function(emoji, i) {
    var el = document.createElement('div');
    el.className = 'float-item';
    el.textContent = emoji;
    el.style.left = (Math.random() * 90 + 5) + '%';
    el.style.top = (Math.random() * 90 + 5) + '%';
    el.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
    el.style.animationDelay = (i * 0.5) + 's';
    el.style.animationDuration = (Math.random() * 4 + 4) + 's';
    container.appendChild(el);
  });

  if (window.triggerConfetti) window.triggerConfetti();
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
   PAGE 7 — FINAL MESSAGE
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