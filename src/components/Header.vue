
<template>
<b-navbar toggleable="md" type="light" variant="faded">
  
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
  <b-navbar-brand to="/">
    <img src="../assets/logo.png" style="height:35px;" alt="house">
  </b-navbar-brand>
  
  <b-collapse is-nav id="nav_collapse">
    
    <b-navbar-nav>
      <b-nav-item to="/calculate">Calculate</b-nav-item>
      <b-nav-item to="/privacy">Privacy Policy</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-navbar-nav>
    
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      
      <b-nav-item-dropdown text="Lang" right disabled>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ZH</b-dropdown-item> 
      </b-nav-item-dropdown>
      
      <b-nav-item-dropdown text="SignIn/SignUp" right>
        <b-nav-item to="/signin">Sign In</b-nav-item>
        <b-nav-item to="/signup">Sign Up</b-nav-item>
      </b-nav-item-dropdown>            
      
      <b-nav-item href="#" @click="authorGoogle">SignInGoogle</b-nav-item>
      
      <b-nav-item href="#" @click="authorFacebook">SignInFacebook</b-nav-item>

      <b-nav-item href="#" @click="authorTwitter">SignInTwitter</b-nav-item>
      
      <b-nav-item-dropdown right>
	<!-- <button type="button">{{ userName }}</button> -->
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{userName}}</em>
        </template>
        <b-dropdown-item href="#" v-if="isAuthorized">Profile</b-dropdown-item>
        <b-dropdown-item href="#" v-if="true" @click="signOut">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    
  </b-collapse>
</b-navbar>
</template>

<script>
  import firebase from 'firebase';
 
export default {
  data() {
    return {
      isAuthorized: false,
      userName: "Not Sign In"
    };
  },
  methods: {
    authorEmail() {
      
    },
    
    authorTwitter() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider).then( result => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        //var token = result.credential.accessToken;
        //var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        this.userName = user.displayName;
        this.isAuthorized = true;        
      });
        // .catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   if (console) {
      //     console.log("Sign in error, ", errorCode, errorMessage);
      //   }
      // });
    },
    
    authorFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // The signed-in user info.
        this.userName = user.displayName;
        this.isAuthorized = true;        
      });
        // .catch(error => {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   if (console) {
        //     console.log("Sign in error, ", errorCode, errorMessage);
        //   }
        // });      
    },
    
    authorGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          var user = result.user;
          // The signed-in user info.
          this.userName = user.displayName;
          this.isAuthorized = true;
        });
        // .catch(error => {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // The email of the user's account used.
        //   console.log("Sign in error, ", errorCode, errorMessage);
        // });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.isAuthorized = false;
          this.userName = "Not Sign In";
        });
        // .catch(function(error) {
        //   // An error happened.
        //   this.isAuthorized = false;
        //   this.userName = "Not Sign In";
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   console.log("Error: " + errorCode + ", " + errorMessage);
        // });
    }
  }
};
</script>
