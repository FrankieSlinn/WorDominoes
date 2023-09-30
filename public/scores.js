export const fetchMinScore = function updateMinimumHOFScore() {
  console.log("updateMinimumHOFScore running")

            fetch(/minimums/)
        .then(response => {
            if (!response.ok) {
                console.log("Response not OK for change API");
                throw new Error("Error");
            }

            return response.json(); // Call response.json() to parse JSON data
        })
        .catch(error => {
          if (error) {
    console.log(error); // Log the error message
    
  }
        });
        }
