# Packages needed:

- ipm i
- npm install react-router-dom
- npm install firebase
- npm install firebase react-auth-firebase
- npm install sass
- npm install -g firebase-tools
- firebase login
- firebase init
- npm run build
- firebase deploy

_____________________________

# Documentation:

![Jewelry-Ideas-image](https://github.com/boryanayordanova/jewelry-app/blob/master/public/Jewelry-Ideas.png?raw=true)

# App.js


> **Header.js**

> **Footer.js**


# Header.js

- Added check if the user is authenticated and **NavLink**

    - If the user **IS** authenticated

        - Logout
        - My Trinkets (for the specific user) 
        - All Jewelries
        - Top Liked
        - Еarrings
        - Bracelets
        - Necklaces
        - About

    - If the uer **IS NOT** authenticated

        - Login
        - Register
        - All Jewelries
        - Top Liked
        - Еarrings
        - Bracelets
        - Necklaces
        - About

- Sign out functionality

- Routes paths with the components related

    - > **LoginPage.js** **RegisterPage.js**
        
        ```    
        /login - LoginPage.js
        /register - RegisterPage.js
        ```
    
 
    - > **MainPages.js**
        ```
        /
        /my-jewelry/:userMail
        /earrings
        /bracelets
        /necklaces
        ```
    
    - > **TopLikes.js** **AboutPage.js**   **JewelryDetails.js** 
        ```
        /top-likes - TopLikes.js
        /about - AboutPage.js

        /:jewelryId - JewelryDetails.js
        ```       


    - > **404**
        ```
        /* - *Page Not Found - Error 404*
        ```
    

# RegisterPage.js

- Register content of the page

- Create User With Email And Password in the [firebase authentication users](https://console.firebase.google.com/project/jewelry-app-f122c/authentication/users) database.

- Return errors

# Login.js

- Login content of the page

- Sign in with email and password to the [firebase authentication users](https://console.firebase.google.com/project/jewelry-app-f122c/authentication/users) database.

- Return errors

- Lead to the **/my-jewelry/:userMail** page with list of the jewelries, created by the current logged-in user.


# MainPages.js

- creates list JewelryList by reading all the data and writing data from the [firebase database](https://jewelry-app-f122c-default-rtdb.europe-west1.firebasedatabase.app/)

- JewelryList has functions:

    dataFromList={dataList}  - creates new record to the DB by post request and get all the records with their generated ID's from the DB.

    onJewelryDelete={dataDeleteModal}  - remove the record from the DB and update the view by removing it.

    getDataUpdateJewelryForm={dataUpdate} - update the jewelry data in the DB related with it's ID.

    dataFromUpdate={dataUpdate} - update the jewelry data in the DB related with it's ID.

    jewelryOwner={userMail} - userMail email info is passed to the list, if the user is logged in.


# JewelryList.js

- gets it's functions from MainPages.js. 

- In this file are created the validations for the main pages list spreading, depending of the url slug, on which the user is, and the type/category of the jewelry.

    - Home Page (All Jewelries)
    - My Trinkets page
    - Еarrings
    - Bracelets
    - Necklaces

    Depending of the different pages, the elements populated on it are different. 

    ```
    - Home Page (All Jewelries) 

        - JewelryItem.js

            This view is with **Likes/hearts** option.
    ```
    ```
    - My Trinkets page

        - JewelryItemLoggedUser.js

            This view should be with **Edit** and **Delete** buttons on it. 
            No Likes hearts option. The logged-in user shouldn't like his own jewelries.
    ```
    ```
    - Еarrings

        - JewelryItem.js

            This view is with **Likes/hearts** option.
    ```
    ```
    - Bracelets

        - JewelryItem.js

            This view is with **Likes/hearts** option.
    ```
    ```
    - Necklaces 

        - JewelryItem.js

            This view is with **Likes/hearts** option.
    ```


- 3 modals appears from HomePage.js

    - JewelryCreate.js

        - Shows a form modal, used for create and update of the Item. Can be generated by:
            - "Add New" button in My Trinkets (MainPage.js)
            - "Edit" button in the JewelryItemLoggedUser.js


    - JewelryDelete.js
        - Shows a confirmation modal, used for delete of an item.Can be generated by:
            - "Delete" button in the JewelryItemLoggedUser.js

    - JewelryDetails.js
        - Shows a details modal, used for showing details info of clicked item. Can be generated by clicking on each of the items containers.


# JewelryItem.js

This file content contains the basic view per each box element component.

**Likes/hearts** option coponent. - **Likes.js** file.

# JewelryItemLoggedUser.js

This file content contains the basic view per each box element component. Similar to JewelryItem, but with Edit and Delete buttons added, vissible only in the My Trinkets page, vissible only for the logged-in users.

# Likes.js

Logic for the different bottom part of each JewelryItem. 

Depending if the user is logged-in it shows the Like/Heart option. In case there is none user logged-in, the Likes/Heart option is replaced with Plain text and the cound of the likes per each element.

When the user is logged-in, the logic checks in which "likedBy" fields in the DB the current user apears and set a "Like" for the element, for which the user has been pressed like.

- For all LIKED jewelries:

    - When the user clicks on the heart:
        - A counter sets 1 less for the "countLikes" field in the DB.
        - The user emais is deleted from the "likedBy" field list.

- For all NOT LIKED yet jewelries:

    - When the user clicks on the heart:
        - A counter sets 1 more for the "countLikes" field in the DB.
        - The user emais is added to the "likedBy" field list.

# JewelryCreate.js

Activates a form modal, used for creation and Update of an jewelry item. Both can be access if the user is loged in.

Adition validations are added, in case the filled fields are set by the user with wrong and missing data.

# JewelryDelete.js

Activates a modal when the Logged-in user clicks on JewelryItemLoggedUser's delete button.

Once the user clicks on the delete button, a module appears for confirmation. 

When the user confirm, the 


# JewelryDetails.js

The details about each item. In this file is used the hook useParams, which gets the Id of the currently clikced element from the url /:jewelryId and shows the data content implemented for it.

Each item has an Id, passed from JewelryList.

# TopLikes.js

Returns Page view with the content of the top 4 liked jewelries. 

The sort method applied on the countLikes fields per each record from the DB.

4 JewelryItem elements are generated here.

# AboutPage.js

Plain text about the site.

# Footer.js

Adds the footer component content.

