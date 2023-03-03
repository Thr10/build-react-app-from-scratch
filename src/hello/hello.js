import './hello.scss';

export function sayHello () {
    console.log('say hello!');
}

export const createButton =  () => {
    const button = document.createElement('button');
    button.innerHTML = 'Say Hello';
    button.classList.add("say-hello-button");
    const body = document.querySelector('body');
    console.log("body: ", body)
    body.appendChild(button);
}
