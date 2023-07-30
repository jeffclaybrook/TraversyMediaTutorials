const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
   {
      image: './images/product-1.webp',
      text: 'Bed in bedroom'
   },
   {
      image: './images/product-2.webp',
      text: 'Mountain view'
   },
   {
      image: './images/product-3.webp',
      text: 'White bedroom'
   },
   {
      image: './images/product-4.webp',
      text: 'Bed and wood floors'
   },
   {
      image: './images/product-5.webp',
      text: 'Kitchen with island'
   },
   {
      image: './images/product-6.webp',
      text: 'Reading nook'
   },
   {
      image: './images/product-7.webp',
      text: 'Living room'
   },
   {
      image: './images/product-8.webp',
      text: 'Breakfast nook'
   },
   {
      image: './images/product-9.webp',
      text: 'Bed and nightstand'
   }
];

data.forEach(createBox);

function createBox(item) {
   const box = document.createElement('div');
   const { image, text } = item;
   box.classList.add('box');
   box.innerHTML = `
      <img src="${image}" alt="${text}">
      <p class="info">${text}</p>
   `;
   box.addEventListener('click', () => {
      setTextMessage(text);
      speakText();
      box.classList.add('active');
      setTimeout(() => box.classList.remove('active'), 800);
   })
   main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();

let voices = [];

function getVoices() {
   voices = speechSynthesis.getVoices();
   voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.innerText = `${voice.name} ${voice.lang}`;
      voiceSelect.appendChild(option);
   });
}

function setTextMessage(text) {
   message.text = text;
}

function speakText() {
   speechSynthesis.speak(message);
}

function setVoice(e) {
   message.voice = voices.find(voice => voice.name === e.target.value);
}

speechSynthesis.addEventListener('voiceschanged', getVoices);

toggleBtn.addEventListener('click', () => 
   document.getElementById('text-box').classList.toggle('show')
);

closeBtn.addEventListener('click', () => 
   document.getElementById('text-box').classList.remove('show')
);

voiceSelect.addEventListener('change', setVoice);

readBtn.addEventListener('click', () => {
   setTextMessage(textarea.value);
   speakText();
});

getVoices();