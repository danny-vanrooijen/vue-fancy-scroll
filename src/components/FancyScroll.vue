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
    display:
      "<p>Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer.</p><p>Get set to make your attack run. Biggs, Wedge, let's close it up. We're going in. We're going in full throttle. Right with you, boss.</p><p>Now all you want to do is stay. Marching into the detention area is not what I had in mind. But they're going to kill her! Better her than me. She's rich.</p><p>Stay and watch over the droids. But he can. They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie.</p><p>Fast ship? You've never heard of the Millennium Falcon? Should I have? It's the ship that made the Kessel run in less than twelve parsecs! I've outrun Imperial starships, not the local bulk-cruisers, mind you. I'm talking about the big Corellian ships now. She's fast enough for you, old man. What's the cargo? Only passengers. Myself, the boy, two droids, and no questions asked.</p><p>I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn't like you. I'm sorry. I don't like you either You just watch yourself. We're wanted men.</p><p>You know that little droid is going to cause me a lot of trouble. Oh, he excels at that, sir. Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so. Well, he'd better have those units in the south range repaired be midday or there'll be hell to pay! Wait, there's something dead ahead on the scanner. It looks like our droid...hit the accelerator. Hey, whoa, just where do you think you're going? Master Luke here is your rightful owner.</p><p>Luke's just not a farmer, Owen. He has too much of his father in him. That's what I'm afraid of. What are you doing hiding there? It wasn't my fault, sir.</p><p>Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made. An escape pod was jettisoned during the fighting, but no life forms were aboard. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them. See to it personally, Commander.</p><p>Blast it! Pardon me, sir, but couldn't we go after him? It's too dangerous with all the Sandpeople around. We'll have to wait until morning. Luke, I'm shutting the power down for the night. All right, I'll be there in a few minutes.</p><p>Well, anything would be better than just hanging around waiting for him to pick us up. Who do you think. What is it? I'm afraid I'm not quite sure, sir. He says I found her, and keeps repeating, She's here.</p><p>Before the dark times, before the Empire. How did my father die? A young Jedi named Darth Vader, who was a pupil of mine until he turned to evil, helped the Empire hunt down and destroy the Jedi Knights. He betrayed and murdered your father. Now the Jedi are all but extinct.</p><p>Uncle Owen! Aunt Beru! Uncle Owen! And, now Your Highness, we will discuss the location of your hidden Rebel base. There's nothing you could have done, Luke, had you been there. You'd have been killed, too, and the droids would be in the hands of the Empire. I want to come with you to Alderaan.</p><p>We are approaching the planet Yavin. The Rebel base is on a moon on the far side. We are preparing to orbit the planet. The battle station is heavily shielded and carries a firepower greater than half the star fleet.</p><p>Now, let's see if we can't figure out what you are, my little friend. And where you come from. I saw part of the message he was. I seem to have found it.</p>",
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
