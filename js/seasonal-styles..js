$(document).ready(function(){
    var date = new Date();
    var month = date.getMonth();
    
    var season;
    if (month >= 2 && month <= 4){
        season = 'Spring';
    } else if (month >= 5 && month <= 7){
        season = 'Summer';
    } else if (month >= 8 && month <= 10){
        season = 'Autumn';
    } else {
        season = 'Winter';
    }
    
    switch(season){
        case "spring":
            $("html").css("background-color", "#2B7129");
            $("#slogan").text("Spring into our Spring wear!");
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("#logo").attr("src", "images/spring.gif");
        break;
        case "summer":
            $("html").css("background-color", "#EBA52B");
            $("#slogan").text("Feel cool in our Summer wear!");
            $("#wear").attr("src", "images/summer-wear.jpg");
            $("#logo").attr("src", "images/summer.gif");
        break;
        case "fall":
            $("html").css("background-color", "#A81124");
            $("#slogan").text("Fall into our Fall wear!");
            $("#wear").attr("src", "images/fall-wear.jpg");
            $("#logo").attr("src", "images/fall.gif");
        break;
        case "winter":
            $("html").css("background-color", "#005393");
            $("#slogan").text("Stay warm in our Winter wear!");
            $("#wear").attr("src", "images/winter-wear.jpg");
            $("#logo").attr("src", "images/winter.gif");
        break;

    }
});
