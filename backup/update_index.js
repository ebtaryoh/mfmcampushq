const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add Premium Modal Animation CSS
const styleBlock = `
  /* Premium Modal Animations */
  .modal-backdrop {
    transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
  }
  .modal-content {
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  .modal-open .modal-backdrop {
    opacity: 1;
  }
  .modal-open .modal-content {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  
  /* Buttons and loading */
  .btn-loading {
    position: relative;
    color: transparent !important;
    pointer-events: none;
  }
  .btn-loading::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  .btn-loading-dark::after {
    border-color: rgba(0,0,0,0.1);
    border-top-color: #2d1042;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;
html = html.replace('</style>', styleBlock + '\n</style>');

// 2. Add Missing Modals before the scripts
const missingModals = `
  <!-- Full Calendar Modal -->
  <div id="calendar-modal" class="fixed inset-0 z-[80] hidden flex items-center justify-center p-5">
    <div class="modal-backdrop absolute inset-0 bg-[#1a0c26]/70 backdrop-blur-md" onclick="closeModal('calendar-modal')"></div>
    <div class="modal-content relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-[24px] shadow-2xl p-6 md:p-10 border border-[#e8e0d7]">
      <button onclick="closeModal('calendar-modal')" class="absolute right-4 top-4 p-2 rounded-full bg-[#f9f5ef] hover:bg-[#f3e9da] transition text-[#4a1a6b]"><i data-lucide="x" class="w-5 h-5"></i></button>
      <div class="font-display text-[32px] text-[#4a1a6b] mb-6 flex items-center gap-3"><i data-lucide="calendar" class="w-8 h-8 text-[#d7a84a]"></i> National Events Calendar 2026</div>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-5 border border-[#e8e0d7] rounded-[16px] hover:shadow-lg transition">
          <div class="text-[12px] font-mono text-[#d7a84a] mb-1">FEBRUARY 14-16</div>
          <div class="font-[700] text-[18px] text-[#2d1042]">National Campus Prayer Rain</div>
          <p class="text-[14px] text-[#6f6675] mt-2">Annual 3-day fasting and prayer program across all campuses.</p>
        </div>
        <div class="p-5 border border-[#e8e0d7] rounded-[16px] hover:shadow-lg transition">
          <div class="text-[12px] font-mono text-[#d7a84a] mb-1">MARCH 8-10</div>
          <div class="font-[700] text-[18px] text-[#2d1042]">CF Leaders Summit</div>
          <p class="text-[14px] text-[#6f6675] mt-2">Executive training for all campus coordinators.</p>
        </div>
        <div class="p-5 border border-[#e8e0d7] rounded-[16px] hover:shadow-lg transition">
          <div class="text-[12px] font-mono text-[#d7a84a] mb-1">MAY 22-25</div>
          <div class="font-[700] text-[18px] text-[#2d1042]">Word & Fire Conference</div>
          <p class="text-[14px] text-[#6f6675] mt-2">Deep word exposition and impartation service.</p>
        </div>
        <div class="p-5 border border-[#e8e0d7] rounded-[16px] hover:shadow-lg transition">
          <div class="text-[12px] font-mono text-[#d7a84a] mb-1">OCTOBER 1-3</div>
          <div class="font-[700] text-[18px] text-[#2d1042]">National Evangelism Storm</div>
          <p class="text-[14px] text-[#6f6675] mt-2">Simultaneous mass evangelism in all 140 campuses.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Sermon Library Modal -->
  <div id="sermon-modal" class="fixed inset-0 z-[80] hidden flex items-center justify-center p-5">
    <div class="modal-backdrop absolute inset-0 bg-[#1a0c26]/80 backdrop-blur-md" onclick="closeModal('sermon-modal')"></div>
    <div class="modal-content relative w-full max-w-3xl bg-[#2d1042] text-white rounded-[24px] shadow-2xl p-6 md:p-10 border border-[#4a1a6b] overflow-hidden">
      <div class="absolute inset-0 grain opacity-[0.1]"></div>
      <button onclick="closeModal('sermon-modal')" class="absolute z-10 right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
      <div class="relative z-10">
        <div class="font-display text-[32px] text-[#f3d38a] mb-2 flex items-center gap-3"><i data-lucide="headphones" class="w-8 h-8"></i> Sermon Library</div>
        <p class="text-[#c4a9cf] text-[15px] mb-8">Listen to life-transforming messages from our campus pulpits.</p>
        
        <div class="space-y-4">
          <div class="bg-white/5 border border-white/10 p-4 rounded-[16px] flex items-center gap-4 hover:bg-white/10 transition cursor-pointer" onclick="playSermon(this)">
            <button class="w-12 h-12 rounded-full bg-[#d7a84a] text-[#2d1042] flex items-center justify-center flex-shrink-0"><i data-lucide="play" class="w-5 h-5 ml-1"></i></button>
            <div class="flex-1">
              <div class="font-[700] text-[16px] text-white">The Power of Campus Revival</div>
              <div class="text-[13px] text-[#a787b3]">Pastor Gbenga • 45 mins</div>
            </div>
          </div>
          <div class="bg-white/5 border border-white/10 p-4 rounded-[16px] flex items-center gap-4 hover:bg-white/10 transition cursor-pointer" onclick="playSermon(this)">
            <button class="w-12 h-12 rounded-full bg-[#d7a84a] text-[#2d1042] flex items-center justify-center flex-shrink-0"><i data-lucide="play" class="w-5 h-5 ml-1"></i></button>
            <div class="flex-1">
              <div class="font-[700] text-[16px] text-white">Navigating Academic Excellence</div>
              <div class="text-[13px] text-[#a787b3]">Pst. (Mrs) Grace Adeniyi • 38 mins</div>
            </div>
          </div>
          <div class="bg-white/5 border border-white/10 p-4 rounded-[16px] flex items-center gap-4 hover:bg-white/10 transition cursor-pointer" onclick="playSermon(this)">
            <button class="w-12 h-12 rounded-full bg-[#d7a84a] text-[#2d1042] flex items-center justify-center flex-shrink-0"><i data-lucide="play" class="w-5 h-5 ml-1"></i></button>
            <div class="flex-1">
              <div class="font-[700] text-[16px] text-white">Fire on the Altar</div>
              <div class="text-[13px] text-[#a787b3]">Pastor Daniel K. • 52 mins</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Devotional Modal -->
  <div id="devotional-modal" class="fixed inset-0 z-[80] hidden flex items-center justify-center p-5">
    <div class="modal-backdrop absolute inset-0 bg-[#1a0c26]/70 backdrop-blur-md" onclick="closeModal('devotional-modal')"></div>
    <div class="modal-content relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#fbf4e6] rounded-[24px] shadow-2xl p-6 md:p-10 border border-[#e8cf9f]">
      <button onclick="closeModal('devotional-modal')" class="absolute right-4 top-4 p-2 rounded-full bg-white border border-[#e8cf9f] hover:bg-[#f3e9da] transition text-[#7a5120]"><i data-lucide="x" class="w-5 h-5"></i></button>
      
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#d7a84a]/20 text-[#7a5120] rounded-full text-[12px] font-[700] font-mono mb-4"><i data-lucide="sun" class="w-4 h-4"></i> TODAY'S READING</div>
        <h2 class="font-display text-[36px] text-[#4a1a6b] leading-tight">Walking in Divine Purpose on Campus</h2>
        <div class="text-[#6f6675] mt-2">Text: Jeremiah 29:11, Proverbs 3:5-6</div>
      </div>
      
      <div class="prose prose-lg text-[#2d1042] leading-relaxed">
        <p>Welcome to another beautiful day. The campus environment is filled with diverse voices and distractions, but your primary anchor must remain the Word of God.</p>
        <p>Many students lose their way because they fail to realize that their admission into the university was not just for academic pursuit, but a divine placement by God to shine as light.</p>
        <div class="p-5 my-6 bg-white border-l-4 border-[#d7a84a] rounded-r-[12px] italic text-[#4a1a6b] font-[600]">
          "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end." - Jeremiah 29:11
        </div>
        <p>Today, make a conscious decision to align your academic goals with God's overarching purpose for your life. Engage in prayer, study the word, and do not compromise your faith for temporary pleasures.</p>
        <h3 class="font-[700] text-[20px] mt-6 mb-2 text-[#4a1a6b]">Prayer Point:</h3>
        <p class="font-[600] text-[#7a5120]">Lord, open my eyes to see my divine placement and purpose on this campus in Jesus name.</p>
      </div>
    </div>
  </div>

  <!-- Radio Modal -->
  <div id="radio-modal" class="fixed inset-0 z-[80] hidden flex items-center justify-center p-5 pointer-events-none">
    <div class="modal-content pointer-events-auto relative w-full max-w-sm bg-[#18131d] text-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 border border-[#2d1042] mt-auto md:mb-10 mx-auto overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#4a1a6b]/40 to-transparent opacity-50"></div>
      <button onclick="closeModal('radio-modal')" class="absolute z-10 right-4 top-4 p-2 rounded-full hover:bg-white/10 transition text-white/70 hover:text-white"><i data-lucide="chevron-down" class="w-5 h-5"></i></button>
      
      <div class="relative z-10 flex flex-col items-center text-center">
        <div class="w-20 h-20 rounded-[20px] bg-gradient-to-br from-[#d7a84a] to-[#b77a2a] flex items-center justify-center shadow-[0_10px_30px_rgba(215,168,74,0.3)] mb-4">
          <i data-lucide="radio" class="w-10 h-10 text-[#2d1042]"></i>
        </div>
        <div class="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full text-[10px] font-mono font-[700] mb-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> LIVE
        </div>
        <h3 class="font-display text-[22px] text-white">MFMCF Radio</h3>
        <p class="text-[#a787b3] text-[13px] mb-6">Currently Playing: Deep Worship Vol. 4</p>
        
        <div class="flex items-center gap-6 mb-2">
          <button class="text-white/50 hover:text-white transition"><i data-lucide="skip-back" class="w-6 h-6"></i></button>
          <button id="radio-play-btn" onclick="toggleRadioPlay()" class="w-14 h-14 rounded-full bg-white text-[#2d1042] flex items-center justify-center hover:scale-105 transition shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
            <i data-lucide="play" class="w-6 h-6 ml-1" id="radio-icon"></i>
          </button>
          <button class="text-white/50 hover:text-white transition"><i data-lucide="skip-forward" class="w-6 h-6"></i></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Volunteer Modal -->
  <div id="volunteer-modal" class="fixed inset-0 z-[80] hidden flex items-center justify-center p-5">
    <div class="modal-backdrop absolute inset-0 bg-[#1a0c26]/70 backdrop-blur-md" onclick="closeModal('volunteer-modal')"></div>
    <div class="modal-content relative w-full max-w-lg bg-white rounded-[24px] shadow-2xl p-6 md:p-10 border border-[#e8e0d7]">
      <button onclick="closeModal('volunteer-modal')" class="absolute right-4 top-4 p-2 rounded-full bg-[#f9f5ef] hover:bg-[#e8e0d7] transition text-[#2d1042]"><i data-lucide="x" class="w-5 h-5"></i></button>
      
      <div class="text-center mb-6">
        <div class="w-12 h-12 mx-auto bg-[#fbf4e6] rounded-full flex items-center justify-center mb-3 text-[#d7a84a]">
          <i data-lucide="heart-handshake" class="w-6 h-6"></i>
        </div>
        <h2 class="font-display text-[28px] text-[#4a1a6b]">Join the Workforce</h2>
        <p class="text-[#6f6675] text-[14px] mt-1">Serve God and grow with us in the campus fellowship.</p>
      </div>

      <form id="volunteer-form" onsubmit="handleVolunteer(event)" class="space-y-4">
        <input required type="text" placeholder="Full Name" class="fi" />
        <input required type="email" placeholder="Email Address" class="fi" />
        <input required type="tel" placeholder="WhatsApp Number" class="fi" />
        <select required class="fi">
          <option value="">Select Department of Interest</option>
          <option>Prayer Band</option>
          <option>Evangelism & Follow-up</option>
          <option>Media & IT</option>
          <option>Choir / Music</option>
          <option>Ushering & Protocol</option>
          <option>Welfare</option>
        </select>
        <textarea required placeholder="Why do you want to join this department?" class="fi resize-none h-[80px]"></textarea>
        <button type="submit" class="w-full py-3.5 rounded-full bg-[#4a1a6b] text-white font-[700] text-[15px] hover:bg-[#2d1042] transition relative shadow-[0_10px_20px_rgba(74,26,107,0.2)]">Submit Application</button>
      </form>
    </div>
  </div>

  <!-- Leaders Portal Modal -->
  <div id="leaders-modal" class="fixed inset-0 z-[80] hidden flex items-center justify-center p-5">
    <div class="modal-backdrop absolute inset-0 bg-[#1a0c26]/90 backdrop-blur-lg" onclick="closeModal('leaders-modal')"></div>
    <div class="modal-content relative w-full max-w-md bg-[#2d1042] text-white rounded-[24px] shadow-2xl p-8 border border-[#6a2d93]">
      <button onclick="closeModal('leaders-modal')" class="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition text-white/70 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
      
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#6a2d93] to-[#4a1a6b] mb-4 shadow-[0_0_30px_rgba(106,45,147,0.4)]">
          <i data-lucide="shield" class="w-7 h-7 text-[#d7a84a]"></i>
        </div>
        <h2 class="font-display text-[26px]">Leaders Portal</h2>
        <p class="text-[#c4a9cf] text-[13px] mt-1 font-mono">AUTHORIZED ACCESS ONLY</p>
      </div>

      <form id="leaders-form" onsubmit="handleLeadersLogin(event)" class="space-y-4">
        <div>
          <label class="block text-[12px] font-[600] text-[#a787b3] mb-1 uppercase tracking-wider">Leadership ID</label>
          <input required type="text" placeholder="e.g. MFM-CF-1049" class="w-full bg-[#18131d] border border-[#4a1a6b] rounded-[12px] px-4 py-3 text-white focus:outline-none focus:border-[#d7a84a] transition" />
        </div>
        <div>
          <label class="block text-[12px] font-[600] text-[#a787b3] mb-1 uppercase tracking-wider">Passcode</label>
          <input required type="password" placeholder="••••••••" class="w-full bg-[#18131d] border border-[#4a1a6b] rounded-[12px] px-4 py-3 text-white focus:outline-none focus:border-[#d7a84a] transition" />
        </div>
        <button type="submit" class="w-full mt-2 py-3.5 rounded-[12px] bg-[#d7a84a] text-[#2d1042] font-[800] text-[15px] hover:bg-[#f3d38a] transition shadow-[0_10px_20px_rgba(215,168,74,0.2)]">Authenticate</button>
      </form>
    </div>
  </div>
`;
html = html.replace('<!-- CAMPUS HUB VIEW -->', missingModals + '\n  <!-- CAMPUS HUB VIEW -->');


// 3. Inject javascript modifications
// We will replace `function showToast` ... up to `</script>` to add the logic for new modals.
const newJsLogic = `
function openModal(id) {
  const el = document.getElementById(id);
  if(!el) return;
  el.classList.remove('hidden');
  // Trigger animation next frame
  requestAnimationFrame(() => {
    el.classList.add('modal-open');
  });
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const el = document.getElementById(id);
  if(!el) return;
  el.classList.remove('modal-open');
  setTimeout(() => {
    el.classList.add('hidden');
    document.body.style.overflow = '';
  }, 400); // Wait for transition
}

// Override existing close functions to use the new animated close
function openJoinModal() { openModal('join-modal'); }
function closeJoinModal() { closeModal('join-modal'); }
function openPioneerModal() { openModal('pioneer-modal'); }
function closePioneerModal() { closeModal('pioneer-modal'); }
function openGiveModal() { openModal('give-modal'); }
function closeGiveModal() { closeModal('give-modal'); }

function showToast(msg, tone='dark'){
  const c = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = 'toast' + (tone==='gold' ? ' gold' : '');
  el.innerHTML = \`<i data-lucide="\${tone==='gold' ? 'sparkles' : 'check-circle'}" class="w-4 h-4 opacity-90"></i><span>\${msg}</span>\`;
  c.appendChild(el);
  lucide.createIcons({nodes:[el]});
  setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateY(6px)'; setTimeout(()=>el.remove(), 280); }, 3800);
}

// Additional handlers
async function handleVolunteer(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.classList.add('btn-loading');
  await new Promise(r => setTimeout(r, 1200));
  btn.classList.remove('btn-loading');
  closeModal('volunteer-modal');
  e.target.reset();
  showToast("Application submitted successfully! We'll be in touch.", "gold");
}

async function handleLeadersLogin(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.classList.add('btn-loading', 'btn-loading-dark');
  await new Promise(r => setTimeout(r, 1500));
  btn.classList.remove('btn-loading', 'btn-loading-dark');
  closeModal('leaders-modal');
  e.target.reset();
  showToast("Invalid credentials. Portal access denied.", "dark");
}

function playSermon(el) {
  const icon = el.querySelector('i');
  if(icon.getAttribute('data-lucide') === 'play') {
    icon.setAttribute('data-lucide', 'pause');
    showToast("Buffering sermon audio...");
  } else {
    icon.setAttribute('data-lucide', 'play');
  }
  lucide.createIcons({nodes:[el]});
}

let isRadioPlaying = false;
function toggleRadioPlay() {
  isRadioPlaying = !isRadioPlaying;
  const icon = document.getElementById('radio-icon');
  icon.setAttribute('data-lucide', isRadioPlaying ? 'pause' : 'play');
  lucide.createIcons();
  if (isRadioPlaying) {
    showToast("Connecting to live stream...", "gold");
  }
}

// Enhance existing form submissions to show loading
function setupPremiumForms() {
  document.querySelectorAll('form').forEach(f => {
    if (f.id === 'volunteer-form' || f.id === 'leaders-form') return; // Handled separately
    const oldSubmit = f.onsubmit;
    f.addEventListener('submit', async (e) => {
      // It's handled by existing event listeners in setupJoinForms
    });
  });
}
`;

html = html.replace('function showToast(msg, tone=\'dark\'){', newJsLogic + '\n/* Replaced original showToast logic above */\n');

// Modify existing forms inside setupJoinForms to show loading
const newSetupJoinForms = `
function setupJoinForms(){
  const handler = async (e)=>{
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]') || e.target.querySelector('button');
    if(btn) btn.classList.add('btn-loading');
    
    await new Promise(r => setTimeout(r, 1000));
    
    if(btn) btn.classList.remove('btn-loading');
    
    const fd = new FormData(e.target);
    const campus = fd.get('campus') || currentCampusId;
    const first = fd.get('firstName') || fd.get('fullName')?.split(' ')[0] || 'Friend';
    e.target.reset();
    closeJoinModal();
    showToast(\`Thanks \${first}! Your \${getCampusLabel(campus)} coordinator will WhatsApp you within 12 hours.\`, 'gold');
  };
  document.getElementById('join-form')?.addEventListener('submit', handler);
  document.getElementById('join-modal-form')?.addEventListener('submit', handler);
  document.getElementById('pioneer-form')?.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]') || e.target.querySelector('button');
    if(btn) btn.classList.add('btn-loading');
    
    await new Promise(r => setTimeout(r, 1500));
    
    if(btn) btn.classList.remove('btn-loading');
    const fd = new FormData(e.target);
    closePioneerModal();
    showToast(\`Pioneer application received for \${fd.get('school')}. State coordinator will call within 48 hrs.\`, 'gold');
    e.target.reset();
  });
}
`;

html = html.replace(/function setupJoinForms\(\)\{[\\s\\S]*?\}\nfunction getCampusLabel/, newSetupJoinForms + '\\nfunction getCampusLabel');

// 4. Update the onclicks in HTML
html = html.replace(/onclick="showToast\('Full events calendar opening soon.'\)"/g, 'onclick="openModal(\'calendar-modal\')"');
html = html.replace(/onclick="showToast\('Sermon Library launching this month.'\)"/g, 'onclick="openModal(\'sermon-modal\')"');
html = html.replace(/onclick="showToast\('Devotional reading list opened in new tab.', 'gold'\)"/g, 'onclick="openModal(\'devotional-modal\')"');
html = html.replace(/onclick="showToast\('MFMCF Radio - streaming soon!'\)"/g, 'onclick="openModal(\'radio-modal\')"');
html = html.replace(/onclick="showToast\('Volunteer sign-up sent to your email.'\); return false;"/g, 'onclick="openModal(\'volunteer-modal\'); return false;"');
html = html.replace(/onclick="showToast\('Leaders portal opening soon.'\); return false;"/g, 'onclick="openModal(\'leaders-modal\'); return false;"');

// Add animation classes to existing modals so they work smoothly
html = html.replace(/id="join-modal" class="fixed inset-0 z-\[70\] hidden"/g, 'id="join-modal" class="fixed inset-0 z-[70] hidden"');
html = html.replace(/<div class="soft-card w-full max-w-xl/g, '<div class="modal-content soft-card w-full max-w-xl');
html = html.replace(/<div class="absolute inset-0 bg-\[#1a0c26\]\/70 backdrop-blur-sm"/g, '<div class="modal-backdrop absolute inset-0 bg-[#1a0c26]/70 backdrop-blur-sm"');
// Do similar replacement for pioneer modal and give modal:
html = html.replace(/<div class="soft-card w-full max-w-2xl/g, '<div class="modal-content soft-card w-full max-w-2xl');
html = html.replace(/<div class="soft-card w-full max-w-md/g, '<div class="modal-content soft-card w-full max-w-md');

// Also update social links
html = html.replace(/href="#" onclick="showToast\('Opening Instagram'\); return false;"/g, 'href="https://instagram.com/mfmworldwide" target="_blank" rel="noopener noreferrer"');
html = html.replace(/href="#" onclick="showToast\('Opening YouTube'\); return false;"/g, 'href="https://youtube.com/@MFMMinistries" target="_blank" rel="noopener noreferrer"');
html = html.replace(/href="#" onclick="showToast\('Opening X \/ Twitter'\); return false;"/g, 'href="https://twitter.com/mfmministries" target="_blank" rel="noopener noreferrer"');

fs.writeFileSync('index.html', html);
console.log("Successfully updated index.html");
