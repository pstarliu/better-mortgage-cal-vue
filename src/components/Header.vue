
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

      <b-nav-item href="#" @click="authorGoogle">SignInGoogle</b-nav-item>

      <b-nav-item href="#" @click="authorFacebook">SignInFacebook</b-nav-item>
      
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
export default {
  data() {
    return {
      isAuthorized: false,
      userName: "Not Sign In"
    };
  },
  methods: {
    authorFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // The signed-in user info.
        this.userName = user.displayName;
        let tempUserName = user.displayName;
        this.isAuthorized = true;        
      })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.x
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          if (console) {
            console.log("Sign in error, ", errorCode, errorMessage);
          }
        });      
    },
    
    authorGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          var user = result.user;
          // The signed-in user info.
          this.userName = user.displayName;
          let tempUserName = user.displayName;
          this.isAuthorized = true;
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log("Sign in error, ", errorCode, errorMessage);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.isAuthorized = false;
          this.userName = "Not Sign In";
          console.log("sign out successfull");
        })
        .catch(function(error) {
          // An error happened.
          this.isAuthorized = false;
          this.userName = "Not Sign In";
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          i
          console.log("Error: " + errorCode + ", " + errorMessage);
        });
    }
  }
};
</script>
