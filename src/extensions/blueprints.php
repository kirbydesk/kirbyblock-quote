<?php return [ 'blocks/pwquote' => function () {

    /* -------------- Block Defaults when not set in config.php --------------*/
    $defaultsFile = __DIR__ . '/../config/defaults.json';
    $defaults = file_exists($defaultsFile)
      ? json_decode(file_get_contents($defaultsFile), true)
      : [];
		// Merge config with defaults
    $raw = option('kirbydesk.pagewizard.kirbyblocks.pwquote', []);
    $cfg = array_merge($defaults, is_array($raw) ? $raw : []);

    /* -------------- Allowed Fields --------------*/
		$defaultGrid = !empty($cfg['tab-grid']);
    $defaultSpacing = !empty($cfg['tab-spacing']);
		$defaultTheme = !empty($cfg['tab-theme']);

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

		/* -------------- Grid Tab --------------*/
		if ($defaultGrid) {
			$tabs['grid'] = pwGrid::layout('pwquote', [
				'gridSizeSm'   => $defaults['grid-size-sm'],
				'gridOffsetSm' => $defaults['grid-offset-sm'],
				'gridSizeMd'   => $defaults['grid-size-md'],
				'gridOffsetMd' => $defaults['grid-offset-md'],
				'gridSizeLg'   => $defaults['grid-size-lg'],
				'gridOffsetLg' => $defaults['grid-offset-lg'],
				'gridSizeXl'   => $defaults['grid-size-xl'],
				'gridOffsetXl' => $defaults['grid-offset-xl'],
			]);
		}

		/* -------------- Spacing Tab --------------*/
		if ($defaultSpacing) {
			$tabs['spacing'] = pwSpacing::options('pwquote', [
				'marginTop'    => $defaults['margin-top'],
				'marginBottom' => $defaults['margin-bottom'],
				'paddingTop'   => $defaults['padding-top'],
				'paddingBottom'=> $defaults['padding-bottom'],
			]);
		}

		/* -------------- Theme Tab --------------*/
		if ($defaultTheme) {
			$tabs['theme'] = pwTheme::options('pwquote', [
				'style' => $defaults['style'] ?? 'default',
			]);
		}

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
