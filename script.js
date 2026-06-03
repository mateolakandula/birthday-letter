function openLetter() {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("envelopePage").classList.remove("hidden");
}

function revealLetter() {
  document.getElementById("envelopePage").classList.add("hidden");
  document.getElementById("letterPage").classList.remove("hidden");
  typeWriter();
}

const message = `
I genuinely hope you have a really good day today!!

I know college and everything has been exhausting lately so I hope this year treats you more gently and bring you good things (and money too HAHA!)

Also, I just wanted to say that I really appreciate you and I am genuinely glad I met you!!

Talking to you and hearing about Hiro, your art, and random updates and funny stuffs, it all became something special to me!

And honestly, you are the person I have talked to the longest in a whileeee so this friendship genuinely became something special to me. :))

You are a really good person and I hope life gives that same kindness back to you.

aproveite o seu dia!
`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 20);
  } else {
    setTimeout(() => {
      document.getElementById("letterPage").classList.add("hidden");
      document.getElementById("endPage").classList.remove("hidden");
    }, 1000);
  }
}
