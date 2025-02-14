const termsAndConditions = [
  { T1: "Eligibility", T2: "Only registered students of the institution are allowed to attend the Fresher’s Party.", T3: "Attendees must carry their valid student ID for verification." },
  { T1: "Registration", T2: "All attendees must complete the registration form before the deadline.", T3: "Registration is non-transferable and non-refundable under any circumstances." },
  { T1: "Entry Rules", T2: "Entry is permitted only within the specified time; late arrivals may be denied access.", T3: "Re-entry is not allowed once you leave the venue." },
  { T1: "Dress Code", T2: "Attendees must adhere to the event’s dress code, if specified.", T3: "Improper attire may lead to denial of entry." },
  { T1: "Prohibited Items", T2: "No outside food, drinks, or illegal substances are allowed.", T3: "Weapons, fireworks, and hazardous materials are strictly prohibited." },
  { T1: "Behavior & Conduct", T2: "Any form of misconduct, violence, or harassment will result in immediate removal.", T3: "Disruptive behavior or excessive intoxication will not be tolerated." },
  { T1: "Security & Safety", T2: "All attendees must cooperate with security personnel and undergo security checks.", T3: "Emergency exits must remain accessible at all times." },
  { T1: "Personal Belongings", T2: "The organizers are not responsible for any lost, stolen, or damaged personal items.", T3: "Unattended items may be removed by security." },
  { T1: "Photography & Media", T2: "Event photography and videography will take place for promotional purposes.", T3: "By attending, you consent to the use of your images in event promotions." },
  { T1: "Food & Beverages", T2: "Food and drinks will be available at designated stalls inside the venue.", T3: "Sharing food is encouraged, but only if both parties agree!" },
  { T1: "Event Modifications", T2: "The organizers reserve the right to change or modify the event schedule if necessary.", T3: "In case of cancellation, refund policies (if applicable) will be communicated." },
  { T1: "Dance Floor Rules", T2: "Attendees must ensure their dance moves do not cause injuries to others.", T3: "Respect personal space; accidental collisions require immediate apologies." },
  { T1: "Music Requests", T2: "The DJ will not entertain song requests after 10 PM.", T3: "Repeatedly requesting the same song may lead to being ignored by the DJ." },
  { T1: "Queue Etiquette", T2: "Stand in line properly while collecting food, drinks, or registration materials.", T3: "Cutting in line may result in being sent to the back." },
  { T1: "Selfies & Photos", T2: "Selfie sticks are allowed but must not be used to poke people.", T3: "Please be mindful of others while taking photos." },
  { T1: "Networking", T2: "Feel free to make new friends and connections during the event.", T3: "Forcing conversations on uninterested people is discouraged." },
  { T1: "Dancing Etiquette", T2: "No aggressive dance battles unless both parties agree.", T3: "Respect others' dancing styles and personal space." },
  { T1: "Table Manners", T2: "Dispose of food waste properly in designated trash bins.", T3: "Leaving trash behind may invite glares from the cleaning staff." },
  { T1: "Exit Rules", T2: "Attendees must leave the venue in an orderly manner.", T3: "Last-minute ‘one more song’ chants will not be entertained." },
  { T1: "Lost & Found", T2: "Lost items can be reported to the designated help desk.", T3: "Found something? Be a good person and turn it in." },
  { T1: "Respect the Decor", T2: "Do not remove or damage the event decorations.", T3: "Messing with the decor may result in a fine or removal." },
  { T1: "Common Sense", T2: "Use common sense at all times during the event.", T3: "If it feels wrong, it probably is." },
  { T1: "Fun Clause", T2: "The main objective is to have fun and create great memories.", T3: "Enjoy responsibly and make the most of the night!" },
  { T1: "Chair Hoarding", T2: "Seats are limited, so be mindful of others.", T3: "Reserving multiple chairs unfairly is not allowed." },
  { T1: "Phone Usage", T2: "Keep your phone on silent mode to avoid disruptions.", T3: "Recording the whole event instead of enjoying it is discouraged." },
  { T1: "Joke Limit", T2: "Jokes should be in good taste and not offend anyone.", T3: "If nobody laughs after three attempts, it's time to stop." },
  { T1: "Clapping", T2: "Applause is encouraged after performances.", T3: "Awkward solo clapping is to be avoided." },
  { T1: "Drink Etiquette", T2: "Use designated areas for beverages.", T3: "Spilling drinks is a party foul!" },
  { T1: "Shameless Plugging", T2: "Promoting personal YouTube or Instagram channels is discouraged.", T3: "Subtle networking is fine; spamming is not." },
  { T1: "Mystery Rules", T2: "Some rules may or may not exist.", T3: "You will only find out if you break them." },
  { T1: "Slow Clap", T2: "Timed slow claps must be well-coordinated.", T3: "Unplanned slow claps will cause mass confusion." },
  { T1: "No Running", T2: "Running inside the venue is prohibited.", T3: "Walk, don’t run!" },
    { T1: "No Pushing", T2: "Be mindful of personal space.", T3: "Pushing people is not cool." },
    { T1: "Be on Time", T2: "Arriving late may cause you to miss key moments.", T3: "Punctuality is appreciated." },
    { T1: "No Loud Yelling", T2: "Keep your excitement at a reasonable volume.", T3: "Save the loud cheers for special moments." },
    { T1: "Respect Others", T2: "Be kind and respectful to all attendees.", T3: "A positive vibe makes the party better!" },
    { T1: "Follow Instructions", T2: "Event staff instructions must be followed at all times.", T3: "They are here to help!" },
    { T1: "Stay Hydrated", T2: "Drink plenty of water throughout the event.", T3: "Dehydration is not fun." },
    { T1: "Take Breaks", T2: "If you feel tired, take a break.", T3: "The party is long, pace yourself!" },
    { T1: "Be Responsible", T2: "You are responsible for your belongings and actions.", T3: "Think before you act." },
    { T1: "Respect the Music", T2: "The DJ’s setlist is final.", T3: "Enjoy the music as it is!" },
    { T1: "No Food Fights", T2: "Throwing food is not allowed.", T3: "Respect the venue and keep it clean." },
    { T1: "Use Trash Bins", T2: "Dispose of waste in designated bins.", T3: "Keeping the place clean is everyone’s responsibility." },
    { T1: "Be Friendly", T2: "Make new friends, but don’t be forceful.", T3: "Let connections happen naturally." },
    { T1: "Dance with Enthusiasm", T2: "Put your best effort on the dance floor.", T3: "No judging, just vibes!" },
    { T1: "Avoid Oversharing", T2: "Personal stories should be shared wisely.", T3: "Not everyone needs to know everything." },
    { T1: "No Jumping on Tables", T2: "Furniture is for sitting, not stunts.", T3: "Respect the venue’s property." },
    { T1: "Respect Volunteers", T2: "Event volunteers are working hard.", T3: "A simple ‘thank you’ goes a long way!" },
    { T1: "No Phone Flashlights", T2: "Flashlights can disturb performers.", T3: "Use them only in emergencies." },
    { T1: "Smile More", T2: "Smiling makes everything better.", T3: "It’s contagious in a good way!" },
    { T1: "Be Open to New Experiences", T2: "Try new things at the party.", T3: "You never know what you might enjoy!" },
    { T1: "Stay with Your Friends", T2: "Stick with your group to avoid getting lost.", T3: "It’s safer and more fun!" },
    { T1: "Don’t Hog the Mic", T2: "Karaoke time should be shared.", T3: "Everyone deserves a turn!" },
    { T1: "Respect the Photographer", T2: "Let the event photographers do their job.", T3: "They will capture great moments!" },
    { T1: "Avoid Blocking Exits", T2: "Fire exits should remain clear at all times.", T3: "Safety first!" },
    { T1: "Be a Good Sport", T2: "Games and activities should be fun for all.", T3: "Winning isn’t everything!" },
    { T1: "Limit Selfie Time", T2: "Take pictures, but don’t overdo it.", T3: "Enjoy the moment too!" },
    { T1: "No Overcrowding", T2: "Avoid clustering in small areas.", T3: "Give others some space." },
    { T1: "No Blocking Views", T2: "Be mindful of others’ sightlines.", T3: "Everyone deserves to enjoy the show!" },
    { T1: "Follow the Theme", T2: "If there’s a theme, embrace it!", T3: "It adds to the fun." },
    { T1: "Be Considerate", T2: "Think about how your actions affect others.", T3: "Good vibes only!" },
    { T1: "Encourage Newcomers", T2: "Help first-timers feel welcome.", T3: "A small gesture can make a big difference." },
    { T1: "Avoid Inside Jokes", T2: "Keep conversations inclusive.", T3: "Nobody likes to feel left out." },
    { T1: "Check Lost & Found", T2: "If you lose something, check the help desk.", T3: "It might have been turned in!" },
    { T1: "Help When You Can", T2: "If someone needs help, offer it.", T3: "It’s just good manners!" },
    { T1: "Don’t Block Walkways", T2: "Keep pathways clear for smooth movement.", T3: "It’s courteous and safe." },
    { T1: "Clap for Performers", T2: "Support people putting themselves out there.", T3: "Applause is free!" },
    { T1: "Follow Alcohol Rules", T2: "If alcohol is allowed, consume responsibly.", T3: "Drunk behavior won’t be tolerated." },
    { T1: "Be Mindful of Cameras", T2: "If a camera is rolling, don’t photobomb.", T3: "Let the professionals work!" },
    { T1: "Be Positive", T2: "A good attitude makes a great party.", T3: "Keep the energy upbeat!" },
    { T1: "No Drama", T2: "Leave conflicts at the door.", T3: "Nobody wants negativity at a party." },
    { T1: "Respect Guest Speakers", T2: "If someone is speaking, listen.", T3: "It’s polite and respectful." },
    { T1: "Use Indoor Voice", T2: "If you need to talk, don’t shout.", T3: "Keep the noise level in check." },
    { T1: "Follow Event Hashtags", T2: "If posting online, use the correct tags.", T3: "It helps spread the fun!" },
    { T1: "Thank the Organizers", T2: "They worked hard for this event.", T3: "A little appreciation goes a long way." },
    { T1: "No Glitter Bombs", T2: "Glitter is impossible to clean up.", T3: "Respect the venue’s cleanliness!" },
    { T1: "Plan Your Ride Home", T2: "Ensure you have a safe way to leave.", T3: "No last-minute transportation issues!" },
    { T1: "No Unauthorized Filming", T2: "Respect privacy and event rules.", T3: "Ask before recording others." },
    { T1: "Don’t Forget to Dance", T2: "Even if you’re shy, give it a try!", T3: "Dancing is part of the fun!" },
    { T1: "Create Good Memories", T2: "Have fun and make it a night to remember!", T3: "Enjoy responsibly!" },
    { T1: "Final Rule",T2: "Your data will be handled by our expert technical team.",T3: "We prioritize your data privacy like a cat guarding its favorite spot. However, if your data somehow sneaks out and finds its way to a third party, our technical team won’t be held responsible—let’s just say, it wasn’t us!" }
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
