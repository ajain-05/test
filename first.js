const termsAndConditions = [
    // **Professional & Important Terms at the Start**
    { T1: "Eligibility", T2: "Only registered students of the institution are allowed to attend the Fresher’s Party.", T3: "Attendees must carry their valid student ID for verification." },
    { T1: "Registration", T2: "All attendees must complete the registration form before the deadline.", T3: "Registration is non-transferable and non-refundable under any circumstances." },
    { T1: "Entry Rules", T2: "Entry is permitted only within the specified time; late arrivals may be denied access.", T3: "Re-entry is not allowed once you leave the venue." },
    { T1: "Dress Code", T2: "Attendees must adhere to the event’s dress code, if specified.", T3: "Improper attire may lead to denial of entry." },
    { T1: "Prohibited Items", T2: "No outside food, drinks, or illegal substances are allowed.", T3: "Weapons, fireworks, and hazardous materials are strictly prohibited." },
    { T1: "Behavior & Conduct", T2: "Any form of misconduct, violence, or harassment will result in immediate removal.", T3: "Disruptive behavior or excessive intoxication will not be tolerated." },
    { T1: "Security & Safety", T2: "All attendees must cooperate with security personnel and undergo security checks.", T3: "Emergency exits must remain accessible at all times." },
    { T1: "Personal Belongings", T2: "The organizers are not responsible for any lost, stolen, or damaged personal items.", T3: "Unattended items may be removed by security." },
    { T1: "Photography & Media", T2: "Event photography and videography will take place for promotional purposes.", T3: "By attending, you consent to the use of your images in event promotions." },
    { T1: "Food & Beverages", T2: "Food and drinks will be available at designated stalls inside the venue.", T3: "Any spillage of food on another attendee must be followed by a heartfelt apology." },
    { T1: "Event Modifications", T2: "The organizers reserve the right to change or modify the event schedule if necessary.", T3: "In case of cancellation, refund policies (if applicable) will be communicated." },
    { T1: "Dance Floor Rules", T2: "Attendees must ensure their dance moves do not cause injuries to others.", T3: "Excessively energetic breakdancing is appreciated but done at your own risk!" },
    { T1: "Music Requests", T2: "The DJ will not entertain song requests after 10 PM.", T3: "Repeatedly requesting ‘Chaiyya Chaiyya’ may result in temporary removal from the DJ booth." },
    
    // **More Unique Terms That No One Will Read (200+ Categories)**
    { T1: "Queue Etiquette", T2: "Stand in line properly while collecting food, drinks, or registration materials.", T3: "Jumping the queue will earn you death stares from 20+ people." },
    { T1: "Selfies & Photos", T2: "Selfie sticks are allowed but must not be used to poke people.", T3: "Taking 100 selfies in front of one decoration is permitted but highly discouraged." },
    { T1: "Networking", T2: "Feel free to make new friends and connections during the event.", T3: "Excessive networking by asking for everyone’s Instagram may be considered annoying." },
    { T1: "Dancing Etiquette", T2: "No aggressive dance battles unless both parties agree.", T3: "Attempting a backflip on the dance floor is at your own risk!" },
    { T1: "Table Manners", T2: "Dispose of food waste properly in designated trash bins.", T3: "If you make a mess, your karma will ensure you step on someone else’s spilled drink later." },
    { T1: "Exit Rules", T2: "Attendees must leave the venue in an orderly manner.", T3: "Last-minute ‘one more song’ chants will not be entertained." },
    { T1: "Lost & Found", T2: "Lost items can be reported to the designated help desk.", T3: "If you lose your best friend, try looking near the food stalls first." },
    { T1: "Respect the Decor", T2: "Do not remove or damage the event decorations.", T3: "Stealing balloons will not be tolerated unless you are gifting them to someone special." },
    { T1: "Common Sense", T2: "Use common sense at all times during the event.", T3: "If you have to ask, 'Is this a bad idea?', the answer is probably yes." },
    { T1: "Fun Clause", T2: "The main objective is to have fun and create great memories.", T3: "If you don't have fun, that’s entirely on you!" },
    { T1: "Chair Hoarding", T2: "Seats are limited, so be mindful of others.", T3: "Claiming 5 chairs with your bag will not be tolerated." },
    { T1: "Phone Usage", T2: "Keep your phone on silent mode to avoid disruptions.", T3: "Excessive Snapchatting of the same pose will be judged." },
    { T1: "Joke Limit", T2: "Jokes should be in good taste and not offend anyone.", T3: "Telling the same joke repeatedly will result in the audience walking away." },
    { T1: "Clapping", T2: "Applause is encouraged after performances.", T3: "If you’re the only one clapping, reconsider your enthusiasm." },
    { T1: "Drink Etiquette", T2: "Use designated areas for beverages.", T3: "Spilling drinks and blaming gravity is unacceptable." },
    { T1: "Shameless Plugging", T2: "Promoting personal YouTube or Instagram channels is discouraged.", T3: "Unless you have a million subscribers, nobody cares." },
    { T1: "Mystery Rules", T2: "Some rules may or may not exist.", T3: "You will only find out if you break them." },
    { T1: "Slow Clap", T2: "Timed slow claps must be well-coordinated.", T3: "Unplanned slow claps will cause mass confusion." },
    { T1: "Eligibility", T2: "Only registered students of the institution are allowed to attend the Fresher’s Party.", T3: "Attendees must carry their valid student ID for verification." },
    { T1: "Registration", T2: "All attendees must complete the registration form before the deadline.", T3: "Registration is non-transferable and non-refundable under any circumstances." },
    { T1: "Entry Rules", T2: "Entry is permitted only within the specified time; late arrivals may be denied access.", T3: "Re-entry is not allowed once you leave the venue." },
    { T1: "Dress Code", T2: "Attendees must adhere to the event’s dress code, if specified.", T3: "Improper attire may lead to denial of entry." },
    { T1: "Prohibited Items", T2: "No outside food, drinks, or illegal substances are allowed.", T3: "Weapons, fireworks, and hazardous materials are strictly prohibited." },
    { T1: "Behavior & Conduct", T2: "Any form of misconduct, violence, or harassment will result in immediate removal.", T3: "Disruptive behavior or excessive intoxication will not be tolerated." },
    { T1: "Security & Safety", T2: "All attendees must cooperate with security personnel and undergo security checks.", T3: "Emergency exits must remain accessible at all times." },
    { T1: "Personal Belongings", T2: "The organizers are not responsible for any lost, stolen, or damaged personal items.", T3: "Unattended items may be removed by security." },
    { T1: "Photography & Media", T2: "Event photography and videography will take place for promotional purposes.", T3: "By attending, you consent to the use of your images in event promotions." },
    { T1: "Food & Beverages", T2: "Food and drinks will be available at designated stalls inside the venue.", T3: "Any spillage of food on another attendee must be followed by a heartfelt apology." },
    { T1: "Event Modifications", T2: "The organizers reserve the right to change or modify the event schedule if necessary.", T3: "In case of cancellation, refund policies (if applicable) will be communicated." },
    { T1: "Dance Floor Rules", T2: "Attendees must ensure their dance moves do not cause injuries to others.", T3: "Excessively energetic breakdancing is appreciated but done at your own risk!" },
    { T1: "Music Requests", T2: "The DJ will not entertain song requests after 10 PM.", T3: "Repeatedly requesting ‘Chaiyya Chaiyya’ may result in temporary removal from the DJ booth." },
    
    // **More Unique Terms That No One Will Read (200+ Categories)**
    { T1: "Queue Etiquette", T2: "Stand in line properly while collecting food, drinks, or registration materials.", T3: "Jumping the queue will earn you death stares from 20+ people." },
    { T1: "Selfies & Photos", T2: "Selfie sticks are allowed but must not be used to poke people.", T3: "Taking 100 selfies in front of one decoration is permitted but highly discouraged." },
    { T1: "Networking", T2: "Feel free to make new friends and connections during the event.", T3: "Excessive networking by asking for everyone’s Instagram may be considered annoying." },
    { T1: "Dancing Etiquette", T2: "No aggressive dance battles unless both parties agree.", T3: "Attempting a backflip on the dance floor is at your own risk!" },
    { T1: "Table Manners", T2: "Dispose of food waste properly in designated trash bins.", T3: "If you make a mess, your karma will ensure you step on someone else’s spilled drink later." },
    { T1: "Exit Rules", T2: "Attendees must leave the venue in an orderly manner.", T3: "Last-minute ‘one more song’ chants will not be entertained." },
    { T1: "Lost & Found", T2: "Lost items can be reported to the designated help desk.", T3: "If you lose your best friend, try looking near the food stalls first." },
    { T1: "Respect the Decor", T2: "Do not remove or damage the event decorations.", T3: "Stealing balloons will not be tolerated unless you are gifting them to someone special." },
    { T1: "Common Sense", T2: "Use common sense at all times during the event.", T3: "If you have to ask, 'Is this a bad idea?', the answer is probably yes." },
    { T1: "Fun Clause", T2: "The main objective is to have fun and create great memories.", T3: "If you don't have fun, that’s entirely on you!" },
    { T1: "Chair Hoarding", T2: "Seats are limited, so be mindful of others.", T3: "Claiming 5 chairs with your bag will not be tolerated." },
    { T1: "Phone Usage", T2: "Keep your phone on silent mode to avoid disruptions.", T3: "Excessive Snapchatting of the same pose will be judged." },
    { T1: "Joke Limit", T2: "Jokes should be in good taste and not offend anyone.", T3: "Telling the same joke repeatedly will result in the audience walking away." },
    { T1: "Clapping", T2: "Applause is encouraged after performances.", T3: "If you’re the only one clapping, reconsider your enthusiasm." },
    { T1: "Drink Etiquette", T2: "Use designated areas for beverages.", T3: "Spilling drinks and blaming gravity is unacceptable." },
    { T1: "Shameless Plugging", T2: "Promoting personal YouTube or Instagram channels is discouraged.", T3: "Unless you have a million subscribers, nobody cares." },
    { T1: "Mystery Rules", T2: "Some rules may or may not exist.", T3: "You will only find out if you break them." },
    { T1: "Slow Clap", T2: "Timed slow claps must be well-coordinated.", T3: "Unplanned slow claps will cause mass confusion." },
    { T1: "Eligibility", T2: "Only registered students of the institution are allowed to attend the Fresher’s Party.", T3: "Attendees must carry their valid student ID for verification." },
    { T1: "Registration", T2: "All attendees must complete the registration form before the deadline.", T3: "Registration is non-transferable and non-refundable under any circumstances." },
    { T1: "Entry Rules", T2: "Entry is permitted only within the specified time; late arrivals may be denied access.", T3: "Re-entry is not allowed once you leave the venue." },
    { T1: "Dress Code", T2: "Attendees must adhere to the event’s dress code, if specified.", T3: "Improper attire may lead to denial of entry." },
    { T1: "Prohibited Items", T2: "No outside food, drinks, or illegal substances are allowed.", T3: "Weapons, fireworks, and hazardous materials are strictly prohibited." },
    { T1: "Behavior & Conduct", T2: "Any form of misconduct, violence, or harassment will result in immediate removal.", T3: "Disruptive behavior or excessive intoxication will not be tolerated." },
    { T1: "Security & Safety", T2: "All attendees must cooperate with security personnel and undergo security checks.", T3: "Emergency exits must remain accessible at all times." },
    { T1: "Personal Belongings", T2: "The organizers are not responsible for any lost, stolen, or damaged personal items.", T3: "Unattended items may be removed by security." },
    { T1: "Photography & Media", T2: "Event photography and videography will take place for promotional purposes.", T3: "By attending, you consent to the use of your images in event promotions." },
    { T1: "Food & Beverages", T2: "Food and drinks will be available at designated stalls inside the venue.", T3: "Any spillage of food on another attendee must be followed by a heartfelt apology." },
    { T1: "Event Modifications", T2: "The organizers reserve the right to change or modify the event schedule if necessary.", T3: "In case of cancellation, refund policies (if applicable) will be communicated." },
    { T1: "Dance Floor Rules", T2: "Attendees must ensure their dance moves do not cause injuries to others.", T3: "Excessively energetic breakdancing is appreciated but done at your own risk!" },
    { T1: "Music Requests", T2: "The DJ will not entertain song requests after 10 PM.", T3: "Repeatedly requesting ‘Chaiyya Chaiyya’ may result in temporary removal from the DJ booth." },
    
    // **More Unique Terms That No One Will Read (200+ Categories)**
    { T1: "Queue Etiquette", T2: "Stand in line properly while collecting food, drinks, or registration materials.", T3: "Jumping the queue will earn you death stares from 20+ people." },
    { T1: "Selfies & Photos", T2: "Selfie sticks are allowed but must not be used to poke people.", T3: "Taking 100 selfies in front of one decoration is permitted but highly discouraged." },
    { T1: "Networking", T2: "Feel free to make new friends and connections during the event.", T3: "Excessive networking by asking for everyone’s Instagram may be considered annoying." },
    { T1: "Dancing Etiquette", T2: "No aggressive dance battles unless both parties agree.", T3: "Attempting a backflip on the dance floor is at your own risk!" },
    { T1: "Table Manners", T2: "Dispose of food waste properly in designated trash bins.", T3: "If you make a mess, your karma will ensure you step on someone else’s spilled drink later." },
    { T1: "Exit Rules", T2: "Attendees must leave the venue in an orderly manner.", T3: "Last-minute ‘one more song’ chants will not be entertained." },
    { T1: "Lost & Found", T2: "Lost items can be reported to the designated help desk.", T3: "If you lose your best friend, try looking near the food stalls first." },
    { T1: "Respect the Decor", T2: "Do not remove or damage the event decorations.", T3: "Stealing balloons will not be tolerated unless you are gifting them to someone special." },
    { T1: "Common Sense", T2: "Use common sense at all times during the event.", T3: "If you have to ask, 'Is this a bad idea?', the answer is probably yes." },
    { T1: "Fun Clause", T2: "The main objective is to have fun and create great memories.", T3: "If you don't have fun, that’s entirely on you!" },
    { T1: "Chair Hoarding", T2: "Seats are limited, so be mindful of others.", T3: "Claiming 5 chairs with your bag will not be tolerated." },
    { T1: "Phone Usage", T2: "Keep your phone on silent mode to avoid disruptions.", T3: "Excessive Snapchatting of the same pose will be judged." },
    { T1: "Joke Limit", T2: "Jokes should be in good taste and not offend anyone.", T3: "Telling the same joke repeatedly will result in the audience walking away." },
    { T1: "Clapping", T2: "Applause is encouraged after performances.", T3: "If you’re the only one clapping, reconsider your enthusiasm." },
    { T1: "Drink Etiquette", T2: "Use designated areas for beverages.", T3: "Spilling drinks and blaming gravity is unacceptable." },
    { T1: "Shameless Plugging", T2: "Promoting personal YouTube or Instagram channels is discouraged.", T3: "Unless you have a million subscribers, nobody cares." },
    { T1: "Mystery Rules", T2: "Some rules may or may not exist.", T3: "You will only find out if you break them." },
    { T1: "Slow Clap", T2: "Timed slow claps must be well-coordinated.", T3: "Unplanned slow claps will cause mass confusion." },
    { T1: "Final Rule",T2: "Your data will be handled by our expert technical team.",T3: "We prioritize your data privacy like a cat guarding its favorite spot. However, if your data somehow sneaks out and finds its way to a third party, our technical team won’t be held responsible—let’s just say, it wasn’t us! 😇" }
  ];


const parent = document.querySelector('#root')
const container = document.createElement('div');
container.className = "container";
parent.appendChild(container);

const h1 = document.createElement('h1')
h1.className = "headingH1"
h1.innerText = "Terms & Conditions: Read at Your Own Risk!"
container.appendChild(h1)


function termsConditions(){
    const data = new Set()
    for(let i = 0; i<termsAndConditions.length;i++){
        data.add(termsAndConditions[i])
    }
    return [...data];
  }

const article = termsConditions()

article.forEach((obj)=>{
    /* h2 create */
    const h2 = document.createElement('h2')
    h2.className = "category_h2"
    h2.innerText = `${obj['T1']}:`
    container.appendChild(h2)


    const p1 = document.createElement('p')
    p1.className = "para"
    p1.innerText = `⇨ ${obj["T2"]}`
    const p2 = document.createElement('p')
    p2.className = "para"
    p2.innerText = `⇨ ${obj["T3"]}`

    container.appendChild(p1)
   container.appendChild(p2)

})
