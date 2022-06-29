const messages =[
    "Daroch",
    "Ana",
    "Laura",
    "Mono",
    "Txema"
];
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };