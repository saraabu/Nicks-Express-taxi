// Update footer year so the copyright notice stays current.
const currentYearEl = document.getElementById('current-year');
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}
