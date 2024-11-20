(function beer() {
  let lyricsContainer = document.getElementById('lyrics');
  for (let i = 99; i >= 1; i--) {
    let verse = document.createElement('div');
    verse.classList.add('verse');
    if (i > 1) {
      verse.innerHTML = `
        ${i} bottles of beer on the wall, ${i} bottles of beer.<br>
        Take one down and pass it around, ${i - 1} ${i - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.<br>
      `;
    } else {
      verse.innerHTML = `
        ${i} bottle of beer on the wall, ${i} bottle of beer.<br>
        Take it down and pass it around, no more bottles of beer on the wall.<br>
      `;
    }
    lyricsContainer.appendChild(verse);
  }
  let lastVerse = document.createElement('div');
  lastVerse.classList.add('verse');
  lastVerse.innerHTML = `
    No more bottles of beer on the wall, no more bottles of beer.<br>
    Go to the store and buy some more, 99 bottles of beer on the wall.<br>
  `;
  lyricsContainer.appendChild(lastVerse);
}());