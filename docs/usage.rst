Usage
=====

Single page application
-----------------------

We can use cowhite.js to build single page applications easily. Here are the various scenarios:

*Scenarios:*

1.  Add below html for each page in the main page
-------------------------------------------------

Html::

    <div class='items-section' class='each-section hide' data-url="https://marketing.cowhite.com/api/v1/items/">
        <div id='items-content'></div>
    </div>

Url will be like::

    https://cowhite.com/#items

If you want #items to be #learn for example, then code will be like::

    <div class='learn-section' class='each-section hide' data-url="https://marketing.cowhite.com/api/v1/items/">
        <div id='learn-content'></div>
    </div>

Url will be like::

    https://cowhite.com/#learn

After opening above url, the content present inside "learn-section" will be shown.

2. Load and insert content automatically from remote url
--------------------------------------------------------

Html::

    <div class='items-section' class='each-section hide' data-url="https://marketing.cowhite.com/api/v1/items/">
        <div id='items-content'></div>
    </div>


You can load content automatically from remote url by providing data attribute for url, that is "data-url" for the element with class "each-section".

This response will be inserted into the element with id "items-content" where items is the tab.

3. Load content automatically from remote url and then manually render it

Html::

    <div class='items-section' class='each-section hide' data-callback="loadItemsCallback" data-url="https://marketing.cowhite.com/api/v1/items/">
        <div id='items-content'></div>
    </div>

Since you gave both data-url and data-callback, you need to implement the callback like below::

  function loadItemsCallback(res){
    var html = "", $itemHtml = $("#item-template"), itemHtml;
    for(var i=0; i<res.results.length; i++){
      itemHtml = $itemHtml.html().replace(/ITEM_ID/g, res.results[i].id).replace(
        /ITEM/g, res.results[i].name);
      html += itemHtml;
    }
    if(!res.results.length){
      html += "<div class='big-msg'>No items yet.</div>"
    }
    $("#items-content").html(html);

  }

In my case, I implemented this because, the server response is JSON but not direct html for this api. So, I need to implement so I can generate html from JSON response. But in most other cases, I generally return html from the server, so I can load the html directly.

4. Load data manually

Html::


    <div class='items-section' class='each-section hide'>
        <div id='items-content'></div>
    </div>

In this scenario, we didnt provide any data-url, so it wont try to fetch automatically from the server.

You need to manually catch the event "items-opened" and write necessary code inside that function::

    $(document).on("items-opened", function(){
        // Implement code to make ajax calls and then to insert that content
    });

5. Form submissions



