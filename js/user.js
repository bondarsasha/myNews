document.addEventListener("DOMContentLoaded", ready);
function ready() {
//button
      var down = document.getElementById('nav-trigger');

      down.addEventListener("click", function() {
        var showUl = document.getElementById('drop_down');
          if (showUl.style.display == 'none') {
            showUl.style.display = 'block';
          } else {
            showUl.style.display = 'none';
          }
      });

//slider

      var slider = document.getElementById('images');
      var imgArr = ['6.jpg', '7.jpg', '8.jpg'];
      slider.src = "img/" + imgArr[0];

      var prevBtn = document.getElementById('prevBtn');
      var nextBtn = document.getElementById('nextBtn');

      nextBtn.addEventListener("click", next, false);
      prevBtn.addEventListener("click", prev, false);

      var i=0;

      function prev() {
          if (i == 0) {
            i = imgArr.length;
          } i--;
          slider.src = "img/" + imgArr[i];
      };

      function next() {
          j = imgArr.length-1;
            if(i == j) {
              i = 0;
            }
            i++;
            slider.src = "img/" + imgArr[i];
      }
      setInterval( next, 2000 );

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
                newsItem.className = 'news-item';
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

          //Accordeon
          var tabs = document.querySelectorAll("div.tab"),
          texts = document.querySelectorAll("div.tab>p");

          tabs[0].onclick = function expand() {
            if (texts[0].className == "displayed") {
              texts[0].className = "hidden";
              tabs[0].classList.remove("expanded");
            } else {
              for (var i = 0; i < texts.length; i++) {
                texts[i].className = "hidden";
                tabs[i].classList.remove("expanded");
                texts[0].className = "displayed";
                tabs[0].classList.add("expanded");
              }
            }
          };
          tabs[1].onclick = function expand() {
            if (texts[1].className == "displayed") {
              texts[1].className = "hidden";
              tabs[1].classList.remove("expanded");
            } else {
              for (var i = 0; i < texts.length; i++) {
                texts[i].className = "hidden";
                tabs[i].classList.remove("expanded");
                texts[1].className = "displayed";
                tabs[1].classList.add("expanded");
              }
            }
          };
          tabs[2].onclick = function expand() {
            if (texts[2].className == "displayed") {
              texts[2].className = "hidden";
              tabs[2].classList.remove("expanded");
            } else {
              for (var i = 0; i < texts.length; i++) {
                texts[i].className = "hidden";
                tabs[i].classList.remove("expanded");
                texts[2].className = "displayed";
                tabs[2].classList.add("expanded");
              }
            }
          };
          tabs[3].onclick = function expand() {
            if (texts[3].className == "displayed") {
              texts[3].className = "hidden";
              tabs[3].classList.remove("expanded");
            } else {
              for (var i = 0; i < texts.length; i++) {
                texts[i].className = "hidden";
                tabs[i].classList.remove("expanded");
                texts[3].className = "displayed";
                tabs[3].classList.add("expanded");
              }
            }
          };




}
