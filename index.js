let creditsText = `
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
`;

export function postCredits(text) {
  if (text) {
    creditsText = text;
  }
}

addEventListener('beforeunload', (event) => {
    addCredits();
    event.preventDefault();
    return (event.returnValue = 'Where are you going?');
}, { capture: true });

const cssText = `
.credits {
    position: relative;
    top: 99999px;
    transform-origin: 50% 100%;
    animation: crawl 60s linear;
  }
  
  @keyframes crawl {
    0% {
      top: -100px;
      transform: rotateX(20deg)  translateZ(0);
    }
    100% { 
      top: -6000px;
      transform: rotateX(25deg) translateZ(-2500px);
    }
  }
`;

function addCredits() {
    const css = document.createElement('style');
    css.appendChild(document.createTextNode(cssText));
    document.getElementsByTagName('head')[0].appendChild(css);

    // background
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.bottom = '0';
    element.style.left = '0';
    element.style.right = '0';
    element.style.zIndex = '999';
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.margin = 'auto';

    // credits
    const creditElem = document.createElement('div');
    creditElem.classList.add('credits');
    creditElem.style.textAlign = 'center';
    creditElem.style.fontSize = '100px';
    creditElem.innerText = creditsText;
    element.appendChild(creditElem);

    document.body.appendChild(element);
}
