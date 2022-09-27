<template>
  <section
    class="h-screen w-full flex justify-center text-2xl fixed transition-transform duration-300 overflow-y-auto py-20"
    :class="setSectionStyling"
    @wheel="scrollInsideSection"
  >
    <div class="w-[600px]">
      <span v-html="section.display" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  activeSection: {
    type: Number,
    required: true,
  },
  sectionCount: {
    type: Number,
    required: true,
  },
  animating: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["setActiveSection", "setAnimating"]);

// Identify when user is scrolling inside section
function scrollInsideSection(event) {
  // If a section is already animating, return
  if (props.animating) {
    return;
  }

  const scrollDirection = 100 / event.deltaY;
  const newActiveSection = props.activeSection + scrollDirection;
  // TODO: Check whether the content inside the section has reached the start or end

  // Prevent scrolling beyond the first or last section
  if (newActiveSection < 0 || newActiveSection === props.sectionCount) {
    return;
  }

  // Scroll to the next or previous section depending on wheel direction
  emit("setActiveSection", newActiveSection);

  // Set animating to true immediately, and false after 300ms
  emit("setAnimating", true);
  setTimeout(() => {
    emit("setAnimating", false);
  }, 300);
}

const setSectionStyling = computed(() => {
  // Initiate a variable array that can receive all the classes
  const classes = ref([]);

  // Set the section background colour
  classes.value.push(props.section.background);

  // Set styles based on the active section index
  props.index !== props.activeSection && classes.value.push("delay-300 z-10");
  props.index !== props.activeSection &&
    props.index < props.activeSection &&
    classes.value.push("-translate-y-full");
  props.index !== props.activeSection &&
    props.index > props.activeSection &&
    classes.value.push("translate-y-full");
  props.index === props.activeSection && classes.value.push("z-20");

  // Return the classes to the section
  return classes.value.join(" ");
});
</script>

<style lang="postcss">
p + p {
  @apply mt-8;
}
</style>
