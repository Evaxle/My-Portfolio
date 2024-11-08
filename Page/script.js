function loadAndInsertCode(snippetKey = "srccode") {
    fetch('./Source-code-json/Gameweb-sccode.json') // JSON file path
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Insert content as plain text into the code block
        const element = document.getElementById("htmlsrccode");
        if (data[snippetKey]) {
          element.textContent = data[snippetKey]; // Display as plain text
        } else {
          console.error("Snippet not found in JSON data.");
        }
      })
      .catch(error => {
        console.error("Error fetching JSON data: ", error);
      });
  }

  // Call the function with the "srccode" key
  loadAndInsertCode(); 