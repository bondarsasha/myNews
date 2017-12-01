document.addEventListener("DOMContentLoaded", ready);
function ready () {
  //harmonic
  function showHarmonic (harmonicArr) {
    for (key in harmonicArr) {
      var titleHarm = harmonicArr[key].title;
      var descriptionHarm = harmonicArr[key].description;
      var harmonicUl = document.querySelector('#harmonic_news>ul');

      var harmonicNewsLi = document.createElement('li');
      harmonicNewsLi.textContent = titleHarm;
      harmonicUl.appendChild(harmonicNewsLi);

      var harmonicNewsLiUl = document.createElement('ul');
      harmonicNewsLiUl.style.display = 'none';
      harmonicNewsLi.appendChild(harmonicNewsLiUl);

      var harmonicNewsLiUlLi = document.createElement('li');
      harmonicNewsLiUlLi.textContent = descriptionHarm;
      harmonicNewsLiUl.appendChild(harmonicNewsLiUlLi);
    }
  }

  //get
  $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
    function(e) {
      var harmonicArr = e.articles;
      showHarmonic(harmonicArr);
    }
  );
  //harmonic news
  $('#harmonic_news').on('click', "li", function(){
    var itemElemetnSelector = $(this).children('ul');
      if (itemElemetnSelector != null) {
       if (itemElemetnSelector[0].style.display == 'none') {
        var harmonicNewsNew = document.querySelectorAll('#harmonic_news>ul ul');
        for (var j = 0; j < harmonicNewsNew.length; j++) {
         harmonicNewsNew[j].style.display = 'none';
        }
        itemElemetnSelector[0].style.display = 'block';
       } else {
        itemElemetnSelector[0].style.display = 'none';
       }
      }
  });


}
