var cdn = 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.1.0/';
//plugin/markdown/marked.min.js
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'linear',
   dependencies: [
        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: cdn+'lib/js/classList.js', condition: function() { return !document.body.classList; } },
         // Interpret Markdown in <section> elements
        { src: cdn+'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: cdn+'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        // Speaker notes
        { src: cdn+'plugin/notes/notes.js', async: true },
        // Remote control your reveal.js presentation using a touch device
        { src: cdn+'plugin/remotes/remotes.js', async: true }
        ]
})
