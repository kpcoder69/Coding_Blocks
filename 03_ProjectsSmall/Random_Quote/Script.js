const quotes = [
    "Dharmo rakshati rakshitah : This emphasizes the importance of upholding Dharma (righteousness) as it will ultimately protect those who practice it.",
    "Ahimsa paramo dharma : This highlights non-violence as the highest form of Dharma, a core principle in Sanatan Dharma.",
    "Satyam eva jayate : This signifies that truth will always prevail over falsehood.",
    "Vasudhaiva Kutumbakam : This concept signifies that the whole world is one family, promoting unity and interconnectedness.",
    "Om : Considered the primordial sound, Om represents the ultimate reality and is often used in meditation practices. ",
    "Sarve bhavantu sukhinah : This expresses a wish for all beings to be happy and free from suffering.",
    "Atmanah : Refers to the individual soul or true self, which is eternal and distinct from the physical body",
    "Brahman : Represents the ultimate reality, the universal consciousness that encompasses everything.",
    "Karma phala : This principle states that every action has a consequence, emphasizing the concept of cause and effect.", 
    "Dhyan : Meditation, a practice to attain inner peace and self-realization.",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren"]


function gen(){
    const randomIndex = Math.floor(Math.random()*quotes.length); //random() give value between 0 to 1 
    const randomQuotes = quotes[randomIndex];
    document.getElementById("quote").innerHTML = randomQuotes ;
}