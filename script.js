// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/



// TODO 1 : set up a window load handler
window.addEventListener("load", function(){


   // TODO 2: set upa submit handler for the form
   const form = document.querySelector("form");
   form.addEventListener("submit", (event)=>{
   
      // TODO 3: cancel submission using event.preventDefault()
      event.preventDefault();
      // TODO 4: Validate that all inputs have data
      function validateInput(testInput) {
         if (testInput === ""){
             return 'Empty';
         }
             else if (isNaN(Number(testInput))){
                 return 'Not a Number';
             }
             else{
                 return 'Is a Number';
             };
     };
      // TODO 5: Check fuel level and cargo mass, and report launch status

      // TODO 6: make the list visible



   // TODO 7: Fetch planet data

      // TODO 8: randomly choose one of the planets

      // TODO 9: display info about the chosen planets
   })

})