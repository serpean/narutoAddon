$(".newlist-epi__item").append("<span>hola</span>");
$(".newlist-epi__item").click(function() {
    var name = $(this).filter($(".newlist-epi__title"));
    console.log(name.html());
    console.log("HOa")
})

$("h1 .post-header__title").append("<p>vistao</p>");