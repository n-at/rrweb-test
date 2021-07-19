<template>
    <div class="container">
        <h1>rrweb test</h1>

        <p>
            This is simple demo of recording user sessions with
            <a href="https://www.rrweb.io/" target="_blank">rrweb</a>.
        </p>
        <ol>
            <li>Click "Start recording"</li>
            <li>Make some changes in form below</li>
            <li>Click "Stop recording" when done</li>
            <li>Click "Copy recording to clipboard"</li>
            <li>Open player</li>
            <li>Paste copied text</li>
            <li>Click "Play"</li>
        </ol>

        <AppRecorder/>
        <AppTable/>
        <AppForm/>
    </div>
</template>

<script>
    import AppTable from './Table.vue'
    import AppForm from './Form.vue'
    import AppRecorder from './Recorder.vue'

    export default {
        components: {
            AppTable,
            AppForm,
            AppRecorder,
        },
    };
</script>
