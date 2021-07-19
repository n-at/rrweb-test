<template>
    <div class="card">
        <div class="card-body">
            <button v-if="!recording" type="button" class="btn btn-outline-danger" @click="start">
                <i class="fa fa-circle"></i> Start recording
            </button>
            <button v-else type="button" class="btn btn-outline-danger" @click="stop">
                <i class="fa fa-stop"></i> Stop recording
            </button>
            <button v-if="recordingAvailable" type="button" class="btn btn-outline-secondary ms-3" @click="copyRecording">
                <i class="fa fa-clipboard"></i> Copy recording to clipboard
            </button>
            <a v-if="recordingAvailable" href="player.html" target="_blank" class="btn btn-outline-secondary ms-3">
                <i class="fa fa-share"></i> Open player
            </a>
        </div>
    </div>
</template>

<script>
    import rrwebRecord from 'rrweb/lib/record/rrweb-record'

    export default {
        data() {
            return {
                recording: false,
                events: [],
                stopFunction: null,
            };
        },
        methods: {
            start() {
                var me = this;
                this.recording = true;
                this.events = [];
                this.stopFunction = rrwebRecord({
                    emit(event) {
                        me.events.push(event);
                    }
                });
            },
            stop() {
                this.recording = false;
                this.stopFunction();
            },
            copyRecording() {
                navigator.clipboard.writeText(JSON.stringify(this.events));
            },
        },
        computed: {
            recordingAvailable() {
                return this.recording === false && this.events.length > 0;
            },
        },
    };
</script>