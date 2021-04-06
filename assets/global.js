$(document).ready(function(){  

    // FAQ
    $(".gui-content-wysiwyg").hide();
    
    $(".gui-content-subtitle").click(function(){
      $(this).next(".gui-content-wysiwyg").slideToggle("slow")
        .siblings(".gui-content-wysiwyg:visible").slideUp("slow");
      $(this).toggleClass("active");
      $(this).siblings(".gui-content-subtitle").removeClass("active");
    });
    
    // Live search
    $('.search-form .search a.search').click(function(){
      $(this).closest('form').submit();
      return false;
    });
    
    $('.search-form .search input').keyup(function(){
      liveSearch();
    });
    $('.search-form .search input').bind('webkitspeechchange', function(){
      liveSearch();
    });
    
    function urlencode(str){
      return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
    }
    
    function liveSearch(){
      var query = $('.search-form .search input').val();
      query = urlencode(query.replace('/', '-slash-'));
      if(query.length > 2){
        var url = searchUrl + query + '/page1.ajax?limit=10';
        $.getJSON(url, function(json){
          
          if(json.count > 0){
            
            var productsHtml = [];
            
            $.each(json.products, function(index, product){
              var productHtml = '' +
                  '<div class="product">' +
                  '<a href="' + product.url + '" title="' + product.fulltitle + '"><img src="' + product.image.replace('50x50x2', '36x36x2') + '" alt="' + product.fulltitle + '" />' +
                  '<h4>' + product.fulltitle + '</h4>';
              
                       
              productHtml = productHtml +
                '</a></div>';
              
              productsHtml.push(productHtml);
            });
            
            productsHtml = productsHtml.join('');
            
            $('.search-form .autocomplete .products').html(productsHtml);
            $('.search-form .autocomplete .more a').attr('href', json.url);
            $('.search-form .autocomplete .more span').html('(' + json.count + ')');
            $('.search-form .autocomplete').removeClass('noresults');
          } else {
            $('.search-form .autocomplete').addClass('noresults');
          }
          $('.search-form .autocomplete').css('display', 'block');
        });
      } else {
        $('.search-form .autocomplete').css('display', 'none');
      }
    }
  });
  
  function showSearch(){
    var element = document.getElementById('search-expanded');
    element.classList.toggle("visible");
    var element2 = document.getElementById('sidebar');
    if (element2 !== null){
      element2.classList.remove("visible");
    }
    var element3 = document.getElementById('share');
    if (element3 !== null){
      element3.classList.remove("visible");
    }
  }
  
  function showFilters(){
    var element = document.getElementById('sidebar');
    element.classList.toggle("visible");
    var element2 = document.getElementById('search-expanded');
    if (element2 !== null){
      element2.classList.remove("visible");
    }
    var element3 = document.getElementById('share');
    if (element3 !== null){
      element3.classList.remove("visible");
    }
  }
  
  function showShare(){
    var element = document.getElementById('share');
    element.classList.toggle("visible");
    var element2 = document.getElementById('search-expanded');
    if (element2 !== null){
      element2.classList.remove("visible");
    }
    var element3 = document.getElementById('sidebar');
      if (element3 !== null){
      element3.classList.remove("visible");
    }
  }