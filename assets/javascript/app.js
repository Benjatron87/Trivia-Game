$(document).ready(function reset() {

    var timer = 5;
    var num = 0;
    var right = 0;
    var wrong = 0;

    $("#right").html(right);
    $("#wrong").html(wrong);
    $("#timer").html(timer);

    var myQuestions = [

         {
            question: "Who is Thor?",

            answers: [
                {ans:"God of Thunder", value: true}, 
                {ans: "God of Mischief", value: false,}, 
                {ans: "Guy with shield", value: false}, 
                {ans: "Guy in the Iron Suit", value: false}
            ]
        },

         {
            question: "Who is Loki?",

            answers: [
                {ans:"God of Thunder", value: false}, 
                {ans: "God of Mischief", value: true,}, 
                {ans: "Guy with shield", value: false}, 
                {ans: "Guy in the Iron Suit", value: false}
            ]
        },

        {
            question: "Who is Captain America?",

            answers: [
                {ans:"God of Thunder", value: false}, 
                {ans: "God of Mischief", value: false,}, 
                {ans: "Guy with shield", value: true}, 
                {ans: "Guy in the Iron Suit", value: false}
            ]
        },

        {
            question: "Who is Iron Man?",

            answers: [
                {ans:"God of Thunder", value: false}, 
                {ans: "God of Mischief", value: false,}, 
                {ans: "Guy with shield", value: false}, 
                {ans: "Guy in the Iron Suit", value: true}
            ]
        }
]

    function questionDisplay(obj){

        for(var i = 0; i < 4; i++){
            $("#answer" + [i]).show();
        }

        $("#outcome").html("");

        $("#question").text(myQuestions[obj].question);

        myQuestions[obj].answers.sort(function() {
            return 0.5 - Math.random();
          });

        for (var i = 0; i < 4; i++){
        $("#answer" + i).html(myQuestions[obj].answers[i].ans);

            if(myQuestions[obj].answers[i].value === true){

                $("#correct").html(myQuestions[obj].answers[i].ans);
                $("#answer" + i).attr("val", true);
                $("#correct").hide();
            }
            
            else if(myQuestions[obj].answers[i].value === false){

                $("#answer" + i).attr("val", false);
            }
        }

        $(".answer").unbind().click(function(){

            var click = ($(this).attr("val"));

            console.log(click);

            if(click === "true"){

                    $("#outcome").html("Correct!");
                    $("#correct").show();
                    $("#start-button").show();

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }
        
                    clearInterval(intervalId);
                    right++;
                    $("#right").html(right);
                    
            }
            else if(click === "false"){

                    $("#outcome").html("Wrong!");
                    $("#correct").show();
                    $("#start-button").show();

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }
        
                    clearInterval(intervalId);
                    wrong++;
                    $("#wrong").html(wrong);
                    
            }
        })
    }

    function endGame(){
        $("#outcome").html("Game Over!");
        $("#correct").hide();
        $("#question").hide();
        $("#start-button").show().html("Play Again?");

        num = 0;
        right = 0;
        wrong = 0;

        for(var i = 0; i < 4; i++){
            $("#answer" + [i]).hide();
        }

    }


    $("#start-button").on("click", function(){

        $("#start-button").html("Next Question");
        $("#start-button").hide();
        $("#question").show();

        $("#right").html(right);
        $("#wrong").html(wrong);

        console.log(num);
        if (num < myQuestions.length){
            questionDisplay(num);

            num += 1;

            run();
        }
        else{
            endGame()
        }

    });



    function run() {
        
            timer = 5;

            $("#timer").html(timer);

            intervalId = setInterval(function(){
                
                timer--;

                $("#timer").html(timer);

                if (timer === 0){
                    $("#outcome").html("Out of Time!");

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }

                    $("#correct").show();
                    $("#start-button").show();

                    wrong++;
                    $("#wrong").html(wrong);

                    clearInterval(intervalId);
                }
            }, 1000);
    }

});
