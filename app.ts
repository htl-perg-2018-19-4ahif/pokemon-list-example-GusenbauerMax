(async function() {
    const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

    let html = '';
    let counter: number = 1;
    for(const pokemon of pokelist.results) {
        //const pokemonDetails = await $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`);
        html += `<li><a>${pokemon.name}</a><button type="button" onclick="location.href='details.html?id=${pokemon.name}'">Click Me!</button></li>`
        counter++;
    }

    $('#pokemons')[0].innerHTML = html;
    
})();