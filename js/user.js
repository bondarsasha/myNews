document.addEventListener("DOMContentLoaded", ready);
function ready() {
//button
//       var down = document.getElementById('nav-trigger');
//
//       down.addEventListener("click", function() {
//         var showUl = document.getElementById('drop_down');
//           if (showUl.style.display == 'none') {
//             showUl.style.display = 'block';
//           } else {
//             showUl.style.display = 'none';
//           }
//       });

      //sign-modal
          var sign = document.getElementById('sign_in');

          sign.addEventListener("click", function() {
            var showModal = document.getElementById('modal_sign');
              if (showModal.style.display == 'none') {
                showModal.style.display = 'block';
              } else {
                showModal.style.display = 'none';
              }
          });

          //button in sign_form
          var close = document.getElementById('close');

          close.addEventListener("click", function() {
            var showModal = document.getElementById('modal_sign');
              if (showModal.style.display == 'block') {
                showModal.style.display = 'none';
              } else {
                showModal.style.display = 'block';
              }
          });

          var modalClose = document.getElementById('modal_sign')

            modalClose.addEventListener("click", function(e) {
              if (e.target.id === 'modal_sign') {
                modalClose.style.display = 'none';
              }
            })

            //check-modal

                var check = document.getElementById('check_in');

                check.addEventListener("click", function() {
                  var showModalCheck = document.getElementById('modal_check');
                    if (showModalCheck.style.display == 'none') {
                      showModalCheck.style.display = 'block';
                    } else {
                      showModalCheck.style.display = 'none';
                    }
                });

                //button in check_form
                var closeCheck = document.getElementById('closeCheck');

                closeCheck.addEventListener("click", function() {
                  var showModalCheck = document.getElementById('modal_check');
                    if (showModalCheck.style.display == 'block') {
                      showModalCheck.style.display = 'none';
                    } else {
                      showModalCheck.style.display = 'block';
                    }
                });

                var modalCloseCheck = document.getElementById('modal_check')

                  modalCloseCheck.addEventListener("click", function(e) {
                    if (e.target.id === 'modal_check') {
                      modalCloseCheck.style.display = 'none';
                    }
                  })

            //parse_news
            function acceptance(newsArr) {
              for(key in newsArr) {
                var title = newsArr[key].title;
                var author = newsArr[key].author;
                var description = newsArr[key].description;
                var publishedAt = newsArr[key].publishedAt;
                var url = newsArr[key].url;
                var urlToImage = newsArr[key].urlToImage;
                var createNews = document.getElementById('parse_news');

                var newsItem = document.createElement('div');
                newsItem.className = 'col-xs-12 news-item';
                createNews.appendChild(newsItem);

                var newsTitle = document.createElement('h3');
                newsTitle.className = 'news-title';
                newsItem.appendChild(newsTitle);

                var aTitle = document.createElement('a');
                aTitle.href = url;
                aTitle.textContent = title;
                newsTitle.appendChild(aTitle);

                var div = document.createElement('div');
                newsItem.appendChild(div);

                var newsRubric = document.createElement('span');
                newsRubric.className = 'news-rubric';
                newsRubric.textContent = author;
                div.appendChild(newsRubric);

                var newsData = document.createElement('span');
                newsData.className = 'news-data';
                newsData.textContent = publishedAt;
                div.appendChild(newsData);

                var clearfix = document.createElement('div');
                clearfix.className = 'clearfix';
                newsItem.appendChild(clearfix);

                var aContent = document.createElement('a');
                aContent.className = 'col-xs-12 col-sm-5 col-md-4 news-img';
                aContent.href = url;
                clearfix.appendChild(aContent);

                var imgContent = document.createElement('img');
                imgContent.src = urlToImage;
                imgContent.alt = title;
                imgContent.style.width = '100%';
                aContent.appendChild(imgContent);

                var newsText = document.createElement('div');
                newsText.className = 'col-xs-12 col-sm-7 col-md-4 news-text';
                newsText.textContent = description;
                clearfix.appendChild(newsText);
              }
            }

          //get
          $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
            function(e) {
              var newsArr = e.articles;
              acceptance(newsArr);
            }
          );

          //scroll to top
          $().UItoTop({ easingType: 'easeOutQuart' });

          //advertising
          function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
              "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
          }

          var showAdvertising = document.getElementById('advertising');
          setInterval(function() {
            if (getCookie('show') == undefined) {
              showAdvertising.style.display = 'none';
            }
          }, 1000);

          //slider
            var stroke = 0;
            $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
                function (result) {
                    document.getElementById('imgSlaid').src = result.articles[stroke].urlToImage;
                });

          //parse menu
          function getMenu (menuArr) {
            var createMenu = document.getElementById('parse-menu');
            menuArr = JSON.parse(menuArr);

            for(i=0; i < menuArr.length; i++) {

             var navLi = document.createElement('li');
             navLi.className = 'infoLi';
             navLi.innerHTML = "<a class='info' href='"+ menuArr[i].link +"'>" + menuArr[i].name + "</a>";
             createMenu.appendChild(navLi);
            }
          }


            //get nav menu
          $.ajax({
            url: "http://localhost/dashboard/paper/json/menu.json",
              beforeSend: function( xhr ) {
              xhr.overrideMimeType( "text/plain; charset=utf-8" );
              }
              })
            .done(function( data ) {
              getMenu(data);
            });

          //string

          var name = 'sasha';
          var familiya = 'bondar';
          var stroka = '<ul><li>' + '<a href="#"' + '</a>' + name + '<div class="ggg"' + familiya + '</div>' + '</li></ul>';

          var spisok = ['sasha', 'kolya', 'petya', 'masha', 'anya'];
          var add = '';
           for (i=0; i < spisok.length; i++) {
               add += spisok[i]+' ';
           }

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
