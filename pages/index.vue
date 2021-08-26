<template>
  <div id="root" class="">
    <div :class="classes"></div>
    <div id="content" v-html="page.content.rendered" class=""></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  methods: {
    ...mapActions(["getPage"]),
  },
  async asyncData({ $axios }) {
    try {
      // let data = await getPage(6);
      const page = await $axios.$get("/api/pages/6");
      return {
        page,
      };
    } catch (err) {
      console.log(err);
    }
  },
  created() {},
  mounted() {
    // $("a").each(function () {
    //   $(this).attr("target", "_blank");
    // });
    $(".scroll a").on("click", function (e) {
      e.preventDefault();
      const hash = $(this).attr("href");
      console.log(hash);
      // const headerHeight = $header.outerHeight() + 500;
      const offset = $(hash).offset().top;
      $("html,body").animate({ scrollTop: offset }, 500);
    });
    let instance = this;
    $(".slider").each(function () {
      instance.$slider($(this).find(".blocks-gallery-grid"));
    });
  },
  computed: {
    // page() {
    //   return this.$store.state.posts[0];
    // },
    header() {
      return this.$store.state.header;
    },
    footer() {
      return this.$store.state.footer;
    },
    classes() {
      return this.$store.state.classes;
    },
  },
};
</script>
<style lang="scss">
#content {
  overflow-x: hidden;
  width: 100vw;
}
html,
body {
  background: blue;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-head leading-snug;
}
h1 {
  @apply text-6xl font-bold;
}
h2 {
  @apply text-4xl font-bold;
}
h3 {
  @apply text-3xl font-bold;
}
h4 {
  @apply mb-2;
}
p,
a,
li {
  @apply font-body font-light;
}
ul {
  list-style: circle;
  @apply pl-4;
}
.blocks-gallery-grid.slick-slider {
  @apply w-full relative pt-12 mt-12;
  height: 230px;
  overflow: hidden;
  figure {
    height: 230px;
    overflow: hidden;
    @apply flex justify-center items-center;
  }
  .slick-prev {
    @apply absolute rounded p-2;
    top: 0;
    left: 0;
    color: white;
  }
  .slick-next {
    @apply absolute rounded p-2;
    top: 0;
    right: 0;
    color: white;
  }
}
.gallery-vertical {
  li {
    margin: 3rem 0 !important;
    img {
      max-width: 120px !important;
      @apply mx-auto;
    }
  }
}
.w-full-gutter {
  width: calc(100% - 2rem);
}
.wp-block-button__link {
  border-radius: 0;
  background: none;
  border: 2px solid black;
  color: black;
  @apply font-footer;
}
.wp-block-buttons {
  @apply mt-8;
}
.bleed-up {
  img {
    transform: translateY(-30px);
    @apply relative z-10;
  }
}
.epmt {
  @apply flex justify-end;
  img {
    max-width: 913px;
    transform: translate(257px);
  }
}
.arrow-link {
  a {
    color: #b8c734;
    @apply relative font-normal mt-12 inline-block;
    &:after {
      @apply absolute;
      top: 50%;
      right: 0;
      transform: translate(110%, -38%);
      content: url("/Arrow.svg");
    }
  }
}
.list-none {
  ul {
    list-style: none !important;
  }
}
.wp-block-image {
  img {
    height: auto;
  }
}
.spam {
  img {
    max-width: 220%;
  }
}
.no {
  img {
    z-index: 10;
    position: relative;
    max-width: 130%;
    transform: translate(-25%);
  }
}
.stock {
  img {
    max-width: 115%;
    transform: translate(-20%);
  }
}
.wantneed {
  transform: translateY(-10%);
}
.why {
  img {
    max-width: 1600px;
    width: 200%;
  }
}
.youwantto {
  img {
    width: 80%;
    transform: rotate(20deg) scale(1.1);
    z-index: 20;
    position: relative;
  }
}
.soyouneed {
  animation: 3s linear infinite alternate soyou;
}
@keyframes soyou {
  to {
    transform: rotate(-40deg) scale(2);
    opacity: 0;
  }
}
.green {
  position: relative;
  transform: translate(-20%);
}
.pink {
  position: relative;
  transform: translateY(20%);
}
.resume {
  position: relative;
  transform: translate(25%);
  z-index: 30;
  width: 60vw;
  max-width: 60vw;
  h1 {
    font-family: "vcr";
    text-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black,
      5px -5px 0 black;
    transition: all 0.3s ease;
    padding: 1rem;
    &:hover {
      background: black;
      text-shadow: 5px 5px 0 lime, -5px -5px 0 cyan, -5px 5px 0 magenta;
      color: black;
      border: 3px solid blue;
      padding-left: 2rem;
    }
  }
}
@font-face {
  font-family: "vcr";
  src: url("/vcr.ttf");
}
</style>