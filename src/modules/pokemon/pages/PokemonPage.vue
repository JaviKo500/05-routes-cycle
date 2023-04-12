<template>
    <h1>PokemonPage: <span>#{{ id }}</span></h1>
    <div class="" v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :altAlt="pokemon.name">
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            // id: null
            pokemon: null
        }
    },
    created() {
        // console.log(this.$route);
        // const {id} = this.$route.params
        // this.id = id
        // console.log(id);
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json() )
                console.log(pokemon);
                this.pokemon = pokemon;
            } catch (error) {
                console.log(this.$router);
                this.$router.push('/');
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>