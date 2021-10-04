function smartAnswer(theInput){ 

    //This is an array of sherek quotes 

    let ogreeQuotes = ["Do You Think He’s Maybe Compensating For Something?",
    "Actually, It’s Quite Good On Toast","Donkey, You Have The Right To Remain Silent. What You Lack Is The Capacity",
    "Well, That’s Not Very Nice. It’s Just A Donkey","That’ll Do, Donkey. That’ll Do",
    "Ogres Are Like Onions","There’s A Stack Of Freshly Made Waffles In The Middle Of The Forest! Don’t You Find That A Wee Bit Suspicious?",
    "Look At Him In His Wee Li’l Boots! Y’know, How Many Cats Can Wear Boots? Honestly?",
    "It’s Time To Pack Up Your Toothbrush And Jammies. You’re The New King Of Far Far Away",
    "What Are You Doing In My Swamp!?","I’m An Ogre! You Know, ‘Grab Your Torch And Pitchforks!’ Doesn’t That Bother You?",
    "Someday, I Will Repay You. Unless, Of Course, I Can’t Find You Or If I Forget","It’s On My To-Do List!",
    "A Cute, Button Nose? Thick, Wavy Locks? Taut, Round Buttocks?",
    "You’re Going The Right Way For A Smacked Bottom","You, uh... you don't entertain much, do you?",
    "Donkey, two things, okay? Shut..up","We can stay up late, swapping manly stories, and in the morning, I'm making waffles!",
    " Well-- When one lives alone, uh, one has to learn these things in case there's a-- There's an arrow in your butt!"];

    if(theInput==="option1"){
        return "Sorry but that button does nothing";
    }


    return ogreeQuotes[Math.floor(Math.random()*(ogreeQuotes.length-2))];
}