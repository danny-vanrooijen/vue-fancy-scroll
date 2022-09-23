<template>
  <section
    class="h-screen w-full flex justify-center items-center text-2xl fixed transition-transform duration-300"
    :class="setSectionStyling"
    @wheel="scrollInsideSection"
  >
    {{ section.display }}
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
});
const emit = defineEmits(["setActiveSection"]);

// Identify when user is scrolling inside section
function scrollInsideSection(event) {
  const scrollDirection = 100 / event.deltaY;
  const newActiveSection = props.activeSection + scrollDirection;
  // TODO: Check whether the content inside the section has reached the start or end

  // Prevent scrolling beyond the first or last section
  if (newActiveSection < 0 || newActiveSection === props.sectionCount) {
    return;
  }

  // Scroll to the next or previous section depending on wheel direction
  emit("setActiveSection", newActiveSection);
}

const setSectionStyling = computed(() => {
  // Initiate a variable array that can receive all the classes
  const classes = ref([]);

  // Set the section background colour
  classes.value.push(props.section.background);

  // Set styles based on the active section index
  props.index !== props.activeSection && classes.value.push("translate-y-full");
  props.index === props.activeSection && classes.value.push("delay-300");

  // Return the classes to the section
  return classes.value.join(" ");
});
</script>
