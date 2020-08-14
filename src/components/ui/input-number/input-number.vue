<template>
    <div class="input">
        <b-form-input
            number
            :type="integer ? 'number' : 'text'"
            :value="count"
            :required="required"
            :state="error"
            @input="changeQuantity"
            @blur="onBlur"
            @keypress.native="filterInput($event)"
            :placeholder="placeholder"
        />
        <b-form-text v-if="error === false">
            Введите кол-во от {{ min }} до {{ max }}
        </b-form-text>
    </div>
</template>

<script src="./input-number.js"></script>
<style lang="scss" src="./input-number.scss"></style>
