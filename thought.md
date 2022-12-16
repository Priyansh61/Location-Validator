## Thought Process :

1. create a HTML form that allows users to enter a location, such as an address or zip code.
2. In the search result while the user enters the location he should be able to choose a location
    -  Either we can get a result list on the search entered by the user and display them to the user for selection.
    -  The above approach is conventional, to make it more convinient we will display the results in the auto-complete simultaneously as the user enters the input.
    
        - To implement this we can use open street api.
        - On value change of the input the api will fetch data again.
        - The new Data will be fetched based on the current input to get the relevant result.
        - We store the data in an array.
        - The results are shown to the user in the autocomplete using the above array.
3. After this we are going to add the "ADD" Button.

4. Now its time to work on add button, add button is disabled till the form is not complete, once it is complete user can click on add button.
    - When add button is used the data entered by the user will be stored in the MongoDB.
    - Here a problem arises, we dont have the lat, long of the location we just have the display_name and the radius variables.
    - Initial thought was of using the display_name from form control and using it to iterate through the above array and when we find the given location we use its longitude and latitude.
    - But soon realised its not a good way to save the long and lat, therfore i used a trigger event of (onSelectionChange) and saved the location through an event when the user selects the location in the search bar.
    - From the location we take out the longitude and latitude.

4. With all the above things done,it's time to design the app's database schema to store the location data. This would involve determining what data needs to be stored (e.g. address, latitude, longitude, radius) and how it should be structured within the MongoDB database.

5. Here I thought if I would be storing only the address and the radius in the schema, but this would not make any sense without the longitude and latitude of the place.

    - To design the above schema we have used Mongooose.
        - The reason behind using Mongoose is Since mongoDB is non-relational, so mongoose helps to ensure Schema and Data validation before storing anything.
        - Mongoose also simplifies the use of queries of queries within our database.

6. Time to add routes to our API for that we have used express to add the routes and write logic for adding the location in the places collection.

7. The biggest struggle i faced here is while handling with cors , i dont know but  my requests from front end were not able to reach the backend and 
    since the pre-flight checks were falining.
    
    - To fix tis we used cors to add Access-Allowed-Origins/Headers/Methods for our frontend requests to pass the pre flight checks since it involves cross origin resource sharing.

5. Now the backend is connected and we can store data in our mongoDB schema, using mongoose.

6. So with all the above done, we can now show the user input data in the form of the table.

    - To perform this task i have used mat-table to dispaly the data
    
7. Its time to work on the validate button,
    - Navigator Api is used to get our current location from the browser.
    - I called a function when validate is clicked, the function calls the getCurrentLocation from services and stores the data.
          - After getting null data i soon realised that the user need to give the permission to fetch its location so its an aynchronous function.
          - Therefore we return a promise from navigator api and we await its value in the (click) function when the function executes succesfully we display an alert to the user.
          
8. To end up we use the haversine Formula to calculate the distance between our current coordinate and the searched location and display an alert to the user accordingly.
    

