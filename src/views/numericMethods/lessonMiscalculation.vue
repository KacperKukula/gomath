<template>
    <section class="lession">
        <!-- Title -->
        <h2>Błędy zaokrągleń</h2>

        <!-- List -->
        <lessionList>
            <p>
                Do źródeł błędów zaliczamy:
            </p>
            <ul>
                <li>Błędy danych wejściowych (np. gdy wykorzystujemy danezaokrąglone).</li>
                <li>Błędy obcięcia (np. ograniczenie szeregu nieskończonego do skończonej liczby składników).</li>
                <li>Błędy zaokrągleń.</li>
                <li>Uproszczenie modelu matematycznego.</li>
                <li>Błędy programisty.</li>
            </ul>
        </lessionList>
    </section>
</template>

<script>
import lessionList from '@/components/lessions/lessionList.vue'

export default {
    components: {
        lessionList
    }
}
</script>

<style scoped lang="scss">
.lession {
    background-color: red;
}
</style>