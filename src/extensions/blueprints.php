<?php return [ 'blocks/pwquote' => function () {

    /* -------------- Config --------------*/
    $config   = pwConfig::load('pwquote', __DIR__ . '/../config');
    $settings = $config['settings'];
    $defaults = $config['defaults'];

		/* -------------- Tabs --------------*/
    $tabs = [];

		/* -------------- Content Tab --------------*/
		$contentFields = [
			'headlineContent' => ['extends' => 'pagewizard/headlines/blockcontent'],
		];

		/* -------------- Quote --------------*/
		$contentFields['textQuote'] = [
			'extends' => 'pagewizard/fields/text-quote',
		];
		/* -------------- Author --------------*/
		$contentFields['author'] = [
			'extends' => 'pagewizard/fields/author',
		];

		$tabs['content'] = [
			'label'  => 'pw.tab.content',
			'fields' => $contentFields,
		];

		/* -------------- Common Tabs (grid, spacing, theme) --------------*/
		pwConfig::buildTabs('pwquote', $defaults, $settings, $tabs);

		/* -------------- Properties Tab --------------*/
		$tabs['properties'] = [
			'label'  => 'pw.tab.properties',
			'fields' => [
				'headlineProperties' => ['extends' => 'pagewizard/headlines/blockproperties'],
				'fragment' => [
					'extends' => 'pagewizard/fields/fragment'
				]
			]
		];

		/* -------------- Blueprint --------------*/
		return [
			'name'	=> 'kirbyblock-quote.name',
			'icon'  => 'quote',
			'tabs'	=> $tabs
		];
	}
];
