function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const resumeHTML = `<h2>${name}</h2><p>${email}</p><p>${summary}</p>`;
    document.getElementById('resumePreview').innerHTML = resumeHTML;
}
function downloadPDF() {
    const element = document.getElementById('resumePreview');
    const opt = { margin: 1, filename: 'resume.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: {}, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } };
    html2pdf().from(element).set(opt).save();
}
function changeTheme(theme) {
    const preview = document.getElementById('resumePreview');
    preview.className = 'resume theme-' + theme;
}