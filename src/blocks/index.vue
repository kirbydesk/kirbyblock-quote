<template>
	<div class="pwPreview" data-kirbyblock="quote" @dblclick="open">

		<pwBlockinfo
			:value="$t('kirbyblock-quote.name')"
			icon="quote"
		/>

		<div class="pwGrid">
			<div class="pwGridItem" :style="gridVars">

				<!-- Tagline -->
				<pwTagline v-if="content.toggletagline" :value="content.tagline" />

				<!-- Heading -->
				<pwHeading v-if="content.toggleheading" :value="content.heading" :data-level="content.level" />

				<!-- Quote -->
				<pwQuote :quote="content.textquote" :author="content.author" />

			</div>
		</div>
	</div>
</template>

<script>
import pwBlockinfo from '@/../../kirby-pagewizard/src/components/blockinfo.vue'
import pwTagline from '@/../../kirby-pagewizard/src/components/tagline.vue'
import pwHeading from '@/../../kirby-pagewizard/src/components/heading.vue'
import pwQuote from '@/../../kirby-pagewizard/src/components/quote.vue'
import pwToggleGridTab from '@/../../kirby-pagewizard/src/mixins/toggleGridTab.js';
import pwGridStyle from '@/../../kirby-pagewizard/src/mixins/gridStyle.js';

export default {
	components: {
		pwBlockinfo,
		pwTagline,
		pwHeading,
		pwQuote
	},
	mixins: [pwToggleGridTab, pwGridStyle],
}
</script>