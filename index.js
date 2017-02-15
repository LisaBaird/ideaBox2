
function IdeaObj(title, body, quality){
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

$(".save").on('click',function() {
    var newText=$(".my-idea").val();
    var newDescript=$(".my-descript").val();
    var ideaId= Date.now;
    var idea = new IdeaObj(newText, newDescript);
  $(".idea-container").prepend(<article class = "idea-card">
    <button class="delete" type='radio'>X</button>
    <p class="stored-idea"></p>
      <p class="stored-descript"></p>
    <button class="up-btn" type ='radio'>U</button>
    <button class="down-btn" type='radio'>D</button>
    <p class="quality">Quality: Swill </p>
  </article>)  
    $(".stored-idea").text(newText);
    $(".stored-descript").text(newDescript);
  });

// Enable the U D buttons.  Use a conditional for the different choices of quality: swill, mediocre and genius.
//

$('up-btn').on('click', function() {
  var plausible = "plausible"
  var genius = "genius"
  if(".quality").text("swill").text(plausible)
} else {
  if(".quality").text("mediocre").text(genius)
}
})

$('down-btn').on('click', function() {
  var plausible = "plausible"
  var genius = "genius"
  var swill ="swill"
  if(".quality").text("genius").text(mediocre)
} else {
  if(".quality").text("plausible").text(swill)
}
