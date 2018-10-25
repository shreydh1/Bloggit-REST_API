var initialize = function(){
    var posts = document.getElementsByTagName("li");
    var posts = document.getElementsByTagName("li");
   for (var i = 0; i < posts.length; i++) {
       var paragraphs = posts[i].getElementsByTagName('p');
       paragraphs[1].style.display = "none";
       var buttonRow = document.createElement('div');
       buttonRow.className = 'button-row';
       var moreButton = document.createElement('div');
       moreButton.textContent = 'More...';
       moreButton.className = 'more';
       moreButton.onclick = clickMore;
       buttonRow.appendChild(moreButton);
       posts[i].appendChild(buttonRow);

   }
}
var clickMore = function() {
   console.log("Click!");
}
var clickMore = function() {
   var post = this.parentElement.parentElement;
   var paragraphs = post.getElementsByTagName('p');
   if (paragraphs[1].style.display === "none") {
       paragraphs[1].style.display = 'block';
   } else {
       paragraphs[1].style.display = 'none';
   }
}