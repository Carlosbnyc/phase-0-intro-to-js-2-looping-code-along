// Code your solutions in this file


const names = ["Nick","Yetla","Benji"]

const event = "Halloween"

const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${names[i]}, for coming to my ${event} party!`
           messages.push(greetingMessage)
        
    }
    return messages

}
console.log(writeCards(["Nick", "Yetla", "Benji"], "Halloween"))


let countDown = 10;
while (countDown >=0){
    console.log(countDown--)
}
