// Styles
import "../../kirby-pagewizard/src/css/panel.css";

// Blocks
import pwQuote from "@/blocks/index.vue";

// Render
panel.plugin("kirbydesk/kirbyblock-quote", {
	blocks: {
		pwQuote: pwQuote
  }
});
