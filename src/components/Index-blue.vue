<template>
  <h1>Index blue</h1>

  <footer>
    <div class="f1">
      <p>Need Assistance?</p>
      <button>Contuct us</button>
    </div>

    <div class="f2">
      <p>"In the School of life, every setback is a lesson in strength."</p>
    </div>

    <div class="f3">
      <div id="f31">
        <img :src="banner" width="170" :alt="logo" />
      </div>
      <div id="f32">
        <div class="fb">
          <img :src="fb" alt="fb" />
          <p>Facebook</p>
        </div>
        <div class="insta">
          <img :src="insta" alt="insta" />
          <p>Instagram</p>
        </div>
        <div class="yt">
          <img :src="you" alt="you" />
          <p>Youtube</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Index-pink",
  data() {
    return {
      logo: require("../assets/bal.jpg"),
      banner: require("../assets/BALANCE LOGO.jpg"),
      fb: require("../assets/fb.png"),
      insta: require("../assets/insta.jpg"),
      you: require("../assets/you.png"),
    };
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 50px; */
}

.f1 button {
  padding: 10px 20px;
  border-radius: 20px;
  border-radius: 2px 2px 5px black;
  margin-left: 10px;
  margin-top: 10px;
}
footer #f32 {
  text-align: center;
  display: flex;
  justify-content: space-between;
}
footer #f32 img {
  width: 30px;
}
footer #f32 p {
  font-size: 10px;
}

@media screen and (max-width: 700px) {
  footer {
    position: relative;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  footer .f1 {
    width: 200px;
    text-align: center;
  }

  footer .f1 p {
    font-size: 12px;
    font-weight: bold;
  }

  .f1 button {
    font-size: 8px;
    padding: 5px 10px;
  }

  .f2 p {
    font-size: 10px;
    font-weight: bold;
    text-align: center;
  }
  footer #f32 {
    text-align: center;
  }

  .f3 {
    text-align: center;
  }
  footer .f3 img {
    width: 5px;
  }

  #f31 img {
    width: 100px;
  }

  footer #f32 p {
    font-size: 10px;
    text-align: center;
  }

  .f3 #f32 img {
    width: 20px;
  }
  .f3 #f32 p {
    font-size: 6px;
  }
}

@media screen and (max-width: 700px) {
  #ar1 {
    top: 20px;
    left: 20px;
  }
  section img {
    width: 80px;
  }
  section h1 {
    font-size: 30px;
  }

  section .bts button {
    font-size: 14px;
    width: 100px;
  }
  #b1 {
    left: 65%;
  }

  #b2 {
    left: 5%;
  }
}

@media screen and (max-width: 699px) {
  footer {
    position: fixed;
    bottom: 0;
  }
}
</style>