<template>
  <div class="container">
    <div class="header">
      <router-link to="/">
        <img class="logo-size" src="@/assets/images/logo.png" alt="logo" />
      </router-link>
      <router-link to="/show-more"
        ><span
          ><img src="@/assets/images/arrow-left.png" alt="arrow-left" /></span
        >Return to List Page</router-link
      >
    </div>
    <form @submit.prevent="addNewUser">
      <div class="form-area">
        <base-input
          v-model="form.Name_Surname"
          class="form-gap"
          labelText="Name Surname"
          placeholderInput="Enter name and surname"
          :invalid="errorName"
          :errorText="this.errorNameText"
          onkeydown="return /[a-z]/i.test(event.key)"
        ></base-input>
        <base-input
          v-model="form.Country"
          class="form-gap"
          labelText="Country"
          placeholderInput="Enter a country"
          :invalid="errorCountry"
          :errorText="this.errorCountryText"
          onkeydown="return /[a-z]/i.test(event.key)"
        ></base-input>
        <base-input
          v-model="form.City"
          class="form-gap"
          labelText="City"
          placeholderInput="Enter a city"
          :invalid="errorCity"
          :errorText="this.errorCityText"
          onkeydown="return /[a-z]/i.test(event.key)"
        ></base-input>
        <base-input
          v-model="form.Email"
          labelText="Email"
          placeholderInput="Enter a e-mail(abc@xyz.com)"
          :invalid="errorEmail"
          :errorText="this.errorEmailText"
        ></base-input>
        <base-button
          :disabled="!checkForm"
          type="submit"
          class="form-buttom"
          btnClass="btn-default"
          btnText="Add"
        ></base-button>
      </div>
    </form>
    <div class="error-area" v-if="showErrorArea">
      <div class="circle-x" @click="showErrorArea = false">X</div>
      <div>
        <h4 class="error-header">Error while adding link element</h4>
        <span
          class="error-text"
          v-for="(error, index) in errorMessage"
          :key="'error' + index"
          >{{ error }}
        </span>
      </div>
      <div class="error-button">
        <base-button btnClass="btn-error" btnText="Error"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseInput,
    BaseButton,
  },

  data() {
    return {
      showErrorArea: false,
      form: {
        Name_Surname: "",
        Country: "",
        City: "",
        Email: "",
        Date: new Date().toLocaleDateString().replaceAll(".", "/"),
      },
      errorName: false,
      errorCountry: false,
      errorCity: false,
      errorEmail: false,
      errorMessage: [],
      errorNameText:
        "Name and surname should contain at least 4 words and not more than 60",
      errorCountryText:
        "Country should contain at least 2 words and not more than 40",
      errorCityText:
        "City should contain at least 2 words and not more than 40",
      errorEmailText: "Please Enter Correct Email",
    };
  },

  mounted() {},

  computed: {
    checkForm() {
      return Object.values(this.form).every((form) => form.length > 0);
    },
  },

  methods: {
    addNewUser() {
      this.checkFormValidation();
      if (this.errorMessage.length > 0) {
        this.showErrorArea = true;
      } else {
        this.showErrorArea = false;
        store.dispatch("addUser", this.form);
        this.form = {
          Name_Surname: "",
          Country: "",
          City: "",
          Email: "",
          Date: new Date().toLocaleDateString().replaceAll(".", "/"),
        };
      }
    },
    checkFormValidation() {
      let emailRegex =
        /* eslint-disable */
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      this.errorMessage = [];
      if (
        this.form.Name_Surname.length > 60 ||
        this.form.Name_Surname.length < 4
      ) {
        this.errorName = true;
        this.errorMessage.push(this.errorNameText);
      } else {
        this.errorName = false;
      }
      if (this.form.Country.length > 40 || this.form.Country.length < 3) {
        this.errorCountry = true;
        this.errorMessage.push(this.errorCountryText);
      } else {
        this.errorCountry = false;
      }
      if (this.form.City.length > 40 || this.form.City.length < 3) {
        this.errorCity = true;
        this.errorMessage.push(this.errorCityText);
      } else {
        this.errorCity = false;
      }
      if (!emailRegex.test(this.form.Email)) {
        this.errorEmail = true;
        this.errorMessage.push(this.errorEmailText);
      } else {
        this.errorEmail = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-bottom: 65px;
}
.logo-size {
  height: 63px;
  width: 150px;
  margin-right: 35px;
  margin-left: 37px;
}
a {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color: #484848;
}
.form-area {
  margin-left: 18%;
  width: 46%;
  .form-gap {
    margin-bottom: 37px;
  }
  .form-buttom {
    display: flex;
    justify-content: flex-end;
    margin-top: 70px;
  }
}
.error-area {
  padding: 21px 35px 10px 18px;
  display: flex;
  background: #c4c4c4;
  border-radius: 8px;
  width: 30%;
  gap: 13px;
  position: relative;
  font-family: "Inter", sans-serif;
  margin-left: auto;
  margin-right: 17px;
  margin-bottom: 24px;
  .error-header {
    font-size: 14px;
    color: #090a0a;
    margin-top: 0px;
  }
  .error-text {
    font-size: 13px;
    font-weight: 400;
    color: #090a0a;
    display: block;
  }
  .error-button {
    display: flex;
    align-self: center;
  }
}
.circle-x {
  padding: 2px;
  border-radius: 50%;
  border: 1.5px solid #090a0a;
  position: absolute;
  right: 14px;
  top: 11px;
  font-size: 13px;
  cursor: pointer;
}
</style>
