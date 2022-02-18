<template>
  <div>12313</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getAddress();
    console.log(process.env.VUE_APP_API);
    console.log(this.$route.params);
  },
  mounted() {},
  methods: {
    getAddress() {
      this.$http
        .get(
          "https://www.twingo.com.tw:8443/search/getPostalCodeData?city=臺北市"
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>