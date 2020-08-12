<template>
    <div id="app">
        <input v-model="course" type="text">
        <div
            v-for="(group, key) in groups"
            :key="key"
        >
            <div>{{ group.name }}</div>
            <ul>
                <li
                    v-for="product in group.products"
                    :key="product.id"
                >
                    {{ product }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
