$(function(){

  $('button').on('click', function(){
    // console.log('hello')

    $.ajax({
         url: "https://public-holiday.p.rapidapi.com/2020/UA",
         type: "GET",
         beforeSend: function(xhr){
           xhr.setRequestHeader("x-rapidapi-host", "public-holiday.p.rapidapi.com");
           xhr.setRequestHeader("x-rapidapi-key",  token);
           xhr.setRequestHeader("accepts", "json");
         },
         success: function(d){
           d.map(elt => {
             const result = $('#result');
             // const card = $(`<div class="card"></div>`)
             // const cardBody = $(`<div class="card-body"></div>`)
             // const cardTitle = $(`<h5 class="card-title">${elt.name}</h5>`)
             // const cardText = $(`<p class="card-text">${elt.localName}</p>`)
             // const button = $(`<a href="#" class="btn btn-secondary">${elt.date}</a>`)
             const card1 = $(`<div class="card">
                <div class="card-body">
                  <h5 class="card-title">${elt.name}</h5>
                  <p class="card-text">${elt.localName}</p>
                  <a href="#" class="btn btn-primary">${elt.date}</a>
                </div>`)

             // cardTitle.appendTo(cardBody);
             // cardText.appendTo(cardBody);
             // button.appendTo(cardBody);
             // cardBody.appendTo(card);
             // card1.appendTo(result);
             card1.appendTo(result);
           })
         }
      });
  })
});
