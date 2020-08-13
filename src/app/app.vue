<template>
    <div id="app" class="container">
        <b-card title="Укажи курс доллара" class="mb-4 mt-1">
            <div class="d-flex justify-content-between">
                <input v-model="course" type="text">
                <b-button variant="outline-secondary">
                    <b-icon icon="handbag-fill"/>
                </b-button>
            </div>
        </b-card>

        <div class="row">
            <div
                v-for="(group, key) in groups"
                :key="key"
                class="col-md-6 col-sm-12 col-xs-12 mb-3"
            >
                <b-card >
                    <template v-slot:header>
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0">{{ group.name }}</h4>
                            <b-button variant="outline-secondary" v-b-toggle="`part${ key }`">
                                <b-icon icon="chevron-down"/>
                            </b-button>
                        </div>
                    </template>

                    <b-collapse :id="`part${ key }`" visible>
                        <div
                            v-for="product in group.products"
                            :key="product.id"
                        >
                            <product-item v-model="product.value" />
                        </div>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
