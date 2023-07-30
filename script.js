const pages = [
 {
  title: "Form Validator",
  url: "1.FormValidator/index.html"
 },
 {
  title: "Movie Seat Booking",
  url: "2.MovieSeatBooking_DOM&LocalStorage/index.html"
 },
 {
  title: "Custom Video Player",
  url: "3.CustomVideoPlayer/index.html"
 },
 {
  title: "Exchange Rate Calculator",
  url: "4.ExchangeRateCalculator_Fetch&JSON/index.html"
 },
 {
  title: "DOM Array Methods",
  url: "5.DOMArrayMethods_forEachMapFilterSortReduce/index.html"
 },
 {
  title: "Menu Slider & Modal",
  url: "6.MenuSlider&Modal_DOM&CSS/index.html"
 },
 {
  title: "Hangman Game",
  url: "7.HangmanGame_DOMSVGEvents/index.html"
 },
 {
  title: "Meal Finder",
  url: "8.MealFinder_Fetch&MealDBAPI/index.html"
 },
 {
  title: "Expense Tracker",
  url: "9.ExpenseTracker_ArrayMethods&LocalStorage/index.html"
 },
 {
  title: "Music Player",
  url: "10.MusicPlayer_HTML5AudioAPI/index.html"
 },
 {
  title: "Infinite Scroll Posts",
  url: "11.InfiniteScrollPosts_FetchAsyncAwaitCSSLoader/index.html"
 },
 {
  title: "Typing Game",
  url: "12.TypingGame_DOMIntervalsEvents/index.html"
 },
 {
  title: "Speech Text Reader",
  url: "13.SpeechTextReader_SpeechSynthesis/index.html"
 },
 {
  title: "Memory Cards",
  url: "14.MemoryCards_CSSEffectsLocalStorage/index.html"
 },
 {
  title: "Lyrics Search",
  url: "15.LyricsSearchApp_FetchPaginationLyrics.ovhAPI/index.html"
 },
 {
  title: "Relaxer App",
  url: "16.RelaxerApp_CSSAnimationsSetTimeout/index.html"
 },
 {
  title: "Breakout Game",
  url: "17.Breakout Game_HTML5CanvasAPI/index.html"
 },
 {
  title: "New Year Countdown",
  url: "18.NewYearCountdown_DOMDate&Time/index.html"
 },
 {
  title: "Sortable List",
  url: "19.SortableList_Drag&DropAPI/index.html"
 },
 {
  title: "Speech Recognition",
  url: "20.SpeechRecognition/index.html"
 }
]

const createNav = () => {
 const nav = document.querySelector("nav");
 const links = pages.map((item, i) => {
  const { title, url } = item;
  return `
  <li>
   <a href="${url}">${title}</a>
  </li>
  `
 }).join("");
 nav.innerHTML += `
 <ul>${links}</ul>
 `
}

createNav()