<template>
  <header class="menu-header">
    <div class="logo">
      <img src="@/assets/escado.png" alt="">
    </div>
    <div class="hamburger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    <nav class="nav-bar" :class="{ active: isBurgerMenuOpen }">
      <ul>
        <li><a href="" class="active">Ana səyfə</a></li>
        <li><a href="">Xidmətlər</a></li>
        <li><a href="">Haqqımızda</a></li>
        <li><a href="">Əlaqə</a></li>
      </ul>
    </nav>

  </header>
</template>

<script>
export default {
  data() {
    return {
      isBurgerMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "ubuntu";
}

img {
  width: 35%;
}

.menu-header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
}

.hamburger {
  display: none;
}

.nav-bar ul {
  display: flex;
}

.nav-bar ul li a {
  display: block;
  color: grey;
  font-size: 20px;
  padding: 10px 25px;
  border-radius: 50px;
  transition: 0.2s;
  margin: 0 5px;
}

.nav-bar ul li a:hover {
  color: white;
  background-color: green;
}


/* 
ileride bax

.nav-bar ul li a.active {
  color: white;
  background-color: green;
}  */


@media only screen and (max-width: 800px) {
  .menu-header {
    padding: 0 30px;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger .line {
    width: 30px;
    height: 5px;
    background: black;
    margin: 6px 0;
  }

  .nav-bar {
    height: 460px;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    width: 100w;
    transition: 0.2s;
  }

  .nav-bar.active {
    height: 450px;
  }

  .nav-bar ul {
    display: block;
    width: fit-content;
    margin: 80px auto 0 auto;
    text-align: center;
    transition: 0.5s;
    opacity: 0;
  }

  .nav-bar.active ul {
    opacity: 1;
  }

  .nav-bar ul li a {
    margin-bottom: 13px;
  }

}</style>
