<template>
  <div class="relative">
    <FancyScrollSection
      v-for="(section, index) in sections"
      :index="index"
      :key="section.name"
      :section="section"
      :activeSection="activeSection"
      :sectionCount="sectionCount"
      :animating="animating"
      @setActiveSection="setActiveSection"
      @setAnimating="setAnimating"
    />
  </div>
</template>

<script setup>
import FancyScrollSection from "./fancy-scroll-section/FancyScrollSection.vue";
import { computed, ref } from "vue";

let animating = ref(false);
function setAnimating(state) {
  animating.value = state;
}

const sections = computed(() => [
  {
    name: "introduction",
    display: "This is the introduction",
    background: "bg-gray-500",
  },
  {
    name: "page-2",
    display: "This is page 2",
    background: "bg-red-500",
  },
  {
    name: "page-3",
    display: "This is page 3",
    background: "bg-blue-500",
  },
  {
    name: "page-4",
    display: "This is page 4",
    background: "bg-green-500",
  },
  {
    name: "page-5",
    display: "This is page 5",
    background: "bg-yellow-500",
  },
]);

// Set the first section as the active by default
let activeSection = ref(0);
const sectionCount = sections.value.length;

function setActiveSection(index) {
  activeSection.value = index;
}
</script>
