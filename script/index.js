function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnReadMore = document.getElementById("read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnReadMore.innerHTML = "Read more"; 
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnReadMore.innerHTML = "Read less"; 
    }
}
