
//This are my variables

    //Ths variable is where the user text is stored
    let userInput = document.getElementById("user-input");

    //This variable has the upper chat div where all the messages are displayed
    let chatArea = document.getElementById("upper-chat");
    
    //This variable is the bottom send 
    let sendButtom = document.getElementById("sending-buttom");

    //This one is hold the input that foes to our super SmartAI Chatbot

    let theInput = '';

    //Emoji botton lol 

    let emojiButton = document.getElementById("emoji.button");


//Magic Happens

    function sendMessage(){

        //This are temporal variables tha hold the message to place it on the are chat


            //Thid hols the String of the user input
            let tempInput = userInput.value;
            theInput = tempInput;
            //This one adds the html neccesary to create a proper message a div with
            // an icon  and text inside
            let tempMessage = `<div class ="our-text">

            <p class= "text-format">${tempInput}<br>

            <span class = "time-stamp">${getTime()}</span>
            
            </p>

            <img src="./bee.png" class="img-size">

            </div>`

        //Here finally i can Insert the tempMessage in the chat are with some dom modification
        chatArea.insertAdjacentHTML("beforeend", tempMessage);
        userInput.value = "";
        //This snipped i took it from stakoverflow its for the automatic scroll down
        $('#upper-chat').animate({
            scrollTop: $('#upper-chat').get(0).scrollHeight
        }, 500);


        // This setime out its from sitepoint.com to delay and sleep
        setTimeout(() => {  robotTalk(); }, 500);
        
        

    }  
    //With this funciton i insert the robot message

    function robotTalk(){

        let tempRobot = smartAnswer(theInput);

        let tempRobotMsg = `<div class="bot-text">

        <img src= "./robot.jpg" class="img-size">

        <p class= "text-format">${tempRobot}<br>
            
            <span class = "time-stamp">${getTime()}</span>
            </p>
        </div>`;

        chatArea.insertAdjacentHTML("beforeend",tempRobotMsg);

        $('#upper-chat').animate({
            scrollTop: $('#upper-chat').get(0).scrollHeight
        }, 500);



    }

    //This is for the data and the time of the message 

    function getTime(){
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        //Snippet of 3 lines to get the date 
        var month = today.getMonth()+1;
        var day = today.getDate();

        var output = today.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    
        if(hours<10){
            hours = "0" + hours;
        }
        if(minutes<10){
            minutes = "0" + minutes;
        }
    
    
        let time = hours + ":" + minutes +"  " + output;
        return time;
    }

    //The robot says hi routine

    function HellowThere(){

        let tempRobot = "Did you knew how much robots love sherek movies?";

        let tempRobotMsg = `<div class="bot-text">

        <img src= "./robot.jpg" class="img-size">

        <p class= "text-format">${tempRobot}<br>
            
            <span class = "time-stamp">${getTime()}</span>
            </p>
        </div>`;

        chatArea.insertAdjacentHTML("beforeend",tempRobotMsg);

    }


    //This is a snipped i got form stakoverlow to get those enter inputs and send
    //a  message


    $(document).keyup(function(event) {
        if (event.which === 13) {
            sendMessage();
        }
    });

    //This is the first thing that happen the robot says hi 
    setTimeout(() => {  HellowThere(); }, 500);

    //this is the emoji function

    function emoji(){
        theInput = "option1";
        robotTalk();

    }

    