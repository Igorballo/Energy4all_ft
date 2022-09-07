<template>
  <div>
    <div class="background-header relative bg-fixed bg-no-repeat h-[80vh] bg-center bg-cover w-full" >
      <header class="">
        <navbar class="flex bg-white border-b border-gray-300 mb-28 shadow-md">
          <div class="lg:w-7/9 w-full py-6">
            <div class="flex justify-center items-center mx-auto">
              <img src="~/assets/img/logo.png" class="w-28 h-full" alt="logo">
              <ul class="ml-10 inline-flex items-center gap-8 uppercase text-eng-500 text-lg font-semibold">
                <li>Accueil</li>
                <li>Ce que nous faisons</li>
                <li>Réalisations</li>
                <li>Actualités</li>
                <li>Kits solaires</li>
              </ul>
            </div>
          </div>
          <div class="lg:w-2/9 flex items-center gap-4 border-l border-gray-300 px-6 py-6">
            <NuxtLink to="/contact" class="text-lg font-semibold whitespace-nowrap text-eng-500">Contactez-nous</NuxtLink>
            <NuxtLink to="/login" class="bg-eng-700 shadow-md text-white text-lg font-medium rounded px-6 py-2 whitespace-nowrap">S'inscrire</NuxtLink>
            <NuxtLink to="/register" class="bg-eng-300 shadow-md text-white text-lg font-medium rounded px-6 py-2 whitespace-nowrap">Se connecter</NuxtLink>
          </div>
        </navbar>

      </header>

      <div class="bg-white px-6 pt-8 lg:px-16 mt-[400px] pb-64 font-eng">
        <div class="bg-eng-300 px-6 py-2 rounded flex justify-between items-center">
          <h1 class="text-xl text-white">Ce que nous faisons - Énergie industrie et ressources - <span class="font-medium">Énergie</span></h1>
          <button class="p-4 font-semibold text-lg bg-gradient-to-r from-yellow-500 to-yellow-400 rounded">Demandez un devis</button>
        </div>

        <div class="mt-10 mb-6">
          <h1 class="text-red-500 text-5xl font-extrabold camelcase">Ce que nous faisons</h1>
          <h2 class="text-xl mt-6">Nous développons des solutions d’ingénierie créatives, complètes et durables pour un avenir où les collectivités peuvent s’épanouir. Munis d’une profonde compréhension des complexités locales,
            de talents de renommée mondiale et d’un leadership proactif, nous planifions, concevons et gérons des projets qui auront un impact positif à long terme.</h2>
        </div>

        <div class="mt-10 mb-6">
          <h1 class="text-red-500 text-5xl font-extrabold camelcase">Energie Photovoltaîque</h1>
          <h2 class="text-xl mt-6"><strong>Energie4All</strong> aide les clients dans tous les secteurs d’activité à répondre à la demande croissante en énergie, à réduire leur consommation d’énergie et
            leurs émissions de gaz à effet de serre. Nous fournissons également des solutions énergétiques qui contribueront à la création d’un monde durable.</h2>
          <h2 class="text-xl mt-6">La conversion de lumière solaire en électricité suscite un intérêt grandissant, car elle pourrait représenter une solution à notre dépendance aux combustibles fossiles et donc favoriser la sécurité énergétique,
            réduire les émissions de carbone et autres émissions nocives contribuant aux changements climatiques, ainsi que stabiliser les coûts énergétiques en vue d’atteindre la durabilité sur les plans financier et environnemental.
            De plus, les projets d’énergie solaire s’exécutent plus facilement que les grandes initiatives hydroélectriques, nucléaires ou la plupart des initiatives thermiques. À l’échelle commerciale,
            ils facilitent l’approvisionnement en énergie pour répondre aux besoins des endroits sous-développés ou éloignés, où l’électricité est une denrée rare.</h2>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.background-header {
  background-image: url(../assets/img/header4.jpg);
}
</style>
