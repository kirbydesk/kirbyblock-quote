<?php return [ 'blocks/pwquote' => function () {

    /* -------------- Config --------------*/
    $config   = pwConfig::load('pwquote');
    $settings = $config['settings'];
    $defaults = $config['defaults'];

		/* -------------- Tabs --------------*/
    $tabs = [];

		/* -------------- Content Tab --------------*/
		$contentFields = [
			'headlineContent' => ['extends' => 'pagewizard/headlines/content'],
		];

		/* -------------- Quote --------------*/
		$contentFields['textQuote'] = [
			'extends'     => 'pagewizard/fields/text-quote',
			'writerModes' => $defaults['writer-modes'] ?? ['textarea'],
		];
		/* -------------- Author --------------*/
		$contentFields['author'] = [
			'extends' => 'pagewizard/fields/author',
		];

		$tabs['content'] = [
			'label'  => 'pw.tab.content',
			'fields' => $contentFields,
		];

		/* -------------- Layout Tab --------------*/
		$tabs['layout'] = pwLayout::options('pwquote', $defaults);

		/* -------------- Style Tab --------------*/
		$tabs['style'] = pwStyle::options('pwquote', $defaults);

		/* -------------- Common Tabs (grid, spacing, theme) --------------*/
		pwConfig::buildTabs('pwquote', $defaults, $settings, $tabs);

		/* -------------- Settings Tab --------------*/
		$tabs['settings'] = pwSettings::options('pwquote', $defaults);

		/* -------------- Blueprint --------------*/
		return [
			'name'	=> 'kirbyblock-quote.name',
			'icon'  => 'quote',
			'tabs'	=> $tabs
		];
	}
];
