const siteBack = document.getElementsByTagName('html');

const dishList = document.getElementsByClassName('dishList');

// Auto-populate image author and reference when image is selected
const imgSelectElement = document.getElementById('imgsrc');
if (imgSelectElement) {
  imgSelectElement.addEventListener('change', function(e) {
    const selectedOption = e.target.selectedOptions[0];
    const imgRef = selectedOption.dataset.ref || '';
    const imgAuth = selectedOption.dataset.auth || '';
    
    // Auto-populate the author and reference fields
    const imgAuthField = document.getElementById('imgauth');
    const imgRefField = document.getElementById('imgref');
    
    if (imgAuthField) imgAuthField.value = imgAuth;
    if (imgRefField) imgRefField.value = imgRef;
  });
}