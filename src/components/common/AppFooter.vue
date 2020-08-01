<template>
	<div class="footer">
		<ul>
			<li><a href="#">about pcs</a></li>
			<li><a href="#">개인정보보호</a></li>
			<li><a href="#">광고문의</a></li>
			<li><a href="#">Contact</a></li>
			<li><a href="#">Facebook</a></li>
			<li><a href="#">Github</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AppFooter',
};
</script>

<style lang="scss" scoped>
// Footer
.footer {
	padding: 20px 0;
	// align-items: flex-end;
	border-top: 1px solid $gray-scale-2;

	ul {
		display: flex;
		li {
			margin: 0 5px;
			a {
				color: $gray-scale-6;
			}
		}
	}
}
</style>
