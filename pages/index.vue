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
            <NuxtLink to="/login" class="bg-eng-700 shadow-md text-white text-lg font-medium rounded-lg px-6 py-2 whitespace-nowrap">S'inscrire</NuxtLink>
            <NuxtLink to="/register" class="bg-eng-300 shadow-md text-white text-lg font-medium rounded-lg px-6 py-2 whitespace-nowrap">Se connecter</NuxtLink>
          </div>
        </navbar>
      </header>

      <div class="h-[100vh] bg-yellow-600 mt-[500px]"></div>
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
