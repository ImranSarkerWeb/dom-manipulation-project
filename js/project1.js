//variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')


const qoutes = [
    {
        quote: `"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step."`,
        person: `Lao Tzu`
    },
    {
        quote: `"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."`,
        person: ` Roy T. Bennett, The Light in the Heart`
    },
    {
        quote: `“I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.”`,
        person: `Frank Herbert, Dune`
    },
    {
        quote: `“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”`,
        person: `Roy T. Bennett, The Light in the Heart`
    },
    {
        quote: `“Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.”`,
        person: `― Zig Ziglar`
    },
    {
        quote: `“Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.”`,
        person: `― Steve Maraboli`
    },
    {
        quote: `“The man who moves a mountain begins by carrying away small stones.”`,
        person: `― Confucius, Confucius: The Analects`
    },
    {
        quote: `“The only way of discovering the limits of the possible is to venture a little way past them into the impossible.”`,
        person: `― Arthur C. Clarke`
    },
    {
        quote: `“Surround Yourself with People Who Believe in Your Dreams:
        Surround yourself with people who believe in your dreams, encourage your ideas, support your ambitions, and bring out the best in you.”`,
        person: `― Roy T. Bennett, The Light in the Heart`
    },
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * qoutes.length)

    quote.innerText = qoutes[random].quote;
    person.innerText = qoutes[random].person;
})