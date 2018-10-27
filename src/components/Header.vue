<template>
  <b-navbar toggleable="md" type="light" variant="faded">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <img src="../assets/logo.png" style="height:35px;" alt="house">
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/calculate">Calculate</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right disabled>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ZH</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right disabled>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>
