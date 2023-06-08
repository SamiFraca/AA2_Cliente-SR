<template>
  <transition name="fade">
    <div v-if="isRegistered" class="success-message mt-24">
      You have successfully registered!
    </div>
  </transition>
  <transition name="fade">
    <div v-if="isLogged" class="success-message mt-24">
      {{ $t("message.welcome") }}!
    </div>
  </transition>
  <div class="vid-wrapper mt-24">
    <video id="background-video" autoplay loop muted>
      <source src="@/assets/video/Trimmed.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="mt-24 absolute pt-16 top-0 right-0 left-0">
    <div class="">
      <h1 class="text-5xl pt-16 text-white">{{ $t("message.slogan") }}</h1>
    </div>
    <div class="md:flex md:m-auto mt-8">
      <div class="m-auto flex flex-col md:flex-row">
        <div v-if="failedName" class="">
          <input
            type="text"
            class="px-8 py-3 border-2 md:rounded-lg md:mr-8 md:mt-8 md:ml-8"
            :placeholder="$t('message.name')"
            v-model="searchName"
            @keyup.enter="submitName"
          />

          <div class="no-results shake">No results found, please try again</div>
        </div>
        <div v-else>
          <input
            type="text"
            class="px-8 py-3 border-2 md:rounded-lg md:mr-8 md:mt-8 md:ml-8"
            :placeholder="$t('message.name')"
            v-model="searchName"
            @keyup.enter="submitName"
          />
        </div>
        <div v-if="failedLocation">
          <input
            type="text"
            class="px-8 py-3 border-2 rounded-lg md:mr-8 mt-8"
            :placeholder="$t('message.location')"
            v-model="searchLocation"
            @keyup.enter="submitLocation"
          />
          <div class="no-results shake">No results found, please try again</div>
        </div>
        <div v-else>
          <input
            type="text"
            class="px-8 py-3 border-2 rounded-lg md:mr-8 mt-8"
            :placeholder="$t('message.location')"
            v-model="searchLocation"
            @keyup.enter="submitLocation"
          />
        </div>
        <div v-if="failedSport">
          <input
            type="text"
            class="px-8 py-3 border-2 rounded-lg mt-8 md:w-full md:mt-8"
            :placeholder="$t('message.sport')"
            v-model="searchSport"
            @keyup.enter="submitSport"
          />
          <div class="no-results shake">No results found, please try again</div>
        </div>
        <div v-else>
          <input
            type="text"
            class="px-8 py-3 border-2 rounded-lg mt-8 md:w-full md:mt-8"
            :placeholder="$t('message.sport')"
            v-model="searchSport"
            @keyup.enter="submitSport"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="py-16 max-w mx-auto slider-container">
    <div class="slider">
      <div class="slide">
        <div class="w-350 h-64 border p-4 flex flex-col rounded-md">
          <h1 class="growth-icon text-left">Exponential growth</h1>
          <p class="text-left mt-8">
            As you may have seen, watchme can provide your establishments with
            lots of free advertising
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="w-350 h-64 border p-4 flex flex-col rounded-md">
          <h1 class="text-left social-icon">Meet new people</h1>
          <p class="text-left mt-8">
            A wide variety of opportunities to meet new people every day with
            WatchME
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="w-350 h-64 border p-4 flex flex-col rounded-md">
          <h1 class="text-left discover-icon">Discover new places</h1>
          <p class="text-left mt-8">
            Wherever you go, we will be there to help you decide the best
            possible bar you can discover
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="w-350 h-64 border p-4 flex flex-col rounded-md">
          <h1 class="text-left availability-icon">Full availability</h1>
          <p class="text-left mt-8">
            Wherever you go, we will be there to help you decide the best
            possible bar you can discover
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100 bg-blue-400 pt-16 md:pt-0">
    <div class="max-w w-100 mx-auto flex flex-col md:flex-row">
      <div class="flex flex-col justify-center gap-16 margin-left-15">
        <h1 class="text-left text-5xl">Explore all your possibilities</h1>
        <p class="text-left">
          WatchMe helps you exceed your goals, making you meet the world and new
          experiences whenever you want. We will always be available to help
          you.
        </p>
      </div>
      <img src="../../assets/football.png" style="width: 700px" />
    </div>
  </div>
  <div>
    <p class="max-w mx-auto text-left py-16">
      <span class="font-bold"
        >Sports hold a special place in our hearts, and it's easy to see why we
        love them so much. For starters, sports bring out our competitive
        spirit. </span
      ><br /><br />

      Whether we're watching from the stands or playing ourselves, there's
      something exhilarating about the thrill of victory and the agony of
      defeat. The ups and downs of a game keep us on the edge of our seats, and
      we can't help but get caught up in the excitement. But it's not just about
      the competition. Sports have this amazing power to bring people together.
      When we support our favorite team or join a recreational league, we become
      part of a community.<br /><br />

      <span class="font-bold"
        >We bond with fellow fans or teammates over shared victories and
        heartbreaking losses.</span
      ><br /><br />
      It doesn't matter where we come from or what our background is—sports have
      this magical way of uniting us all. Sports also inspire us. We look up to
      athletes who push their limits and overcome challenges. Their stories of
      resilience and determination remind us that anything is possible with hard
      work and dedication. Whether it's a last-minute comeback or an underdog's
      triumph, these moments fill us with hope and remind us to never give up.
      Of course, sports are also just plain fun. They give us a break from our
      everyday lives and provide entertainment like no other. Watching our
      favorite sport or team gives us a chance to escape, unwind, and enjoy the
      pure excitement of the game.
      <br /><br />
      <span class="font-bold"
        >The energy in the stadium or the camaraderie in a sports bar—it's
        contagious and brings joy to our lives.</span
      ><br />
      And let's not forget the life lessons sports teach us. Teamwork,
      sportsmanship, and fair play—these values are at the core of sports. We
      learn to work together, respect our opponents, and play by the rules.
      These lessons extend far beyond the game itself and shape us into better
      individuals. So, whether it's the thrill of competition, the sense of
      community, the inspiration, the entertainment, or the life lessons,
      there's no denying that sports hold a special place in our hearts. They
      bring out the best in us and make us feel alive. It's no wonder we love
      them so much.
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import { ref } from "vue";

export default {
  data() {
    return {
      isRegistered: false,
      isLogged: false,
      LoggedUsername: null,
      searchLocation: "",
      locations: [],
      searchName: "",
      searchSport: "",
      failedLocation: false,
      failedSport: false,
      failedName: false,
    };
  },
  methods: {
    async submitSport() {
      const isRedirected = ref(false);
      console.log("entraSport");
      const url = `https://watchmeapi-test.azurewebsites.net/Bars/shows/sports?sport=${this.searchSport}`;
      try {
        await axios.get(url).then((response) => {
          console.log(this.setLocations);
          localStorage.setItem("sportSearch", JSON.stringify(response.data));
          if (!isRedirected.value) {
            isRedirected.value = true;
            this.$router.push(`/sports/search/${this.searchSport}`);
          }
        });
      } catch (error) {
        console.log(error);
        this.failedSport = true;
      }
    },
    async submitName() {
      const isRedirected = ref(false);
      console.log("entraName");
      const url = `https://watchmeapi-test.azurewebsites.net/Bars/names?name=${this.searchName}`;
      try {
        await axios.get(url).then((response) => {
          console.log(this.setLocations);
          localStorage.setItem("nameSearch", JSON.stringify(response.data));
          if (!isRedirected.value) {
            isRedirected.value = true;
            this.$router.push(`/names/search/${this.searchName}`);
          }
        });
      } catch (error) {
        console.log(error);
        this.failedName = true;
      }
    },
    ...mapMutations(["setLocations"]),
    async submitLocation() {
      const isRedirected = ref(false);
      console.log("entraLocation");
      const url = `https://watchmeapi-test.azurewebsites.net/Bars/locations?location=${this.searchLocation}`;
      try {
        await axios.get(url).then((response) => {
          this.setLocations(response.data);
          console.log(this.setLocations);
          localStorage.setItem("locationSearch", JSON.stringify(response.data));
          if (!isRedirected.value) {
            isRedirected.value = true;
            this.$router.push(`/locations/search/${this.searchLocation}`);
          }
        });
      } catch (error) {
        console.log(error);
        this.failedLocation = true;
      }
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const registrationSuccess = urlParams.get("registrationSuccess");
    const loggedSuccess = urlParams.get("LoginSuccess");
    if (registrationSuccess === "true") {
      this.isRegistered = true;
      setTimeout(() => {
        this.isRegistered = false;
      }, 4000);
    }
    if (loggedSuccess === "true") {
      // this.LoggedUsername = token;
      this.isLogged = true;
      setTimeout(() => {
        this.isLogged = false;
      }, 4000);
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

h1 {
  font-family: "Mukta", sans-serif;
}

.no-results {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(163, 10, 10);
  color: white;
  border-radius: 10px;
  padding: 5px;
  font-weight: bold;
  width: 50%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.new-opportunities {
  background-image: url("https://i0.wp.com/www.goquiz.dk/wp-content/uploads/2019/12/%C3%85ret-der-gik-2019-sport.jpg");
  background-position: left;
}
.shake {
  animation: shake 1s ease-in-out;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  10%,
  90% {
    transform: translateX(-10px);
  }

  20%,
  80% {
    transform: translateX(10px);
  }

  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }

  40%,
  60% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}
.vid-wrapper {
  height: 70vh;
  width: 100%;
}
.margin-left-15 {
  @media (max-width: 1200px) {
    margin-left: 15px;
  }
}
.max-w {
  max-width: 1200px;
}
#background-video {
  height: 70vh;
  width: 100%;
  object-fit: cover;
}
.success-message {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 80;
  width: 100%;
}

video {
  filter: brightness(50%);
}
.growth-icon::after {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PgoNPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJhIi8+Cg08ZyBpZD0iYiI+Cg08cGF0aCBkPSJNNTMuMjY3NiwyMS4yODYxYy0xLjA4MjUtLjYzNTctMi4zODMzLS42NTA5LTMuNDc2MS0uMDM5Ni0yLjM1MywxLjMxNDUtNC4zNzg5LDIuNzU5My02LjAyMSw0LjI5NDQtLjQ4OTcsLjQ1Ny0uNzcwNSwxLjExODItLjc3MDUsMS44MTR2MjYuMTQ1YzAsLjgyNzEsLjY3MjksMS41LDEuNSwxLjVoOWMuODI3MSwwLDEuNS0uNjcyOSwxLjUtMS41VjI0LjMwNzZjMC0xLjI1NTQtLjY0NzUtMi4zODQ4LTEuNzMyNC0zLjAyMTVabS43MzI0LDMyLjIxMzljMCwuMjc1OS0uMjI0MSwuNS0uNSwuNWgtOWMtLjI3NTksMC0uNS0uMjI0MS0uNS0uNVYyNy4zNTVjMC0uNDE5NCwuMTY1LS44MTQ1LC40NTMxLTEuMDgzNSwxLjU4MzUtMS40OCwzLjU0MzUtMi44NzcsNS44MjU3LTQuMTUxOSwuMzgxOC0uMjEyOSwuNzk4OC0uMzE5MywxLjIxNTMtLjMxOTMsLjQzNiwwLC44NzIxLC4xMTYyLDEuMjY3NiwuMzQ4MSwuNzc1NCwuNDU1NiwxLjIzODMsMS4yNjI3LDEuMjM4MywyLjE1OTJ2MjkuMTkyNFptLTE3LjczMjQtMjIuMjEzOWMtMS4wODMtLjYzNTctMi4zODI4LS42NTA5LTMuNDc2MS0uMDM5Ni0yLjM1MywxLjMxNDUtNC4zNzg5LDIuNzU5My02LjAyMSw0LjI5NDQtLjQ4OTcsLjQ1Ny0uNzcwNSwxLjExODItLjc3MDUsMS44MTR2MTYuMTQ1YzAsLjgyNzEsLjY3MjksMS41LDEuNSwxLjVoOWMuODI3MSwwLDEuNS0uNjcyOSwxLjUtMS41di0xOS4xOTI0YzAtMS4yNTU0LS42NDc1LTIuMzg0OC0xLjczMjQtMy4wMjE1Wm0uNzMyNCwyMi4yMTM5YzAsLjI3NTktLjIyNDEsLjUtLjUsLjVoLTljLS4yNzU5LDAtLjUtLjIyNDEtLjUtLjV2LTE2LjE0NWMwLS40MTk0LC4xNjUtLjgxNDUsLjQ1MzEtMS4wODM1LDEuNTgzNS0xLjQ4LDMuNTQzNS0yLjg3Nyw1LjgyNTctNC4xNTE5LC4zODE4LS4yMTI5LC43OTg4LS4zMTkzLDEuMjE1My0uMzE5MywuNDM2LDAsLjg3MjEsLjExNjIsMS4yNjc2LC4zNDgxLC43NzU0LC40NTU2LDEuMjM4MywxLjI2MjcsMS4yMzgzLDIuMTU5MnYxOS4xOTI0Wm0tMTcuNzMyNC0xMy4yMTM5Yy0xLjA4MzUtLjYzNTctMi4zODMzLS42NTA5LTMuNDc2MS0uMDM5Ni0yLjM1MywxLjMxNDUtNC4zNzg5LDIuNzU5My02LjAyMSw0LjI5NDQtLjQ4OTcsLjQ1Ny0uNzcwNSwxLjExODItLjc3MDUsMS44MTR2Ny4xNDVjMCwuODI3MSwuNjcyOSwxLjUsMS41LDEuNWg5Yy44MjcxLDAsMS41LS42NzI5LDEuNS0xLjV2LTEwLjE5MjRjMC0xLjI1NTQtLjY0NzUtMi4zODQ4LTEuNzMyNC0zLjAyMTVabS43MzI0LDEzLjIxMzljMCwuMjc1OS0uMjI0MSwuNS0uNSwuNUgxMC41Yy0uMjc1OSwwLS41LS4yMjQxLS41LS41di03LjE0NWMwLS40MTk0LC4xNjUtLjgxNDUsLjQ1MzEtMS4wODM1LDEuNTgzNS0xLjQ4LDMuNTQzNS0yLjg3Nyw1LjgyNTctNC4xNTE5LC4zODE4LS4yMTI5LC43OTg4LS4zMTkzLDEuMjE1My0uMzE5MywuNDM2LDAsLjg3MjEsLjExNjIsMS4yNjc2LC4zNDgxLC43NzU0LC40NTU2LDEuMjM4MywxLjI2MjcsMS4yMzgzLDIuMTU5MnYxMC4xOTI0Wk00My42ODM2LDIwLjE2NTVjLjM2NDctMy40MDc3LC40MDQzLTYuNzMzOSwuMTE3Ny05Ljg4NjItLjA2NjQtLjczNzMtLjY5NTgtMS4yODI3LTEuNDQxOS0xLjI3Mi0zLjcwMzYsLjEyMTEtNy4xMTQzLC43NTI5LTEwLjEzNzIsMS44Nzg5LS41MTYxLC4xOTI0LS44NzY1LC42MzEzLS45NjQ0LDEuMTc0My0uMDg2OSwuNTQsLjExNTIsMS4wNjc0LC41NDIsMS40MDk3bDEuNjU2MiwxLjMzMTVjLS45OTI3LDEuNDc0MS01LjMyMzIsNy4xNTI4LTE0LjgzMTEsMTAuMTc4Ny0xLjEyNjUsLjM1NzktMi4zMzMsLjYxNjctMy40OTk1LC44NjY3LTMuMjk4MywuNzA2NS02LjQxMzEsMS4zNzQ1LTYuMDk5Niw0LjE2MjEsLjA2ODQsLjYxNTcsLjQzNTEsMS40ODQ0LDEuNzk2NCwyLjEyNSwxLjE4OCwuNTU5MSwyLjkwMjMsLjg0MjMsNC44NzIxLC44NDIzLDQuMTE1MiwwLDkuMzQ0Mi0xLjIzNTgsMTMuMjEtMy43NzM5LDYuMTA2NC00LjAwNzMsOS45MzQxLTcuOTkyNywxMS4wMjczLTkuMTk0M2wxLjQwMTQsMS4xMjI2Yy40MTQ2LC4zMzM1LC45ODA1LC40MTExLDEuNDcyMiwuMjA2NSwuNDkzNy0uMjA1NiwuODIyMy0uNjQzNiwuODc4NC0xLjE3MTlabS0uOTk0MS0uMTA2NGMtLjAyNDQsLjIzLS4xOTU4LC4zMjUyLS4yNjg2LC4zNTU1LS4xNTgyLC4wNjU0LS4zMzA2LC4wNDItLjQ2MjktLjA2NGwtMS43NzItMS40MTk5Yy0uMjExNC0uMTY5OS0uNTE5NS0uMTM5Mi0uNjk0MywuMDY3NC0uMDM5MSwuMDQ2NC0zLjk5NTEsNC42ODI2LTExLjEzNjIsOS4zNjg3LTUuMzYyMywzLjUyMTUtMTMuNzQyMiw0LjQ0NjgtMTcuMTA3NCwyLjg2MjgtLjc1NjgtLjM1Ni0xLjE2OTktLjgwMzctMS4yMjgtMS4zMzE1LS4yMDI2LTEuNzk2OSwxLjg4NzctMi4zMzg0LDUuMzE0OS0zLjA3MzIsMS4xODk5LS4yNTQ5LDIuNDIwNC0uNTE4NiwzLjU5MzMtLjg5MTEsMTEuMzI4Ni0zLjYwNTUsMTUuNDU1MS0xMC42OTQzLDE1LjYyNTUtMTAuOTk0NiwuMTIwNi0uMjEzNCwuMDY5My0uNDgyOS0uMTIyMS0uNjM2MmwtMi4wMDU5LTEuNjExOGMtLjIwNTEtLjE2NS0uMTk0My0uMzg0My0uMTgwNy0uNDcwNywuMDE0Mi0uMDg4NCwuMDc0Ny0uMzAzMiwuMzI1Ny0uMzk2NSwyLjkyMTktMS4wODg0LDYuMjI2MS0xLjY5OTcsOS44MjA4LTEuODE3NGguMDEyMmMuMjA0NiwwLC4zODMzLC4xNjAyLC40MDE0LC4zNjI4di4wMDA1Yy4yODA4LDMuMDg2OSwuMjQyMiw2LjM0NzItLjExNTcsOS42ODk1WiIvPgoNPC9nPgoNPC9zdmc+");
  width: 24px;
  height: 24px;
  content: "";
  top: 5px;
  left: 3px;
  background-repeat: no-repeat;
  background-size: 24px;
  display: inline-block;
  position: relative;
}
.slider-container {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slider {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: -16px;
}

.slide {
  width: 350px;
  flex-shrink: 0;
  margin-right: 16px;
  scroll-snap-stop: always;
}

.availability-icon::after {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PgoNPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgoNPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDggNDgiIGlkPSJMYXllcl8zIiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgoNPHBhdGggZD0iTTI1LjY5MSw0Ny45OTJDMjUuNzk0LDQ3Ljk5MywyNS44OTYsNDgsMjYsNDhzMC4yMDYtMC4wMDcsMC4zMDktMC4wMDhIMjUuNjkxeiIvPgoNPGc+Cg08cmVjdCBoZWlnaHQ9IjYiIHdpZHRoPSI2IiB4PSI3LjUiIHk9IjI0Ii8+Cg08cmVjdCBoZWlnaHQ9IjYiIHdpZHRoPSI2IiB4PSIxNi42NjciIHk9IjI0Ii8+Cg08cmVjdCBoZWlnaHQ9IjYiIHdpZHRoPSI2IiB4PSI3LjUiIHk9IjMzIi8+Cg08cmVjdCBoZWlnaHQ9IjYiIHdpZHRoPSI2IiB4PSIxNi42NjciIHk9IjMzIi8+Cg08cG9seWdvbiBwb2ludHM9IjE0LDAgMTAsMCAxMCw0IDAsNCAwLDE1LjkgMCwxOS45IDAsNDggMjIuNjY3LDQ4IDIyLjY2Nyw0NCA0LDQ0IDQsMTkuOSAyMi42NjcsMTkuOSAyMi42NjcsMTUuOSA0LDE1LjkgNCw4IDEwLDggICAgMTAsMTIgMTQsMTIgMTQsOCAyMi42NjcsOCAyMi42NjcsNCAxNCw0ICAiLz4KDTxwYXRoIGQ9Ik0yNS45OCw0aDAuMDM5QzI2LjAxMyw0LDI2LjAwNyw0LDI2LDRTMjUuOTg3LDQsMjUuOTgsNHoiLz4KDTxwYXRoIGQ9Ik0yNi41MDIsNC4wMTJ2NC4wMTNDMzYuMjA5LDguMjkzLDQ0LDE2LjIyOCw0NCwyNmMwLDkuNzcxLTcuNzkxLDE3LjcwNi0xNy40OTgsMTcuOTc1djQuMDEzQzM4LjQyLDQ3LjcyLDQ4LDM3Ljk4Miw0OCwyNiAgIFMzOC40Miw0LjI4LDI2LjUwMiw0LjAxMnoiLz4KDTxwb2x5Z29uIHBvaW50cz0iNDAsMjggNDAsMjQgMzAuNTAxLDI0IDMwLjUwMSwxMi4wODMgMjYuNTAyLDEyLjA4MyAyNi41MDIsMjQgMjYuNTAyLDI4IDMwLjUwMSwyOCAgIi8+Cg08L2c+Cg08L3N2Zz4=");
  width: 24px;
  height: 24px;
  content: "";
  top: 5px;
  left: 5px;
  background-repeat: no-repeat;
  background-size: 20px;
  display: inline-block;
  position: relative;
}
.discover-icon::after {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAtNjkgMTE2MiAxMTYyIiBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iaWNvbiIgIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAyNC40MDg2NzQgNjc2Ljg5OTgyN2wtMTMuMjEzNzgyLTMuOTUwNTEyVjIwNi41MTY0MjlhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMC0zNC4wNTYxNC0zNC4wNTYxMzlIODAwLjg2NDE3NVYzNC4wNTYxMzlhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMC0zNC4wNTYxNC0zNC4wNTYxMzlINTM1LjkwNzQxYTM0LjA1NjEzOSAzNC4wNTYxMzkgMCAwIDAtMzQuMDU2MTQgMzQuMDU2MTM5djc0LjUxNDgzM2gtMTI0LjIzNjc5NmEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwLTM0LjA1NjE0IDM0LjA1NjE0djEwMS42MjM1MkgxODQuODU2NzI1YTM0LjA1NjEzOSAzNC4wNTYxMzkgMCAwIDAtMzQuMDU2MTQgMzQuMDU2MTM5djM2Mi43NjU5OTdjMCA2LjUzODc3OSAxLjkwNzE0NCAxMi41MzI2NTkgNS4wNDAzMDkgMTcuNzA5MTkzbC00MS4wMDM1OTIgMjEuMjUxMDMxYTQxLjAwMzU5MiA0MS4wMDM1OTIgMCAwIDAtMjIuMDY4Mzc4IDM2LjIzNTczMnY1Mi44NTUxMjlIMTM2LjIyNDU1OHYzMy45MTk5MTRsMzguNDE1MzI1IDE1LjkzODI3NFY3NDEuMDYxNTk0bDE2Ni4wNTc3MzYtODYuMjMwMTQ1IDE4NS44MTAyOTYgNzEuMzgxNjY4Vjg4Ni44MjE4N2MxMS40NDI4NjMgMC40MDg2NzQgMjIuODg1NzI2IDAuODE3MzQ3IDM0LjQ2NDgxMyAwLjk1MzU3MmwyMC40MzM2ODQgMC4yNzI0NDkgMTkuNzUyNTYxLTAuMjcyNDQ5YzIuMzE1ODE3IDAgNC43Njc4Ni0wLjEzNjIyNSA3LjA4MzY3Ny0wLjI3MjQ0OXYtMTg5LjM1MjEzNWMwLTE2Ljg5MTg0NS0xMC40ODkyOTEtMzIuMTQ4OTk2LTI2LjE1NTExNS0zOC4xNDI4NzZsLTUuMzEyNzU4LTIuMDQzMzY4di02Ljk0NzQ1M2gyMjIuMDQ2MDI5djIyMi4zMTg0NzhjMjcuMzgxMTM2LTMuODE0Mjg4IDUzLjY3MjQ3Ni04LjMwOTY5OCA3OC4xOTI4OTYtMTMuNjIyNDU2bDMuNTQxODM5LTAuODE3MzQ3VjcxOC45OTMyMTVsOTEuMTM0MjI5IDI3LjUxNzM2MXY4Ni43NzUwNDNjMTUuMjU3MTUtNS43MjE0MzEgMjguNjA3MTU3LTExLjU3OTA4NyAzOS41MDUxMjItMTcuNTcyOTY4bDExLjk4Nzc2MS02LjUzODc3OCAyLjcyNDQ5MS0yLjMxNTgxOHYtMzcuNDYxNzUzaDI3LjY1MzU4NXYtNTMuMjYzODAyYy0wLjEzNjIyNS0xOC4xMTc4NjYtMTEuOTg3NzYxLTM0LjA1NjEzOS0yOS4xNTIwNTUtMzkuMjMyNjczek0zNDMuNTU4MzM0IDM2Ni4wMzUzODZoLTMzLjUxMTI0MWEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwIDAgNjguMTEyMjc5aDMzLjUxMTI0MXY2NC45NzkxMTRoLTMzLjUxMTI0MWEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwIDAgNjguMTEyMjc5aDMzLjUxMTI0MXYyLjU4ODI2N2MtOC4zMDk2OTgtMS4wODk3OTYtMTYuNzU1NjIxIDAuMjcyNDQ5LTI0LjI0Nzk3MSA0LjIyMjk2MWwtMTAwLjM5NzQ5OSA1Mi4xNzQwMDZWMzEyLjQ5OTEzNWgxMjQuNjQ1NDd2NTMuNTM2MjUxeiBtMTk1LjYxODQ2NSAyMDMuMjQ3MDRjNi42NzUwMDMtNi4yNjYzMyAxMC44OTc5NjUtMTQuOTg0NzAxIDEwLjg5Nzk2NS0yNC45MjkwOTRhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMC0zNC4wNTYxNC0zNC4wNTYxMzloLTEuNzcwOTE5YTM0LjA1NjEzOSAzNC4wNTYxMzkgMCAwIDAtMzQuMDU2MTM5IDM0LjA1NjEzOWMwIDE3LjU3Mjk2OCAxMy40ODYyMzEgMzIuMDEyNzcxIDMwLjY1MDUyNSAzMy42NDc0NjZhNDAuNTk0OTE4IDQwLjU5NDkxOCAwIDAgMC0xNS44MDIwNDggMzIuMDEyNzcxVjYyNi42MzI5NjVsLTgzLjM2OTQzLTMyLjAxMjc3MVYxNzYuNjgzMjUxaDE4My45MDMxNTN2Mzg5LjczODQ2YzAgMC45NTM1NzIgMC4yNzI0NDkgMS45MDcxNDQgMC4yNzI0NDkgMi44NjA3MTVoLTU2LjY2OTQxNnogbTE5My41NzUwOTcgMEg2NjMuNDEzNTk2YzAuMTM2MjI1LTAuOTUzNTcyIDAuMjcyNDQ5LTEuOTA3MTQ0IDAuMjcyNDQ5LTIuODYwNzE1VjE0Mi42MjcxMTJhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMC0zNC4wNTYxMzktMzQuMDU2MTRoLTU5LjY2NjM1N1Y2OC4xMTIyNzloMTYyLjc4ODM0N3Y1MDEuMTcwMTQ3eiBtMjEwLjMzMDcxNyA4My4wOTY5ODFsLTYyLjUyNzA3Mi0xOC43OTg5ODl2LTIzLjQzMDYyNGMwLTIyLjYxMzI3Ny0xOC4yNTQwOTEtNDAuODY3MzY3LTQwLjg2NzM2OC00MC44NjczNjhoLTM4LjgyMzk5OHYtMzcuMDUzMDc5aDMwLjkyMjk3NGEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwIDAtNjguMTEyMjc5aC0zMC45MjI5NzR2LTYyLjY2MzI5N2gzMC45MjI5NzRhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMCAwLTY4LjExMjI3OGgtMzAuOTIyOTc0di05Mi43Njg5MjRoMTQyLjIxODQzOHY0MTEuODA2ODM4eiBtLTU2My4yODg1NDYgMTA3LjYxNzRIMzIxLjQ4OTk1NmMtMjIuNjEzMjc3IDAtNDAuODY3MzY3IDE4LjI1NDA5MS00MC44NjczNjcgNDAuODY3MzY4djU4LjAzMTY2MWw0LjYzMTYzNSAwLjk1MzU3MmMzNS42OTA4MzQgNy42Mjg1NzUgNzQuNzg3MjgyIDEzLjc1ODY4IDExNi4xOTk1NDcgMTguMzkwMzE1bDE4LjkzNTIxNCAyLjE3OTU5M2gwLjQwODY3NHYtNzkuNTU1MTQxYy0wLjEzNjIyNS0yMi40NzcwNTItMTguMzkwMzE1LTQwLjg2NzM2Ny00MS4wMDM1OTItNDAuODY3MzY4eiBtMzMwLjc1MzIyNi01OS45Mzg4MDVoLTIzLjI5NDRhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMC0zNC4wNTYxMzkgMzQuMDU2MTM5djQzLjA0Njk2MWEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwIDM0LjA1NjEzOSAzNC4wNTYxMzloMjMuMjk0NGEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwIDM0LjA1NjEzOS0zNC4wNTYxMzl2LTQzLjA0Njk2MWMwLTE4LjkzNTIxNC0xNS4yNTcxNS0zNC4wNTYxMzktMzQuMDU2MTM5LTM0LjA1NjEzOXpNNTE2LjAxODYyNCAzNzcuMzQyMDI1aC0xLjc3MDkxOWEzNC4wNTYxMzkgMzQuMDU2MTM5IDAgMCAwIDAgNjguMTEyMjc5aDEuNzcwOTE5YTM0LjA1NjEzOSAzNC4wNTYxMzkgMCAwIDAgMC02OC4xMTIyNzl6IG0wLTEzMi45NTUxNjloLTEuNzcwOTE5YTM0LjA1NjEzOSAzNC4wNTYxMzkgMCAwIDAgMCA2OC4xMTIyNzloMS43NzA5MTlhMzQuMDU2MTM5IDM0LjA1NjEzOSAwIDAgMCAwLTY4LjExMjI3OXpNMTA4MC4zOTY5NjcgODIzLjc0OTljMCAzLjgxNDI4OC0zLjk1MDUxMiAxMS4zMDY2MzgtMTQuOTg0NzAxIDIwLjg0MjM1OGw1My4yNjM4MDIgNjEuOTgyMTczYzM1LjgyNzA1OS0zMC43ODY3NSA0My4zMTk0MDktNjEuOTgyMTc0IDQzLjMxOTQwOS04Mi44MjQ1MzFoLTgxLjU5ODUxek04OTYuOTAyNDg4IDk1Mi43NTQ1NTZsLTguNTgyMTQ3LTM5LjUwNTEyMWMtMzcuNDYxNzUzIDguMDM3MjQ5LTc4LjMyOTEyMSAxNC40Mzk4MDMtMTIxLjUxMjMwNiAxOS4yMDc2NjJsOC45OTA4MjEgODEuMTg5ODM3YzQ1LjkwNzY3Ni01LjA0MDMwOSA4OS4zNjMzMS0xMS45ODc3NjEgMTI5LjU0OTU1NC0yMC41Njk5MDlsLTAuMTM2MjI0LTAuNDA4NjczIDQuNjMxNjM1LTAuODE3MzQ4LTEyLjk0MTMzMy0zOS4wOTY0NDh6TTIzNC4zMDYyMzkgOTAzLjg0OTk0Yy0wLjEzNjIyNSAwLTAuMjcyNDQ5IDAtMC4yNzI0NDktMC4xMzYyMjQtNDQuMjcyOTgxLTExLjU3OTA4Ny04Mi4xNDM0MDgtMjUuNDczOTkyLTEwOS4xMTU4NzEtNDAuMzIyNDY5bC0zOS4yMzI2NzIgNzEuNjU0MTE3YzMzLjUxMTI0MSAxOC4zOTAzMTUgNzYuNTU4MjAxIDM0LjQ2NDgxMyAxMjguMTg3MzA5IDQ3LjgxNDgybDkuNjcxOTQzLTM3LjMyNTUyOSAwLjEzNjIyNS0wLjQwODY3NC05LjUzNTcxOSAzNy44NzA0MjcgMTAuMDgwNjE3LTM5LjY0MTM0NiAxMi45NDEzMzMtMzguODIzOTk5LTIuODYwNzE2LTAuNjgxMTIzek0xMDU3Ljc4MzY5IDkwMC41ODA1NTFsLTAuODE3MzQ3LTEuMzYyMjQ2LTE5LjYxNjMzNi0zNS44MjcwNThjLTI3LjEwODY4NyAxNC44NDg0NzctNjQuOTc5MTE0IDI4Ljg3OTYwNi0xMDkuNTI0NTQ1IDQwLjQ1ODY5M2wyMC41Njk5MDggNzkuMTQ2NDY4YzUwLjk0Nzk4NS0xMy4yMTM3ODIgOTMuNTg2MjcxLTI5LjE1MjA1NSAxMjYuODI1MDY0LTQ3LjEzMzY5N2gwLjEzNjIyNGMwLjQwODY3NC0wLjI3MjQ0OSAwLjgxNzM0Ny0wLjQwODY3NCAxLjIyNjAyMS0wLjY4MTEyM2wtMTguNzk4OTg5LTM0LjYwMTAzN3pNOTkuMDM1MjUzIDg0Ni43NzE4NUw5Ni41ODMyMTEgODQ0LjU5MjI1OEM4NS42ODUyNDcgODM1LjE5Mjc2MyA4MS43MzQ3MzUgODI3LjcwMDQxMiA4MS43MzQ3MzUgODIzLjc0OTlIMGMwIDIwLjcwNjEzMyA3LjQ5MjM1MSA1MS45MDE1NTYgNDMuMzE5NDA5IDgyLjgyNDUzMWw0LjIyMjk2MiAzLjI2OTM5IDIyLjYxMzI3Ni0zMy43ODM2OTEgMjguODc5NjA2LTI5LjI4ODI4ek03MjkuMzQ2MjgyIDkzNi4yNzEzODVsLTMuNTQxODM5IDAuMTM2MjI0Yy00MC4xODYyNDUgMy40MDU2MTQtODIuMDA3MTg0IDUuMzEyNzU4LTEyMy45NjQzNDcgNS44NTc2NTZsMC45NTM1NzIgODEuNzM0NzM1YzQ0LjAwMDUzMi0wLjU0NDg5OCA4Ny43Mjg2MTUtMi41ODgyNjcgMTI5Ljk1ODIyOC02LjEzMDEwNWwtMy4yNjkzOS0zOS4wOTY0NDh2LTQyLjUwMjA2MnpNMjczLjgxMTM2MSA5MTMuMjQ5NDM1bC0xNy4wMjgwNyA3OS45NjM4MTVjNDAuMDUwMDIgOC41ODIxNDcgODMuNjQxODc4IDE1LjM5MzM3NSAxMjkuNTQ5NTU1IDIwLjU2OTkwOHYtMC41NDQ4OThsNC42MzE2MzUgMC42ODExMjNWOTcyLjY0MzM0Mmw0LjM1OTE4NS00MC4xODYyNDVjLTQzLjE4MzE4NS00Ljc2Nzg2LTg0LjE4Njc3Ny0xMS4zMDY2MzgtMTIxLjUxMjMwNS0xOS4yMDc2NjJ6TTQzNi40NjM0ODMgOTM2LjQwNzYwOWwtNi44MTEyMjggODEuNDYyMjg2YzQyLjA5MzM4OCAzLjU0MTgzOCA4NS44MjE0NzEgNS41ODUyMDcgMTI5Ljk1ODIyOCA2LjEzMDEwNWwwLjQwODY3NC00MC44NjczNjd2LTUuNTg1MjA3bDAuNDA4NjczLTM1LjI4MjE2MWMtNDIuMjI5NjEzLTAuNTQ0ODk4LTgzLjkxNDMyOC0yLjQ1MjA0Mi0xMjMuOTY0MzQ3LTUuODU3NjU2eiIgLz48L3N2Zz4=");
  width: 24px;
  height: 24px;
  content: "";
  top: 5px;
  left: 3px;
  background-repeat: no-repeat;
  background-size: 24px;
  display: inline-block;
  position: relative;
}
.social-icon::after {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xOCA3LjE2QzE3Ljk0IDcuMTUgMTcuODcgNy4xNSAxNy44MSA3LjE2QzE2LjQzIDcuMTEgMTUuMzMgNS45OCAxNS4zMyA0LjU4QzE1LjMzIDMuMTUgMTYuNDggMiAxNy45MSAyQzE5LjM0IDIgMjAuNDkgMy4xNiAyMC40OSA0LjU4QzIwLjQ4IDUuOTggMTkuMzggNy4xMSAxOCA3LjE2WiIgc3Ryb2tlPSIjMjkyRDMyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTYuOTY5OSAxNC40NEMxOC4zMzk5IDE0LjY3IDE5Ljg0OTkgMTQuNDMgMjAuOTA5OSAxMy43MkMyMi4zMTk5IDEyLjc4IDIyLjMxOTkgMTEuMjQgMjAuOTA5OSAxMC4zQzE5LjgzOTkgOS41OTAwNCAxOC4zMDk5IDkuMzUwMDMgMTYuOTM5OSA5LjU5MDAzIiBzdHJva2U9IiMyOTJEMzIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik01Ljk2OTk4IDcuMTZDNi4wMjk5OCA3LjE1IDYuMDk5OTggNy4xNSA2LjE1OTk4IDcuMTZDNy41Mzk5OCA3LjExIDguNjM5OTggNS45OCA4LjYzOTk4IDQuNThDOC42Mzk5OCAzLjE1IDcuNDg5OTggMiA2LjA1OTk4IDJDNC42Mjk5OCAyIDMuNDc5OTggMy4xNiAzLjQ3OTk4IDQuNThDMy40ODk5OCA1Ljk4IDQuNTg5OTggNy4xMSA1Ljk2OTk4IDcuMTZaIiBzdHJva2U9IiMyOTJEMzIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik02Ljk5OTk0IDE0LjQ0QzUuNjI5OTQgMTQuNjcgNC4xMTk5NCAxNC40MyAzLjA1OTk0IDEzLjcyQzEuNjQ5OTQgMTIuNzggMS42NDk5NCAxMS4yNCAzLjA1OTk0IDEwLjNDNC4xMjk5NCA5LjU5MDA0IDUuNjU5OTQgOS4zNTAwMyA3LjAyOTk0IDkuNTkwMDMiIHN0cm9rZT0iIzI5MkQzMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEyIDE0LjYzQzExLjk0IDE0LjYyIDExLjg3IDE0LjYyIDExLjgxIDE0LjYzQzEwLjQzIDE0LjU4IDkuMzI5OTYgMTMuNDUgOS4zMjk5NiAxMi4wNUM5LjMyOTk2IDEwLjYyIDEwLjQ4IDkuNDY5OTcgMTEuOTEgOS40Njk5N0MxMy4zNCA5LjQ2OTk3IDE0LjQ5IDEwLjYzIDE0LjQ5IDEyLjA1QzE0LjQ4IDEzLjQ1IDEzLjM4IDE0LjU5IDEyIDE0LjYzWiIgc3Ryb2tlPSIjMjkyRDMyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNOS4wODk5NyAxNy43OEM3LjY3OTk3IDE4LjcyIDcuNjc5OTcgMjAuMjYgOS4wODk5NyAyMS4yQzEwLjY5IDIyLjI3IDEzLjMxIDIyLjI3IDE0LjkxIDIxLjJDMTYuMzIgMjAuMjYgMTYuMzIgMTguNzIgMTQuOTEgMTcuNzhDMTMuMzIgMTYuNzIgMTAuNjkgMTYuNzIgOS4wODk5NyAxNy43OFoiIHN0cm9rZT0iIzI5MkQzMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+");
  width: 24px;
  height: 24px;
  content: "";
  top: 5px;
  left: 3px;
  background-repeat: no-repeat;
  background-size: 24px;
  display: inline-block;
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.w-350 {
  width: 350px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
