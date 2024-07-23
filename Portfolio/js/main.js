//Scroll

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navlink");
  const contactButton = document.querySelector(".button-1");

  for (const link of navLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTarget(this.getAttribute("href"));
    });
  }

  if (contactButton) {
    contactButton.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTarget("#contact");
    });
  }

  function scrollToTarget(target) {
    const targetId = target.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      let offset = 0;

      // Prüfen, ob das Ziel-Element die ID 'home' hat
      if (targetId === "home") {
        offset = 130;
      }

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }
});

//----------------------------------------------------------------
//menü navbar

document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-icon");
  var nav = document.querySelector("#menu");

  menuToggle.addEventListener("click", function () {
    if (window.innerWidth <= 850) {
      // Überprüfen Sie die Bildschirmauflösung vor dem Anzeigen oder Ausblenden des Menüs
      if (nav.style.display === "block") {
        nav.style.display = "none";
      } else {
        nav.style.display = "block";
      }
    }
  });

  // Zusätzlicher Code für die Bildschirmauflösung größer als 850 Pixel
  if (window.innerWidth > 850) {
    nav.style.display = "flex";
  }

  // Event-Listener für die Überprüfung der Bildschirmauflösung bei Größenänderung
  window.addEventListener("resize", function () {
    if (window.innerWidth > 850) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var reloadLink = document.getElementById("reload-link");
  reloadLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default link behavior
    location.reload(); // Reloads the page
  });
});

//----------------------------------------------------------------
//mySkills animation

document.addEventListener("DOMContentLoaded", function () {
  var mySkillsSection = document.getElementById("my-skills");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mySkillsSection.classList.add("animated");
      } else {
        mySkillsSection.classList.remove("animated");
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
  });

  observer.observe(mySkillsSection);
});

/*-------------------------------------------------*/
/*Legacy*/

function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

/*-------------------------------------------------*/
/*typed name englisch*/

const typedText1 = "Nice to meet you!";
const typedText2 = "I'm David Wesle.";
const line1Element = document.getElementById("text-line1");
const line2Element = document.getElementById("text-line2");
let index1 = 0;
let index2 = 0;

function typeWriterLine1() {
  if (index1 < typedText1.length) {
    line1Element.textContent += typedText1.charAt(index1);
    index1++;
    setTimeout(typeWriterLine1, 150); // Adjust typing speed here
  }
}

function typeWriterLine2() {
  if (index2 < typedText2.length) {
    line2Element.textContent += typedText2.charAt(index2);
    index2++;
    setTimeout(typeWriterLine2, 100); // Adjust typing speed here
  }
}

typeWriterLine1();
setTimeout(typeWriterLine2, typedText1.length * 150 + 500);
