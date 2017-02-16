
function IdeaObj(title, body, quality){
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

function hideExample () {
    $('idea-card-example').addClass(hide);
  }
// function transfer (){
//   $(.save-btn).on('click', function(){
//     var newText=$(".my-idea").val();
//     var newDescript=$(".my-descript").val();
//     $(.storedidea).text(newText);
//     $(.storeddescript).text(newDescript);
//   })
// }


$(".save").on('click',function() {
    var newText= $(".my-idea").val();
    var newDescript= $(".my-descript").val();

    var idea = new IdeaObj(newText, newDescript);
    // $(.storedidea).text(newText);
    // $(.storeddescript).text(newDescript);
  $(".idea-container").prepend(`
    <article id="${idea.id}" class="idea-card">
      <button class="delete" type='radio'>X</button>
      <p class="stored-idea">${idea.title}</p>
      <p class="stored-descript">${idea.body}</p>
      <button class="up-btn">U</button>
      <button class="down-btn">D</button>
      <p class="quality">Quality:<span class="choice">Swill</span></p>
    </article>`);
    // $(.storedidea).text(newText);
    // $(.storeddescript).text(newDescript);
  });

// $('.idea-container').on('click','.up-btn', function() {
//     console.log(this);
// $('li:contains("swill")').text("plausible");
// $('li:contains("plausible")').text("genius");
// });
// // Enable the U D buttons.  Use a conditional for the different choices of quality: swill, mediocre and genius.
// //
//
// $('.idea-container').on('click','.up-btn', function() {
//   console.log(this);
//     if ($(.choice).text(plausible).
//   } else {
//     if($(.choice).text()==("mediocre").text(genius)
//   }
// })
//
// // $('.up-btn').on('click', function() {
// //   var plausible = "plausible"
// //   var genius = "genius"
// //   console.log('hi');
// //
// // })
//
// // $('down-btn').on('click', function() {
// //   var plausible = "plausible"
// //   var genius = "genius"
// //   var swill ="swill"
// //   if(".quality").text("genius").text(mediocre)
// // } else {
// //   if(".quality").text("plausible").text(swill)
// // }
