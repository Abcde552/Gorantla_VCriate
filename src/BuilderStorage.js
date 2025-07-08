export function loadTemplates() {
  return JSON.parse(localStorage.getItem("templates") || "[]");
}
export function saveTemplates(tpls) {
  localStorage.setItem("templates", JSON.stringify(tpls));
}
export function saveSubmission(templateId, data) {
  const key = `sub_${templateId}`;
  const arr = JSON.parse(localStorage.getItem(key) || "[]");
  arr.push({ data, submittedAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(arr));
}
