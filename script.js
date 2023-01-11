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



// TODO 1, 7, 8, 9: set up a window load handler
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json){
            let missionTarget = document.getElementById('missionTarget');
            let index = Math.floor(Math.random() * json.length);
            missionTarget.innerHTML = `
            <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
         });
      });

      // TODO 2: set up a submit handler for the form
   let form = document.querySelector('form');
   form.addEventListener("submit", function(event){
      // TODO 3: cancel submission using event.preventDefault()
      event.preventDefault()

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
   
      

      // TODO 4: Validate that all inputs have data
      if (!fuelLevel.value || !cargoMass.value || !pilotName.value || !copilotName.value) {
         alert("😡 FILL OUT ALL OF THE FIELDS 👿")
      } 
         else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)){
         alert("Pilot and/or Copilot name should NOT include #s. ReEnter!!!");
      } 
         else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Fuel Level and/or Cargo Mass should NOT include letters. ReEnter!!!");
      } 
            else {
         itemStatus.style.visibility = 'visible'; // TODO 6: make the list visible
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready.`;
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready.`;
         launchStatus.style.color = 'red';

      // TODO 5: Check fuel level and cargo mass, and report launch status
         if (fuelLevel.value < 10000 && cargoMass.value >= 10000){
            document.getElementById("fuelStatus").innerHTML = `Not enough fuel for journey 🔻🪫`;
            document.getElementById("cargoStatus").innerHTML = `Too much mass. Please lighten Cargo`;
            document.getElementById("launchStatus").innerHTML = `🚫 Shuttle not ready for launch 🚫`;
            launchStatus.style.color = 'red';
         }
            else if (fuelLevel.value >= 10000 && cargoMass.value >= 10000){
               document.getElementById("fuelStatus").innerHTML = `Fuel level good for Launch! 🔋`;
               document.getElementById("cargoStatus").innerHTML = `Too much mass 🏋️. Please lighten Cargo 🦅`;
               document.getElementById("launchStatus").innerHTML = `🛑 ✋ Shuttle not ready for launch 🙅‍♀️🛑`
               launchStatus.style.color = 'red';
            }
            else if (fuelLevel.value < 10000 && cargoMass.value < 10000){
               document.getElementById("cargoStatus").innerHTML = `Cargo mass is good for Launch 😺`
               document.getElementById("launchStatus").innerHTML = `🚫 Shuttle not ready for launch 🚫`;
               document.getElementById("fuelStatus").innerHTML = `Not enough fuel for the Journey!🔻🪫`;
               launchStatus.style.color = 'red';
            }
            // Need to check 10,000 for fuelLevel and cargoMass levels as well because they are VALID
            else if (fuelLevel.value >= 10000 && cargoMass.value < 10000){
               document.getElementById("fuelStatus").innerHTML = `Fuel level good for Launch! 🔋`;
               document.getElementById("cargoStatus").innerHTML = `Cargo mass good for Launch 💯`;
               document.getElementById("launchStatus").innerHTML = `🚀💥🚀💥🚀 Shuttle ready for Launch!!! 🚀💥🚀💥🚀`
               launchStatus.style.color = 'green';
            }
      
         }
      


        // TODO 7: Fetch planet data

      // TODO 8: randomly choose one of the planets

      // TODO 9: display info about the chosen planets
   })
})
