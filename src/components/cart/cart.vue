<template>
    <div class="cart">
        <b-table-simple
            hover
            responsive>
            <b-thead>
                <b-tr>
                    <b-th>Наименование товара и описание</b-th>
                    <b-th>Количество</b-th>
                    <b-th>Цена</b-th>
                    <b-th />
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr
                    v-for="product in cart"
                    :key="product.id"
                >
                    <b-td>{{ product.name }}</b-td>
                    <b-td>{{ product.count }}</b-td>
                    <b-td>{{ product.price }}</b-td>
                    <b-td>
                        <b-button variant="danger" @click.stop="removeProduct(product.id)">
                            <b-icon icon="X" />
                        </b-button>
                    </b-td>
                </b-tr>
            </b-tbody>
            <b-tfoot>
                <b-tr>
                    <b-td
                        colspan="7"
                        variant="secondary"
                        class="text-right">
                        Общая стоимость: <b>{{ productCost }} ₽</b>
                    </b-td>
                </b-tr>
            </b-tfoot>
        </b-table-simple>
    </div>
</template>

<style scoped lang="scss" src="./cart.scss"></style>
<script src="./cart.js"></script>
