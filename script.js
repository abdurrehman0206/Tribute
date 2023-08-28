document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = [
    "Welcome to the John Doe Tribute Page!",
    "Explore the legacy of a visionary.",
    "Discover the future he imagined.",
    "Join us in celebrating his achievements.",
  ];

  const typewriterElement = document.querySelector(".hero-title");
  let typewriterIndex = 0;
  let currentTextIndex = 0;
  let currentText = typewriterText[currentTextIndex];
  let letterIndex = 0;

  function typeWriter() {
    if (letterIndex < currentText.length) {
      typewriterElement.textContent += currentText.charAt(letterIndex);
      letterIndex++;
      setTimeout(typeWriter, 50);
    } else {
      setTimeout(eraseText, 2000);
    }
  }

  function eraseText() {
    if (letterIndex > 0) {
      typewriterElement.textContent = currentText.substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(eraseText, 50);
    } else {
      currentTextIndex = (currentTextIndex + 1) % typewriterText.length;
      currentText = typewriterText[currentTextIndex];
      setTimeout(typeWriter, 500);
    }
  }

  typeWriter();

  const facts = document.querySelectorAll(".fact");
  let factIndex = 0;

  function showNextFact() {
    facts.forEach((fact, index) => {
      fact.classList.remove("active");
    });

    facts[factIndex].classList.add("active");
    factIndex = (factIndex + 1) % facts.length;

    setTimeout(showNextFact, 5000);
  }

  showNextFact();
});
