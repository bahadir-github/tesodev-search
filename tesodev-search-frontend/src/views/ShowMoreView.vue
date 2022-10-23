<template>
  <div class="container">
    <div class="header">
      <router-link to="/">
        <img class="logo-size" src="@/assets/images/logo.png" alt="logo" />
      </router-link>
      <base-input v-model="searchKey" class="input search"></base-input>
      <base-button
        btnClass="btn-default"
        btnText="Search"
        @click="filterUsers(searchKey)"
        :disabled="searchKey === ''"
      ></base-button>
      <div class="new-record-btn">
        <router-link to="/add-user">
          <base-button
            btnClass="btn-default "
            btnText="Add new record"
            @click="clearFilteredUser()"
          ></base-button>
        </router-link>
      </div>
    </div>
    <div class="order" v-if="filteredUser.length > 0 && searchKey">
      <base-button
        withIcon="true"
        btnClass="btn-order"
        btnText="OrderBy"
        @click="isOrderListShow = !isOrderListShow"
      ></base-button>
      <div v-if="isOrderListShow" class="order-list">
        <span
          @click="
            sortData('Name_Surname', 'asc');
            isOrderListShow = false;
          "
          >Name ascending</span
        >
        <span
          @click="
            sortData('Name_Surname', 'desc');
            isOrderListShow = false;
          "
          >Name descending</span
        >
        <span
          @click="
            sortData('Date', 'asc');
            isOrderListShow = false;
          "
          >Year ascanding</span
        >
        <span
          @click="
            sortData('Date', 'desc');
            isOrderListShow = false;
          "
          >Year descending</span
        >
      </div>
    </div>
    <div class="result-area" v-if="filteredUser.length > 0 && searchKey">
      <div v-for="(user, index) in paginatedData" :key="user.id">
        <hr v-if="index !== 0" />

        <div class="result-item">
          <img src="@/assets/images/location.png" alt="location" />
          <div class="result-text-area">
            <div class="space-between">
              <p class="result-company">{{ user.Company }}</p>
              <p class="result-name">{{ user.Name_Surname }}</p>
            </div>
            <div class="space-between">
              <p class="result-adress">{{ user.City }},{{ user.Country }}</p>
              <p class="result-date">{{ user.Date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="filteredUser.length > 0 && searchKey">
      <base-button
        :btnClass="
          pageNumber === index
            ? 'btn-selected btn-pagination prev-next-btn'
            : 'btn-pagination prev-next-btn'
        "
        btnText="Previous"
        @click="prevPage"
        :disabled="pageNumber === 0"
      ></base-button>

      <div class="pagination-numbers" v-if="usersCount <= 6">
        <div v-for="(a, index) in usersCount" :key="'button' + index">
          <base-button
            :btnClass="
              pageNumber === index
                ? 'btn-selected btn-pagination'
                : 'btn-pagination'
            "
            :btnText="index + 1"
            @click="numberPage(index)"
          ></base-button>
        </div>
      </div>

      <div class="pagination-numbers" v-else>
        <div v-for="(b, index) in usersCount" :key="'buttonfirst' + index">
          <base-button
            v-if="index < 3"
            :btnText="index + 1"
            @click="numberPage(index)"
            :btnClass="
              pageNumber === index
                ? 'btn-selected btn-pagination'
                : 'btn-pagination'
            "
          ></base-button>
        </div>
        <span class="dot-span" v-if="pageNumber > 3">...</span>
        <base-button
          v-if="pageNumber < usersCount - 3 && pageNumber > 2"
          :btnText="pageNumber + 1"
          btnClass="btn-selected btn-pagination
          "
        ></base-button>

        <span class="dot-span" v-if="pageNumber < usersCount - 4">...</span>
        <div v-for="(c, index) in usersCount" :key="'buttonlast' + index">
          <base-button
            v-if="index + 3 >= usersCount"
            :btnClass="
              pageNumber === index
                ? 'btn-selected btn-pagination'
                : 'btn-pagination 3'
            "
            :btnText="index + 1"
            @click="numberPage(index)"
          ></base-button>
        </div>
      </div>
      <base-button
        btnClass="btn-pagination prev-next-btn"
        btnText="Next"
        @click="nextPage"
        :disabled="pageNumber >= usersCount - 1"
      ></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { searchUser } from "@/mixins/searchUser";
import { mapState } from "vuex";
import store from "@/store/index";
export default {
  mixins: [searchUser],
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      searchKey: "",
      isOrderListShow: false,
      pageSize: 5,
      pageNumber: 0,
    };
  },
  async created() {
    await store.dispatch("getUsers");
    this.searchKey = this.$route.query.searchWord;
  },
  mounted() {},
  computed: {
    ...mapState(["users", "filteredUser"]),
    usersCount() {
      return Math.ceil(this.filteredUser.length / this.pageSize);
    },
    paginatedData() {
      const start = this.pageNumber * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredUser.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.isOrderListShow = false;
      this.pageNumber++;
    },
    clearFilteredUser() {
      store.dispatch("clearFilteredUser");
    },
    prevPage() {
      this.isOrderListShow = false;
      this.pageNumber--;
    },
    numberPage(number) {
      this.isOrderListShow = false;
      this.pageNumber = number;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-size {
  height: 63px;
  width: 150px;
  margin-right: 35px;
  margin-left: 37px;
}
.header {
  margin-bottom: 37px;
  display: flex;
  align-items: center;
  .search {
    width: 40%;
    margin-right: 24px;
  }
  .new-record-btn {
    margin-left: 103px;
  }
}
.result-area {
  margin-left: 186px;
  width: 55%;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .result-item {
    background-color: white;
    padding: 12px 10px 11px 27px;
    display: flex;
    align-items: center;
    font-family: "Inter", sans-serif;
    border-radius: 8px;
    img {
      width: 18px;
      height: 22px;
      margin-right: 15px;
    }
    &:hover {
      background-color: #4f75c236;
      cursor: pointer;
    }
  }
  .result-text-area {
    width: 100%;
    .result-company {
      color: #090a0a;
      margin-bottom: 4px;
    }
    .result-name {
      color: #484848;
      margin-bottom: 4px;
    }
    .result-adress {
      color: #72777a;
      font-size: 14px;
    }
    .result-date {
      color: #484848;
      font-weight: 500;
    }
  }
  .space-between {
    display: flex;
    justify-content: space-between;
  }
  hr {
    display: block;
    height: 1px;
    border-top: 1px solid #7e7e7e;
    margin-top: 13px;
    margin-bottom: 13px;
    width: 95%;
  }
}
.order {
  margin-left: 72%;
  position: relative;
  display: inline-block;
  .order-list {
    width: 130%;
    background-color: white;
    margin-top: 15px;
    padding: 10px 5px 9px 8px;
    border: 1px solid #8f8f8f;
    box-shadow: 4px 6px 12px 4px #00000033;
    position: absolute;
    font-weight: 500;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    border-radius: 8px;
  }
  span {
    display: block;
    padding: 5px 1px 4px 9px;
    &:hover {
      background-color: #b3b3b3;
      color: #ffffff;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  &-numbers {
    display: flex;
  }
  .dot-span {
    margin-right: 11px;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
