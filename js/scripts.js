$ (document).ready(function() {
  $("form#list").submit(function(){
    debugger;
    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();
    var item4 = $("input#item4").val();

    var newItems = [item1, item2, item3, item4];
    var newArray = [];

    newItems.sort();


        $(".item1").text(newItems[0]);
        $(".item2").text(newItems[1]);
        $(".item3").text(newItems[2]);
        $(".item4").text(newItems[3]);



    event.preventDefault();
  });
});
