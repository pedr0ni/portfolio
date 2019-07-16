<template>
	<div class="complete">
		<m-preloader v-show="isLoading" />
		<div id="header-menu" @click="toggleMenu">
			<div class="bar" id="bar1"></div>
			<div class="bar" id="bar2"></div>
			<div class="bar" id="bar3"></div>
			<div id="menu-rows" class="menu-rows my-3">
				<h1>HOME</h1>
				<h1>PROJETOS</h1>
			</div>
		</div>
		<section id="home" class="flex-center" data-index="0">
			<img class="img-rounded" src="~@/assets/profile.jpg" />
			<h1 class="main-title my-2">Matheus Pedroni</h1>
			<p class="text-lead">Desenvolvedor front-end</p>
			<div class="flex-horizontal my-3">
				<img src="~@/assets/instagram.png" alt="Instagram" @click="toSocial('instagram')">
				<img src="~@/assets/twitter.png" alt="Twitter" @click="toSocial('twitter')">
				<img class="special" src="~@/assets/github.png" alt="Github" @click="toSocial('github')">
				<img src="~@/assets/linkedin.png" alt="LinkedIn" @click="toSocial('linkedin')">
				<img src="~@/assets/facebook.png" alt="Facebook" @click="toSocial('facebook')">
			</div>
		</section>
	</div>
</template>

<script>

export default {
	name: 'home',
	data () {
		return {
			isLoading: true,
			social: {
				'instagram': 'https://www.instagram.com/pedr0ni/',
				'twitter': 'https://twitter.com/pedr0ni_',
				'github': 'https://github.com/pedr0ni',
				'linkedin': 'https://www.linkedin.com/in/pedr0ni/',
				'facebook': 'https://www.facebook.com/pdrzeraa'
			}
		}
	},
	methods: {
		toSocial(name) {
			window.open(this.social[name], '_blank');
		},
		toggleMenu() {
			let allSections = document.getElementsByTagName('section');

			let bar1 = document.getElementById('bar1');
			let bar2 = document.getElementById('bar2');
			let bar3 = document.getElementById('bar3');
			let headerMenu = document.getElementById('header-menu');
			let menuRows = document.getElementById('menu-rows');

			if (headerMenu.classList.contains('active')) {
				bar1.style.width = '56px';
				bar1.style.transform = 'rotate(0)';
				bar2.style.opacity = '1';
				bar3.style.transform = 'rotate(0) translateY(0)';
				bar3.style.width = '18px';
				
			} else {
				bar1.style.width = '46px';
				bar1.style.transform = 'rotate(45deg)';
				bar2.style.opacity = '0';
				bar3.style.transform = 'translateY(11px) rotate(-45deg)';
				bar3.style.width = '46px';
			}

			headerMenu.classList.toggle('active');

			for (let i = 0; i < allSections.length; i++) {
				allSections[i].classList.toggle('blurred');
			}
		}
	},
	mounted() {
		setTimeout(() => {
			this.isLoading = false;
			let allSections = document.getElementsByTagName('section');
			allSections[0].classList.toggle('animated');
		}, 800);
	}
}
</script>
