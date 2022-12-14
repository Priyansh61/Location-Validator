1. create a form that allows users to enter a location, such as an address or zip code.
2. In the search result while the user enters the location he should be able to choose a location
    2.1. Either we can get a result list on the search entered by the user and display them to the user for  selection.
    2.2. The above approach is conventional, to make it more convinient we will display the results in the auto-complete simultaneously as the user enters the input.
        2.2.1. To implement this we can use open street api.
        2.2.2. On value change of the input the api will fetch data again.
        2.2.3. We store the data in a locations array.
        2.2.4. The results are shown to the user in the autocomplete using the
        locations array.

3. Now its time to work on add button, add button is disabled till the form is not complete, once it is complete user can click on add button.
    3.1. When add button is used the data entered by the user will be stored in the MongoDB.
    3.2. Here a problem arises, we dont have the lat, long of the location we just have the display_name and the radius variables.
    3.3. First thought was adding  a for loop and finding the given display name from form control in locations and then using its latitude and longitude.
    3.4. But soon realised its not a good way to save the long and lat, therfore i used a trigger event of (onSelectionChange) and saved the location which the user clicks.
    3.5. From the location we take out the longitude and latitude.

4. With all the interface and the add button working, its time to connect our backend to frontend.
    4.1. The biggest struggle i faced here is while handling with cors , i dont know but  my requests from front end were not able to reach the backend and they were in constant queue.
    4.2. Actually after a lot of debugging i realised that i made a small spelling mistake while writing the domain but after fixing that it was a smooth walk.

5. Now the backend is connected and we can store data in our mongoDB schema, using mongoose.

6. So with all the above done, we can now show the user input data in the form of the table.
    6.1. To perform this task i have used mat-table to dispaly the data
    6.2. In the mat-table we have provided the data we obtain from the form controls.

7. Its time to work on the validate button,

