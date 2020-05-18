    var data;
    function details() {
      // Create a request variable and assign a new XMLHttpRequest object to it.
      var request = new XMLHttpRequest();

      // Open a new connection, using the GET request on the URL endpoint
      request.open(
        "GET",
        "https://api.covid19india.org/state_district_wise.json",
        true
      );
      request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(this.response);
        console.log(Object.keys(data));
      };
      // Send request
      request.send();
    }
    function getValue() {
      var stat = document.covid.state.value;//Assigning the name of the state 
      var district = document.covid.district.value;//Assigning the name of the district
      //Parsing all the data in the API to get the details of the given state and district
      Object.keys(data).map((state) => {
        if (stat == state) {
          var states = data[stat];
          console.log(states.districtData[district]);
          var d1=states.districtData[district];
          var res="<center><table style='color:white;'><tr><td colspan='2'><h2>The status of <b>Covid'19 in "+district+"</b></h2></td></tr><tr><td>Active</td><td>"+d1.active+"</td></tr><tr><td>Confirmed</td><td>"+d1.confirmed+"</td></tr><tr><td>Deceased</td><td>"+d1.deceased+"</td></tr><tr><td>Recovered</td><td>"+d1.recovered+"</td></tr></table></center>";
          //Displaying the details in Table
          document.getElementById("res").innerHTML=res;
          //Displaying the whether is safer or not
          if(d1.active==0)
          {
              document.getElementById("safe").innerHTML="<h2>It is <b style='color:green;'><i>Safer</i></b> for you to go to "+district+"</h2";
          }
          else{
              document.getElementById("safe").innerHTML="<h2>It is <b style='color:red;'><i>Not Safer</i></b> for you to go to "+district+"</h2>";
          
          }
        }
      });
    }