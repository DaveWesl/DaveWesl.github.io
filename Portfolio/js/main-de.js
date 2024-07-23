 // Deutsch
 const typedText1De = "Schön, dich kennenzulernen!";
 const typedText2De = "Ich bin David Wesle.";
 const line1DeElement = document.getElementById("text-line1-de");
 const line2DeElement = document.getElementById("text-line2-de");
 let index1De = 0;
 let index2De = 0;

 function typeWriterLine1De() {
   if (index1De < typedText1De.length) {
     line1DeElement.textContent += typedText1De.charAt(index1De);
     index1De++;
     setTimeout(typeWriterLine1De, 150); // Typgeschwindigkeit anpassen
   }
 }

 function typeWriterLine2De() {
   if (index2De < typedText2De.length) {
     line2DeElement.textContent += typedText2De.charAt(index2De);
     index2De++;
     setTimeout(typeWriterLine2De, 100); // Typgeschwindigkeit anpassen
   }
 }

 typeWriterLine1De();
 setTimeout(typeWriterLine2De, typedText1De.length * 150 + 500);