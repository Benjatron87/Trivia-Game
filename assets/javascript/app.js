$(document).ready(function reset() {

    var timer = 5;

    var num = 0;
    var right = 0;
    var wrong = 0;

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

    $("#start-button").on("click", function(){

        questionDisplay(num);

        num += 1;

        $("#start-button").hide();

        roundOver = true;

        timer = 5;

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

                wrong++;
                $("#wrong").html(wrong);

                clearInterval(intervalId);
            }
        }, 1000);

       

    }

});
