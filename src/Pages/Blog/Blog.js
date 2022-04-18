import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Question:1 Difference between authorization and authentication</h1>
      <p>
        Answer: Authorization: 1.Simply put, authentication is the process of
        verifying who someone is, whereas authorization is the process of
        verifying what specific applications 2.files, and data a user has access
        to. The situation is like that of an airline that needs to determine
        which people can come on board. 3.In the digital world, authentication
        and authorization accomplish these same goals. Authentication is used to
        verify that users really are who they represent themselves to be. 4.Once
        this has been confirmed, authorization is then used to grant the user
        permission to access different levels of information and perform
        specific functions, depending on the rules established for different
        types of users. Authentication: 1.Authentication verifies who the user
        is. 2.Authentication works through passwords, one-time pins, biometric
        information, and other information provided or entered by the user.
        3.Authentication is the first step of a good identity and access
        management process. 4.Authentication is visible to and partially
        changeable by the user. 5.Once a user is authenticated, authorization
        controls are then applied to ensure users can access the data they need
        and perform specific functions such as adding or deleting information
      </p>

      <h1>
        Question:2 Why are you using firebase? What other options do you have to
        implement authentication?
      </h1>
      <p>
        Answer: 1.Firebase Authentication provides backend services, easy-to-use
        SDKs, and ready-made UI libraries to authenticate users to your app.
        2.It supports authentication using passwords, phone numbers, popular
        federated identity providers like Google, Facebook and Twitter, and
        more. 3.You can sign in users to your Firebase app either by using
        FirebaseUI as a complete drop-in auth solution or by using the Firebase
        Authentication SDK to manually integrate one or several sign-in methods
        into your app. 4.Drop-in authentication solution The recommended way to
        add a complete sign-in system to your app. 5.Email and password based
        authentication Authenticate users with their email addresses and
        passwords. The Firebase Authentication SDK provides methods to create
        and manage users that use their email addresses and passwords to sign
        in.
      </p>

      <h1>
        Question :3 What other services does firebase provide other than
        authentication?
      </h1>
      <p>
        Answer: 1.Parse Open Source Backend Platform; 2.Back4app Parse Hosting
        Platform; 3.Backendless Mobile Backend and API Services Platform;
        4.Kumulos App Performance Management; 5.Game Sparks Game Backend
        Platform; 6.Appwrite Open-Source backend for Flutter developers
      </p>
    </div>
  );
};

export default Blog;
