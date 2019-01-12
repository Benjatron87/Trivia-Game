$(document).ready(function reset() {

    var timer = 30;

    var question1 = {
            question: "Who is Thor?",

            answers: [
                {ans:"God of Thunder", value: true}, 
                {ans: "God of Mischief", value: false,}, 
                {ans: "Guy with shield", value: false}, 
                {ans: "Guy in the Iron Suit", value: false}
        ]
    }

    function questionDisplay(obj){

        for(var i = 0; i < 4; i++){
            $("#answer" + [i]).show();
        }

        $("#outcome").html("");

        $("#question").text(obj.question);

        obj.answers.sort(function() {
            return 0.5 - Math.random();
          });

        for (var i = 0; i < 4; i++){
        $("#answer" + i).html(obj.answers[i].ans);

            if(obj.answers[i].value === true){

                $("#correct").html(obj.answers[i].ans);
                $("#answer" + i).attr("val", true);
                $("#correct").hide();
            }
            
            else if(obj.answers[i].value === false){

                $("#answer" + i).attr("val", false);
            }
        }

        $(".answer").click(function(){

            var click = ($(this).attr("val"));

            console.log(click);

            if(click === "true"){

                    $("#outcome").html("Correct!");
                    $("#correct").show();

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }
        
                    clearInterval(intervalId);
                    roundOver = false;
            }
            else if(click === "false"){

                    $("#outcome").html("Wrong!");
                    $("#correct").show();

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }
        
                    clearInterval(intervalId);
                    roundOver = false;
            }
        })
    }

    $("#start-button").on("click", function(){

        $("#start-button").hide();

        roundOver = true;

        timer = 30;

        run();

    });



    function run() {

        $("#timer").html("<h2>" + timer + "</h2>");

        intervalId = setInterval(function(){
            
            timer--;

            $("#timer").html("<h2>" + timer + "</h2>");

            if (timer === 0){
                $("#outcome").html("Out of Time!");

                for(var i = 0; i < 4; i++){
                    $("#answer" + [i]).hide();
                }

                $("#correct").show();
                $("#start-button").show();

                clearInterval(intervalId);
            }
        }, 1000);

        questionDisplay(question1);

    }

});
