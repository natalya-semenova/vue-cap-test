<script setup lang="ts">
const runTest = () => {
  const content = `<head><meta charset="utf-8"></head><body style='color:green;'>content over blob:-Url from INLINE script, should be in green</body>`;
  const d = URL.createObjectURL(new Blob([content], {type: "text/html"}))
  const elem = document.getElementById("guinea-pig");

  if (!elem) {
    return;
  }

  elem.innerHTML = `<iframe src="${d}" width="100%" height="100%" style="display:block;"></iframe>`
};
</script>

<template>
  <div class="about">
    <h1>Test</h1>
    <section class="about__section">
      <button class="about__run-test" @click="runTest">Click to add iframe to the paragraph</button>
      <p id="guinea-pig">Frame will be added here</p>
    </section>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__run-test {
    margin: 20px;
  }

  #guinea-pig {
    padding: 10px;
    border: solid 1px rgb(61, 132, 109);
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
