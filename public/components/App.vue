<template>
    <div class="container">
        <h1>rrweb test</h1>
        <p>Hello, world!</p>

        <AppTable/>

        <fieldset>
            <legend>Original controls</legend>
            <div class="mb-3">
                <label for="original-text" class="form-label">Original text</label>
                <input type="text" id="original-text" name="original-text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="original-text-datalist" class="form-label">Original text with datalist</label>
                <input type="text" id="original-text-datalist" name="original-text-datalist" list="datalist" class="form-control">
                <datalist id="datalist">
                    <option v-for="value in dataListValues" :value="value"/>
                </datalist>
            </div>
            <div class="mb-3">
                <label for="original-select" class="form-label">Original select</label>
                <select id="original-select" name="original-select" class="form-select">
                    <option v-for="(value, index) in selectValues" :value="index">{{value}}</option>
                </select>
            </div>
        </fieldset>
        <fieldset>
            <legend>Floating label controls</legend>
            <div class="form-floating mb-3">
                <input type="text" id="floating-text" name="floating-text" class="form-control" placeholder="placeholder">
                <label for="floating-text" class="form-label">Floating text</label>
            </div>
            <div class="form-floating mb-3">
                <textarea id="floating-textarea" name="floating-textarea" class="form-control" placeholder="placeholder" style="height: 150px"></textarea>
                <label for="floating-textarea" class="form-label">Floating textarea</label>
            </div>
            <div class="form-floating mb-3">
                <select id="floating-select" name="floating-select" class="form-select">
                    <option v-for="(value, index) in selectValues" :value="index">{{value}}</option>
                </select>
                <label for="floating-select" class="form-label">Floating select</label>
            </div>
        </fieldset>
        <fieldset>
            <legend>Check and radio</legend>
            <div class="form-check mb-1">
                <input type="checkbox" id="check-1" name="check" value="1" class="form-check-input">
                <label for="check-1" class="form-check-label">Check 1</label>
            </div>
            <div class="form-check mb-1">
                <input type="checkbox" id="check-2" name="check" value="2" class="form-check-input">
                <label for="check-2" class="form-check-label">Check 2</label>
            </div>
            <div class="form-check mb-1">
                <input type="radio" id="radio-1" name="radio" value="1" class="form-check-input">
                <label for="radio-1" class="form-check-label">Radio 1</label>
            </div>
            <div class="form-check mb-1">
                <input type="radio" id="radio-2" name="radio" value="2" class="form-check-input">
                <label for="radio-2" class="form-check-label">Radio 2</label>
            </div>
            <div class="form-check form-switch mb-1">
                <input type="checkbox" id="switch-1" name="switch" value="1" class="form-check-input">
                <label for="switch-1" class="form-check-label">Switch</label>
            </div>
        </fieldset>
        <fieldset>
            <legend>Range</legend>
            <div class="mb-3">
                <label for="range" class="form-label">Range</label>
                <span class="badge rounded-pill bg-primary">{{rangeValue}}</span>
                <input type="range" id="range" name="range" class="form-range" min="0" max="100" v-model="rangeValue">
            </div>
        </fieldset>
        <fieldset>
            <legend>Collapse</legend>
            <div class="mb-3">
                <a href="#collapse" class="btn btn-primary" data-bs-toggle="collapse">Toggle collapse</a>
            </div>
            <div class="collapse" id="collapse">
                <div class="card card-body">
                    Collapsible text
                </div>
            </div>
        </fieldset>
    </div>
</template>

<script>
    import AppTable from './Table.vue'

    export default {
        components: {
            AppTable,
        },
        data() {
            return {
                dataListValues: ['First', 'Second', 'Third'],
                selectValues: ['First', 'Second', 'Third'],
                rangeValue: 42,
            };
        },
    };
</script>

<style>

</style>
