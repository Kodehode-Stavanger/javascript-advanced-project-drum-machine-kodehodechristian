// Define drum mappings
const drumMap = {
    kick: "q",
    snare: "w",
    hihat: "e",
    openhat: "r",
    ride: "t",
    tom: "y",
    tink: "u",
    clap: "i",
  };
  
  // Generate drum UI elements based on drumMap
  document.getElementById('container').append(
    ...Object.entries(drumMap).map(([drum, key]) => {
      const drumContainer = document.createElement('div');
      drumContainer.className = 'drum-container';
  
      const drumImg = new Image();
      drumImg.src = `./pics/${drum}.png`;
      drumImg.alt = drum;
      drumImg.className = 'drum-image';
      drumImg.onclick = () => new Audio(`./sounds/${drum}.wav`).play();
  
      const drumName = document.createElement('p');
      drumName.textContent = `${drum[0].toUpperCase()}${drum.slice(1)}`;
      drumName.className = 'drum-name';
  
      const shortcut = document.createElement('kbd');
      shortcut.textContent = key;
      shortcut.className = 'drum-shortcut';
  
      drumContainer.append(drumImg, drumName, shortcut);
      return drumContainer;
    })
  );
  
  // Play drum sound on keydown
  window.addEventListener("keydown", (e) => {
    const drum = Object.keys(drumMap).find(drum => e.key === drumMap[drum]);
    if (drum) new Audio(`./sounds/${drum}.wav`).play();
  });
  
// Comment Section for code elements

// Single drumMap Definition (line 2-11):
// The drumMap object is defined ONCE at the beginning of the script.
// USE:  Generate the drum UI elements and handle the keyboard event listener.
// WHY: Any changes to the drum mappings only need to be made in one place.

// Dynamically Generated UI Elements (line 15):
// USE: The Object.entries(drumMap).map() pattern to iterate over the drumMap
// (dynamically generates the content based on the drumMap object).
// WHY: Easy to add, remove, or change drums without having to rewrite the UI generation logic.

// Spread Operator (...) for Appending Children (line 15):
// USE: Appending multiple children to the parent in one operation using append(...) method.

// Image() Constructor (line 19):
// USE: Creates the object class Image.

// Efficient Event Handling (line 40):
// USE: Object.keys(drumMap).find() is used to identify if the pressed key corresponds to any drum in the map.
// WHY: Locates the drum associated with the pressed key, if any, and plays the corresponding sound.

// Explanation of the operator in this use-case:
// The spread operator (...) is used to expand 
// the elements of an array into the .append() method as INDIVIDUAL arguments.

// Why? 
// Because normally, if you pass an array to a function or method, it's treated as a single argument. 
// So, if you have an array of elements and you want to append them to a parent element using .append(), passing the array directly would NOT work as intended, because .append() expects EACH item to be passed as a SEPARATE argument, not as a single array.

// But with the spread operator, I am able to take each element inside the array and expand them as if I was passing them individually to the method, thus allowing me to append all elements in the array to the parent in one operation.

// So in my example, I am dynamically creating an array of drumContainer elements (each representing a drum with its image, name, and shortcut) using map() on the drumMap entries. Then using the spread operator to expand this array of elements as individual arguments to the .append() method of the parent container (document.getElementById('container')).
