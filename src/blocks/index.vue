<template>
	<div
		class="pwPreview"
		data-kirbyblock="quote"
		@dblclick="open"
		:style="colorVars"
		:data-margintop="content.margintop === true ? 'true' : null"
		:data-marginbottom="content.marginbottom === true ? 'true' : null"
		>

		<pwBlockinfo
			:value="$t('kirbyblock-quote.name')"
			icon="quote"
		/>

		<div class="pwGrid">
			<div
				class="pwGridItem"
				:style="gridVars"
				:data-paddingtop="content.paddingtop || defaults['padding-top'] || null"
				:data-paddingright="(content.paddingright !== undefined ? content.paddingright : defaults['padding-right']) === true ? 'true' : null"
				:data-paddingbottom="content.paddingbottom || defaults['padding-bottom'] || null"
				:data-paddingleft="(content.paddingleft !== undefined ? content.paddingleft : defaults['padding-left']) === true ? 'true' : null"
				>

				<div class="contents">

					<!-- Quote -->
					<pwQuote
						:quote="content.quote"
						:author="content.author"
						:alignQuoteDefault="fieldDefaults['align-quote']"
						:alignAuthorDefault="fieldDefaults['align-author']"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pwBlockinfo from '@/../../kirby-pagewizard/src/components/blockinfo.vue';
import pwQuote from '@/../../kirby-pagewizard/src/components/quote.vue';
import pwGridStyle from '@/../../kirby-pagewizard/src/mixins/gridStyle.js';
import pwColorStyle from '@/../../kirby-pagewizard/src/mixins/colorStyle.js';

export default {
	components: {
		pwBlockinfo,
		pwQuote
	},
	mixins: [pwGridStyle, pwColorStyle],
	data() {
		return {
			fieldDefaults: {},
			defaults: {}
		}
	},
	async created() {
		try {
			const response = await this.$api.get('pagewizard/settings/pwquote');
			this.fieldDefaults = response.fields || {};
			this.defaults = response.defaults || {};
		} catch (e) {}
	}
}
</script>