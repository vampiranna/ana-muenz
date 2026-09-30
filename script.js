document.querySelectorAll('[data-close-case]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = document.getElementById(button.dataset.closeCase);
    if (!project) return;
    project.open = false;
    const summary = project.querySelector('summary');
    summary.focus({ preventScroll: true });
    summary.scrollIntoView({ block: 'start', behavior: 'auto' });
  });
});

// In-page links can target content inside a closed, native case disclosure.
function revealLinkedCase() {
  if (!location.hash) return;
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  const project = target?.closest('details.project');
  if (project) project.open = true;
}
revealLinkedCase();
window.addEventListener('hashchange', revealLinkedCase);
