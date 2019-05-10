var tags;

function loadName()
   {
       if ( !sessionStorage.getItem( "herePreviously" ) )
      {
         sessionStorage.setItem( "herePreviously", "true" );
        document.getElementById( "result" ).innerHTML =
           "Let's change the world together";
    } // end if

    var length = localStorage.length; // number of key/value pairs
      tags = []; // create empty array

      // load all keys
      for (var i = 0; i < length; ++i)
      {
         tags[i] = localStorage.key(i);
      } // end for

      tags.sort(); // sort the keys

     
     var markup = "<ul>";

      // build list of links
     for (var tag in tags)
      {
        var name = 
        localStorage.getItem(tags[tag]);
           markup+= "<p>Hello " + tags[tag] + " looking forward to meeting you <li><span> " + tags[tag] +
           "</p></span>" ;
      } // end for

      markup += "</ul>";
      document.getElementById("result").innerHTML = markup + "Let's change the world, one block at a time";
   } // end function loadName

// deletes all key/value pairs from localStorage
   function clearAllNames()
   {
      localStorage.clear();
      loadName();
   } // end function clearAllNames


// saves a newly tagged name into localStorage
  function saveName()
   {
      var name = document.getElementById("name");
      var tag = document.getElementById("tag");
      // Store name
      localStorage.setItem(tag.value, name.value);
      tag.value;
      name.value = ""; // clear name input
      loadName(); // reload name
   } // end function saveName


// deletes a specific key/value pair from localStorage
function deleteTag( tag )
   {
      localStorage.removeItem( tag );
      loadName(); // reload name
   } // end function deleteTag

   function editTag( tag )
 {
     document.getElementById("name").value = localStorage[ tag ];
     document.getElementById("tag").value = tag;
     loadName(); // reload name
  } // end function editTag

/* function buttonPressed(){
    var result = document.getElementById( "result" );
    
    // get the input text field
    var name = document.getElementById("name");
    
    localStorage.setItem("name", name.value);

    document.getElementById("result").innerHTML = "Hello, " + localStorage.getItem("name") +" looking forward to meeting you";
    
} */

function start()
   {
    var clearButton = document.getElementById( "clearButton" );
    clearButton.addEventListener( "click", clearAllNames, false );
    loadName(); // load the previously saved names
    var submitButton = document.getElementById( "submit" );
    submitButton.addEventListener( "click", saveName, false );
   } // end function start

window.addEventListener( "load", start, false );

