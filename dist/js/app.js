document.addEventListener("DOMContentLoaded",function(){function e(){var e=new XMLHttpRequest;e.open("GET","http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=",!0),e.onload=function(){if(this.status>=200&&this.status<400){var e=Math.round(40*Math.random()),t=JSON.parse(this.response);r.innerHTML=t[e].content+'<i class="author"> - '+t[e].title+"</i>"}else console.error("There was an error returning your request.  Please try again later.")},e.onerror=function(){console.error("There was an error contacting the server.  Please try again later.")},e.send()}var r=document.querySelector(".quote");console.log(r),e(),r.onclick=e});