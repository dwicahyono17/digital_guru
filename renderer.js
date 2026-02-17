// ============================================
// FUNGSI RENDER UNTUK MENAMPILKAN DATA
// ============================================

// Render mata pelajaran (CP, TP, Modul)
function renderSubjects(containerId, typeLabel, linkKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = '';
  subjects.forEach(sub => {
    html += `
      <div class="card rounded-2xl p-5 flex flex-col items-center text-center">
        <div class="icon-subject ${sub.gradClass}" aria-hidden="true"><i class="${sub.iconClass}"></i></div>
        <h3 class="font-semibold text-sm mb-1">${sub.name}</h3>
        <p class="text-xs mb-3">${typeLabel}</p>
        <div class="flex gap-2 w-full">
          <button class="btn-outline flex-1 py-2 rounded-lg text-xs font-medium" onclick="window.open('${sub.links[linkKey]}')" aria-label="View ${typeLabel} ${sub.name}"><i class="fas fa-file-alt" aria-hidden="true"></i> View</button>
          <button class="btn-primary flex-1 py-2 rounded-lg text-xs font-medium" onclick="window.open('${sub.links[linkKey]}')" aria-label="Download ${typeLabel} ${sub.name}"><i class="fas fa-download" aria-hidden="true"></i> Download</button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Render Buku Siswa dengan struktur menu per mata pelajaran
function renderBukuMenu(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = '';
  bukuSubjects.forEach(sub => {
    html += `
      <div class="card rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-all" onclick="showSection('buku-${sub.id}')" role="button" tabindex="0" aria-label="Buka buku ${sub.name}">
        <div class="icon-subject ${sub.gradClass} mb-4" aria-hidden="true"><i class="${sub.iconClass}"></i></div>
        <h3 class="font-bold text-lg mb-2">${sub.name}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">${sub.items.length} item</p>
        <span class="mt-3 text-xs text-gray-700 dark:text-gray-200 flex items-center gap-1"><i class="fas fa-arrow-right"></i> Klik untuk lihat</span>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Render detail buku per mapel
function renderBukuDetail(mapelId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const subject = bukuSubjects.find(s => s.id === mapelId);
  if (!subject) return;
  let html = '';
  subject.items.forEach(item => {
    html += `
      <div class="card rounded-2xl p-5 flex flex-col items-center text-center">
        <div class="icon-subject ${item.gradClass}" aria-hidden="true"><i class="${item.iconClass}"></i></div>
        <h4 class="font-bold text-sm mb-1">${item.type}</h4>
        <p class="text-xs">${item.authors}</p>
        <p class="text-xs mb-3">${item.year}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-outline w-full py-2 rounded-lg text-xs font-medium" aria-label="View ${subject.name} ${item.type}">
          <i class="fas fa-eye" aria-hidden="true"></i> View
        </a>
      </div>
    `;
  });
  container.innerHTML = html;
}