<template>
  <div class="loadingBox">
    <div class="loader">鲁班工程职业学院...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.loadingBox {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
  background-color: rgb(242, 242, 242, 0.5);
  $color-background: #eaecfa;
  $color-loader: #1f296a;

  .loader {
    width: 15.625rem;
    height: 3.125rem;
    line-height: 3.125rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: helvetica, arial, sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    color: $color-loader;
    letter-spacing: 0.2em;
    font-size: 1rem;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 0.9375rem;
      height: 0.9375rem;
      background: $color-loader;
      position: absolute;
      animation: load 0.7s infinite alternate ease-in-out;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  @keyframes load {
    0% {
      left: 0;
      height: 1.875rem;
      width: 0.9375rem;
    }
    50% {
      height: 0.5rem;
      width: 2.5rem;
    }
    100% {
      left: 14.6875rem;
      height: 1.875rem;
      width: 0.9375rem;
    }
  }
}
</style>
