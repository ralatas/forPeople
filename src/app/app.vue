<template>
    <div id="app" class="container">
        <b-card title="Курс доллара от 20 до 80" class="mb-4 mt-1">
            <div class="d-flex justify-content-between align-items-center">
                <input-number
                    v-model="course"
                    :max="80"
                    :min="20"
                    placeholder="Курс доллара"
                />

                <b-dropdown
                    right
                    text="Right align"
                    variant="outline-secondary"
                    toggle-class="text-decoration-none"
                    no-caret
                >
                    <template v-slot:button-content>
                        <b-icon icon="handbag-fill"/>
                        {{ countProductsInCart || '' }}
                    </template>

                    <cart :groups="groups" />

                </b-dropdown>
            </div>
        </b-card>

        <div class="row">
            <div
                v-for="(group, keyGroup) in groups"
                :key="keyGroup"
                class="col-md-6 col-sm-12 col-xs-12 mb-3"
            >
                <b-card class='group-containt'>
                    <template v-slot:header>
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0">{{ group.name }}</h4>
                            <b-button variant="outline-secondary" v-b-toggle="`part${ keyGroup }`">
                                <b-icon icon="chevron-down"/>
                            </b-button>
                        </div>
                    </template>

                    <b-collapse :id="`part${ keyGroup }`" visible>
                        <div
                            v-for="(product, keyProduct) in group.products"
                            :key="product.id"
                            class="product-container"
                        >
                            <product-item
                                v-model="product.value"
                                @addInCart="addProductInCart(keyGroup, keyProduct)"
                            />
                        </div>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
