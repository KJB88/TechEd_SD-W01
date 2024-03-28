<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 01 Assessment :mortar_board:</h1>
  <p>
    <a href="http://www.LinkedIn.com/in/kevin-barr1988">LinkedIn</a> |
    <a href="http://kjb88.github.io">Website</a> |
    <a href="mailto:kevinbarr.business@gmail.com">Email</a> |
    <a href="https://github.com/KJB88">Github</a>
  </p>
<p>
  Repository for coursework for TechEd Software Development Bootcamp - Week 01.
</p>
</div>
<section>
<h2>Project Outline</h2>
<p>Create a simple website using HTML, CSS (and optionally JavaScript) to recreate the structural style of this website: https://spacey-kappa.vercel.app/ . Links do not need to be functional (eg: move to a different page).</p>
  <p><b>All requirements and stretch goals were achieved. No specific difficulties.</b></p>
</section>
<section>
<h2>Requirements</h2>
<ul>
<li>Correct use of semantic HTML elements, including header, footer and nav - <b>COMPLETE</b></li>
<li>Correct use of CSS absolute positioning for overlaying text - <b>COMPLETE</b></li>
<li>Corect use of CSS flexbox for layout and nav links - <b>COMPLETE</b></li>
<li>Correct use of image elements and file paths to image files - <b>COMPLETE</b></li>
</ul>
</section>
<section>
<h2>Stretch Goals</h2>
<ul>
<li>Add an audio player that displays audio file information (artist, title) with more than one track - <b>COMPLETE</b></li>
<li>Automatically update the footer with the current year using JavaScript - <b>COMPLETE</b></li>
<li>Implement a light and dark mode using JavaScript and CSS - <b>COMPLETE</b></li>
</ul>
</section>
<section>
<h2>Implementation (of Requirements)</h2>
<h3>Correct Semantic HTML</h3>
  <p>Header, Main and Footer are all contained within Body. Each section of the website (denoted by the background image) is marked by section tags. Inside each Section, the content is wrapped in Article tags, as a section could contain resources not relevant to the article (such as a nested advertisement). </p>
  <h3>Correct CSS: Absolute Positioning</h3>
  <p>Both the header subtitle and the article posts both use absolute positioning to position themselves correctly on the page.</p>
  <h3>Correct Flexboxing</h3>
  Flexboxes are used throughout the document to organise elements neatly and grouped appropriately. The Header, Nav, Article ('Featured Post'), Footer div and Audio Player all use flexboxes to group their children together.
  <h3>Images & File Paths</h3>
  Images, audio and JavaScript files are all stored within an Assets folder, with subfolders denoting their types: img, audio, js. These are handled through their releative filepaths within the JavaScript and HTML. audioPlayer.js has clearly defined filepaths within its audioLibrary array.
</section>
<section>
  <h2>Implementation (of Stretch Goals)</h2>
  <h3>Audio Player</h3>
  <p>The audio container is defined within main as a div, prior to the closing main tag. This div contains the audio player (audio element) and a span which acts as a container for the audio label.
    </p>
  <p>
    These elements are targeted by audioPlayer.js to handle playing the next track and updating the audio label with the correct audio data (artist, title). The audio player is also pointed to the file path to the next song in the library after the current song has ended. The index counter (currentTrackIndex) is handled appropriately to avoid overflowing the bounds of the array.
  </p>
  <p>
    The CSS for the audio player and label is mainly handled within the containing div. The div ensures that the audio player is always visible via sticky positioning. It also handles the flexbox positioning and alignment of the audio player and label (its children).
  </p>
  <h3>Automatic Footer Date</h3>
  <p>
  The Footer is automatically populated with the current year using new Date()getFullYear(). This is contained within footerDate.js. It also using template literals to join strings together with the company name and copyright symbol.
    </p>
  <h3>Light & Dark Mode</h3>
  <p>Light & Dark Mode works by swapping which data-theme is targeted by the document. Initially, it is set in the HTML tag as data-theme="dark". However, upon pressing the mode toggle button in the header, it will switch to the opposite theme. This will change text and drop-shadow color, as well as drop shadow positioning. It will also change any box-shadow color and positioning, including border colors. </p>
  <p>The JavaScript file called viewModeToggle.js handles the input event, theme comparison and applying the new theme to the document. This will also update the button label to reflect the new theme mode.</p>
  <p>The CSS for the dark/light themes are held in data-theme property blocks. Inside of these, they include variables which are assigned specific colours depending the mode. These themes also alter the brightness of the document. Due to how the eye perceives drop-shadows, the displacement of the drop-shadow must be changed depending on the contrasting color. This is also held within a variable inside each theme.</p>
</section>
<section>
  <h2>Honorary Mentions</h2>
  <h3>Modular CSS Classes</h3>
Using classes within CSS, I create a drop-shadow-2px class and a no-pointer-events class which I used frequently throughout the project to generate stylised text and to remove cursor state changes on static elements. The drop-shadow-2px class also utilises variables modified by the theme, producing theme-responsive drop shadows throughout the project.
    <h3>ARIA Labelling</h3>
I have applied aria-labelling to interactive elements that are not immediately obvious as to what they contain via semantics. I have added aria labels to anchor links to explain where the link goes, as an example. Another addition is on the theme mode button and audio player.
</section>
