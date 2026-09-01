const data = window.resumeData || {};
const text = (id, value, fallback) => { const el = document.getElementById(id); if (el) el.textContent = value || fallback; };
text('hero-title', data.name ? `${data.name}｜${data.title || 'AI SEO Strategist'}` : null, '讓真正有價值的內容，被找到。');
text('hero-summary', data.summary, '以 AI 輔助研究、內容策略與搜尋優化，把專業轉化成清晰、可被理解，也能持續成長的數位資產。');
text('about-copy', data.about, '這裡將放入你的真實履歷摘要、專業定位與工作方法。');
if (data.email) { const link = document.getElementById('contact-link'); link.textContent = `${data.email} ↗`; link.href = `mailto:${data.email}`; }
document.getElementById('year').textContent = new Date().getFullYear();
const projects = document.getElementById('projects');
(data.projects || []).forEach((p, i) => { projects.insertAdjacentHTML('beforeend', `<article class="project-card"><div class="project-number">0${i + 1}</div><div><p class="card-kicker">${p.type || 'CASE STUDY'}</p><h3>${p.title || ''}</h3><p>${p.description || ''}</p>${p.result ? `<strong>${p.result}</strong>` : ''}</div></article>`); });
if (!projects.children.length) projects.innerHTML = '<p class="empty-state">作品案例將在補入真實履歷與專案資料後顯示。</p>';
const skills = document.getElementById('skills'); (data.skills || []).forEach(s => skills.insertAdjacentHTML('beforeend', `<span>${s}</span>`));
const experience = document.getElementById('experience'); (data.experience || []).forEach(x => experience.insertAdjacentHTML('beforeend', `<article class="timeline-item"><span>${x.period || ''}</span><div><h3>${x.role || ''}</h3><p>${x.company || ''}</p><p>${x.description || ''}</p></div></article>`));
if (!experience.children.length) experience.innerHTML = '<p class="empty-state">工作經歷將在補入真實履歷後顯示。</p>';
