<template>
  <div class="footer">
    <div>
      <img src="@/assets/images/footer.png" alt="footer" />
    </div>
    <div class="adress">
      <div>
        <p>İletişim</p>
        <small>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </small>
      </div>
      <p>Email: bilgi@tesodev.com</p>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2795620386155!2d28.888759415060537!3d41.01913932670584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1666026961097!5m2!1str!2str"
        width="467"
        height="222"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #294e98b8;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  height: 277px;
  padding: 27px 53px 27px 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
  .adress {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: inherit;
  }
}
</style>
