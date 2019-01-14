$(document).ready(function reset() {

    var timer = 15;
    var delay = 3;
    var num = 0;
    var right = 0;
    var wrong = 0;

    var interval1;
    var interval2;

    $("#right").html(right);
    $("#wrong").html(wrong);
    $("#timer").html(timer);


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

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }
        
                    clearInterval(interval2);
                    right++;
                    $("#right").html(right);
                    
                    nextQuestion();
            }
            else if(click === "false"){

                    $("#outcome").html("Wrong!");
                    $("#correct").show();
                    

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }
        
                    clearInterval(interval2);
                    wrong++;
                    $("#wrong").html(wrong);

                    nextQuestion();
                    
            }
        })
    }

    function endGame(){
        $("#outcome").html("Game Over!");
        $("#correct").hide();
        $("#question").hide();
        $("#start-button").show().html("Play Again?");

        for(var i = 0; i < 4; i++){
            $("#answer" + [i]).hide();
        }

    }


    $("#start-button").on("click", function(){

        myQuestions.sort(function() {
            return 0.5 - Math.random();
          });

        $("#start-button").hide();
        $("#question").show();

        num = 0;
        right = 0;
        wrong = 0;

        $("#right").html(right);
        $("#wrong").html(wrong);
    
        questionDisplay(0);

        num++

        run();

    });

    function nextQuestion(){

        clearInterval(interval1);

        delay = 3;

        if(num < myQuestions.length){

            interval1 = setInterval(function(){

                delay--;

                console.log("delay" + delay);

                if(delay === 0){

                    questionDisplay(num);

                    num++;

                    run();

                    clearInterval(interval1);
                }

            }, 1000);

        }
        else{
            endGame();
        }
    }

    function run() {
        
            timer = 15;

            $("#timer").html(timer);

            interval2 = setInterval(function(){
                
                timer--;

                $("#timer").html(timer);

                if (timer === 0){
                    $("#outcome").html("Out of Time!");

                    for(var i = 0; i < 4; i++){
                        $("#answer" + [i]).hide();
                    }

                    $("#correct").show();

                    wrong++;
                    $("#wrong").html(wrong);

                    nextQuestion();

                    clearInterval(interval2);
                }
            }, 1000);
    }

});
