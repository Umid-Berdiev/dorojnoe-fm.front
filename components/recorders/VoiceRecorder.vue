<script lang="ts" setup>
  import "flowbite";

  const recordingStatus = ref("Record Sound"),
    recording = ref(false),
    playing = ref(false),
    title = ref(""),
    recorder = ref(null),
    blob = ref(null),
    stream = ref(null);

  const cantSave = computed(() => {
    //check title and recording
    // if (title.value === "") return true;
    if (!blob.value) return true;
    return false;
  });

  // functions
  /*
    I handle recording, but also stopping during recording. 
    */
  async function record() {
    if (recording.value) {
      stream.value.getAudioTracks()[0].stop();
      recorder.value.finishRecording();
      recordingStatus.value = "Record Sound";
      recording.value = false;
      return;
    }

    console.log("begin record");

    const constraints = {
      audio: true,
      video: false,
    };

    stream.value = await navigator.mediaDevices.getUserMedia(constraints);

    const audioContext = new AudioContext();
    const input = audioContext.createMediaStreamSource(stream.value);

    let configs = {
      workerDir: "/js/web-audio-recorder/",
    };

    let _recorder = new WebAudioRecorder(input, configs);

    _recorder.setOptions({
      timeLimit: 30,
      encodeAfterRecord: true,
      ogg: { quality: 0.5 },
      mp3: { bitRate: 160 },
    });

    _recorder.onComplete = (_recorder, _blob) => {
      recordingStatus.value = "Record Sound";
      blob.value = _blob;
    };

    _recorder.startRecording();
    recorder.value = _recorder;
    recordingStatus.value = "Stop Recording";
    recording.value = true;
    blob.value = null;
    console.log("ok it worked");
  }

  function play() {
    if (playing.value) {
      playing.value = false;
    } else {
      playing.value = true;
      let player = new window.Audio();
      player.src = window.URL.createObjectURL(blob.value);
      player.play();
      console.log({ player });
    }
  }

  async function save() {
    console.log("save it");
    let sound = {
      // title: title.value,
      blob: blob.value,
    };
    // await this.$store.dispatch("saveSound", sound);
    // this.$router.push("/");
  }
</script>

<template>
  <div class="recorder-wrapper mt-9">
    <div class="inline-flex gap-2">
      <button
        class="border rounded-3xl bg-white flex items-center gap-2.5 h-8"
        @click="record"
        :disabled="playing"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
          <circle cx="14.5" cy="14.5" r="6.5" fill="white" />
        </svg>
        <p class="text-[8px] font-semibold uppercase mr-3">
          <span v-if="recording">Остановить запись</span>
          <span v-else>Запись</span>
        </p>
      </button>
      <button
        class="border rounded-full bg-white w-8 h-8 flex items-center justify-center"
        :disabled="!blob"
        @click="play"
      >
        <template v-if="playing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
          >
            <rect width="3.00003" height="11.0001" fill="#222222" />
            <rect x="6" width="3.00003" height="11.0001" fill="#222222" />
          </svg>
        </template>
        <template v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
          >
            <path
              d="M8.5 4.63397C9.16667 5.01888 9.16667 5.98113 8.5 6.36603L1.75 10.2631C1.08333 10.648 0.25 10.1669 0.25 9.39711L0.250001 1.60289C0.250001 0.833085 1.08333 0.35196 1.75 0.73686L8.5 4.63397Z"
              fill="black"
            />
          </svg>
        </template>
      </button>
      <button
        class="border rounded-full bg-white w-8 h-8 flex items-center justify-center"
        @click="save"
        :disabled="cantSave"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g clip-path="url(#clip0_776_46903)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.78334 1L3.7529 1C3.21875 0.999989 2.7729 0.99998 2.40867 1.02974C2.02878 1.06078 1.67213 1.12789 1.33487 1.29973C0.81742 1.56338 0.396724 1.98408 0.133072 2.50153C-0.0387719 2.83879 -0.105883 3.19544 -0.136921 3.57533C-0.16668 3.93956 -0.166671 4.38541 -0.16666 4.91956L-0.16666 4.95V9.63333L-0.16666 9.66377C-0.166671 10.1979 -0.16668 10.6438 -0.136921 11.008C-0.105883 11.3879 -0.0387719 11.7445 0.133072 12.0818C0.396724 12.5993 0.81742 13.0199 1.33487 13.2836C1.67213 13.4554 2.02878 13.5226 2.40867 13.5536C2.77289 13.5834 3.21872 13.5833 3.75284 13.5833H3.75289H3.78334H10.2167H10.2471H10.2472C10.7813 13.5833 11.2271 13.5834 11.5913 13.5536C11.9712 13.5226 12.3279 13.4554 12.6651 13.2836C13.1826 13.0199 13.6033 12.5993 13.8669 12.0818C14.0388 11.7445 14.1059 11.3879 14.1369 11.008C14.1667 10.6438 14.1667 10.198 14.1667 9.66383V9.66379V9.63333V6.7V6.66955V6.66951C14.1667 6.13538 14.1667 5.68955 14.1369 5.32533C14.1059 4.94545 14.0388 4.58879 13.8669 4.25153C13.6033 3.73408 13.1826 3.31338 12.6651 3.04973C12.3279 2.87789 11.9712 2.81078 11.5913 2.77974C11.2271 2.74998 10.7813 2.74999 10.2471 2.75L10.2167 2.75H8.05163C7.6454 2.75 7.26605 2.54698 7.04071 2.20897C6.53718 1.45367 5.68948 1 4.78172 1H3.78334ZM4.78172 2.5C5.18795 2.5 5.5673 2.70302 5.79264 3.04103C6.29617 3.79633 7.14387 4.25 8.05163 4.25H10.2167C10.7891 4.25 11.1733 4.25058 11.4692 4.27476C11.7563 4.29822 11.8936 4.3401 11.9842 4.38624C12.2194 4.50608 12.4106 4.69731 12.5304 4.93251C12.5766 5.02307 12.6185 5.16035 12.6419 5.44748C12.6661 5.74336 12.6667 6.12757 12.6667 6.7V9.63333C12.6667 10.2058 12.6661 10.59 12.6419 10.8859C12.6185 11.173 12.5766 11.3103 12.5304 11.4008C12.4106 11.636 12.2194 11.8272 11.9842 11.9471C11.8936 11.9932 11.7563 12.0351 11.4692 12.0586C11.1733 12.0827 10.7891 12.0833 10.2167 12.0833H3.78334C3.21091 12.0833 2.8267 12.0827 2.53082 12.0586C2.24369 12.0351 2.10641 11.9932 2.01585 11.9471C1.78065 11.8272 1.58942 11.636 1.46958 11.4008C1.42344 11.3103 1.38156 11.173 1.3581 10.8859C1.33392 10.59 1.33334 10.2058 1.33334 9.63333V4.95C1.33334 4.37757 1.33392 3.99336 1.3581 3.69748C1.38156 3.41035 1.42344 3.27307 1.46958 3.18251C1.58942 2.94731 1.78065 2.75608 2.01585 2.63624C2.10641 2.5901 2.24369 2.54822 2.53082 2.52476C2.8267 2.50058 3.21091 2.5 3.78334 2.5H4.78172ZM7.74999 6.41667C7.74999 6.00245 7.4142 5.66667 6.99999 5.66667C6.58578 5.66667 6.24999 6.00245 6.24999 6.41667V7.41666H5.25001C4.83579 7.41666 4.50001 7.75245 4.50001 8.16666C4.50001 8.58088 4.83579 8.91666 5.25001 8.91666H6.24999V9.91667C6.24999 10.3309 6.58578 10.6667 6.99999 10.6667C7.4142 10.6667 7.74999 10.3309 7.74999 9.91667V8.91666H8.75001C9.16422 8.91666 9.50001 8.58088 9.50001 8.16666C9.50001 7.75245 9.16422 7.41666 8.75001 7.41666H7.74999V6.41667Z"
              fill="#222222"
            />
          </g>
          <defs>
            <clipPath id="clip0_776_46903">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <VolumeButton class="order-1 lg:order-last ml-auto lg:ml-0" />
    <div class="inline-flex gap-4 items-center order-last lg:order-1">
      <!-- <div class="bg-gainsboro-200 w-64 lg:w-60 h-px" /> -->
      <input
        id="small-range"
        type="range"
        value="0"
        class="w-64 lg:w-60 h-1 bg-gainsboro-200 rounded-lg cursor-pointer range-sm accent-black"
      />
      <p class="text-base font-medium">0.00</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .recorder-wrapper {
    @apply flex items-center gap-8 flex-wrap;

    button {
      @apply disabled:cursor-not-allowed;
    }

    // input[type="range"]::-webkit-slider-thumb {
    //   width: 10px;
    //   height: 10px;
    //   background: black;
    //   -webkit-appearance: none;
    //   cursor: pointer;
    // }

    // input[type="range"]::-moz-range-thumb {
    //   width: 10px;
    //   height: 10px;
    //   background: black;
    //   border-radius: 9999px;
    //   border: 0;
    //   appearance: none;
    //   -moz-appearance: none;
    //   -webkit-appearance: none;
    //   cursor: pointer;
    // }

    // /** Chrome*/
    // input[type="range"]::-webkit-slider-progress {
    //   @apply bg-black;
    // }
    // input[type="range"]::-webkit-slider-track {
    //   @apply bg-gainsboro-200;
    // }
    // /** FF*/
    // input[type="range"]::-moz-range-progress {
    //   @apply bg-black;
    // }
    // input[type="range"]::-moz-range-track {
    //   @apply bg-gainsboro-200;
    // }
    // /* IE*/
    // input[type="range"]::-ms-fill-lower {
    //   @apply bg-black;
    // }
    // input[type="range"]::-ms-fill-upper {
    //   @apply bg-gainsboro-200;
    // }
  }
</style>
