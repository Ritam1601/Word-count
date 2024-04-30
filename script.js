const screenshotUpload = document.getElementById('screenshotUpload');
const wordCountDisplay = document.getElementById('wordCount');


screenshotUpload.addEventListener('change', async (event) => {
  const file = event.target.files[0];


  if (!file) {
    return;
  }


  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;


  img.onload = async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);


    const text = await Tesseract.recognize(canvas, 'eng'); // Change 'eng' for other languages


    const words = text.split(/\s+/);
    const wordCount = words.length;


    wordCountDisplay.textContent = `Number of words: ${wordCount}`;
  };
});

