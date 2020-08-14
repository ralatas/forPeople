<template>
    <b-form @submit="editProduct" class="editProduct">
        <div class="data">
            <div
                v-if="!edit"
                class="text"
                :class="value.priceChange"
            >
                <div class="name">
                    {{ value.name }} <span>({{ value.count }} шт.)</span>
                </div>
                <div class="price">
                    <b>{{ value.price }} ₽</b>
                </div>
            </div>

            <div v-if="edit" class="edit-container">
                <b-row class="my-1">
                    <b-col sm="3">
                        <label>Название</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input
                            v-model="form.name"
                            required
                            type="text"
                            :placeholder="value.name"
                        />
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">
                        <label>Кол-во</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input
                            v-model="form.count"
                            required
                            type="text"
                            :placeholder="`${value.count}`"
                        />
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">
                        <label>Цена</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input
                            v-model="form.price"
                            required
                            type="text"
                            :placeholder="`${value.price}`"
                        />
                    </b-col>
                </b-row>
            </div>
        </div>

        <b-button-group vertical>
            <b-button
                v-if="edit"
                variant="success"
                type="submit"
            >
                <b-icon icon="check2"/>
            </b-button>

            <b-button
                variant="warning"
                @click="toogle"
            >
                <b-icon :icon="edit ? 'X' : 'pencil'" />
            </b-button>

            <b-button
                variant="outline-primary"
                @click="addInCart"
            >
                <b-icon icon="bag-plus" />
            </b-button>
        </b-button-group>
    </b-form>
</template>

<style src="./product-item.scss" lang="scss" scoped></style>
<script src="./product-item.js"></script>
