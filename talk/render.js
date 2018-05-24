// The template code
var templateSource = document.getElementById('template').innerHTML;
// compile the template
var template = Handlebars.compile(templateSource);
// The div/container that we are going to display the results in
var resultsPlaceholder = document.getElementById('results');
resultsPlaceholder.innerHTML = template(data);
