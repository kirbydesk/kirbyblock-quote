<?php return [ 'blocks/pwQuote' => function () {

    /* -------------- Block Defaults when not set in config.php --------------*/
    $defaults = [
      'heading' 					=> true,
      'tagline' 					=> true,
			'grid'							=> true,
			'grid-size-sm'   		=> 12,
			'grid-size-md'   		=> 12,
			'grid-size-lg'   		=> 12,
			'grid-size-xl'   		=> 12,
      'grid-offset-sm' 		=> 1,
      'grid-offset-md' 		=> 1,
      'grid-offset-lg' 		=> 1,
      'grid-offset-xl' 		=> 1,
    ];
		// Merge config with defaults
    $raw = option('kirbydesk.pagewizard.kirbyblocks.pwQuote', []);
    $cfg = array_merge($defaults, is_array($raw) ? $raw : []);

    /* -------------- Allowed Fields --------------*/
    $defaultHeading = !empty($cfg['heading']);
    $defaultTagline = !empty($cfg['tagline']);
		$defaultGrid = filter_var($cfg['grid'], FILTER_VALIDATE_BOOLEAN);

		/* -------------- Tabs --------------*/
    $tabs = [];

		$tabs['content'] = [
      'label'  => 'pw.tab.content',
      'fields' => [
				'headlineContent' => ['extends' => 'pagewizard/headlines/blockcontent'],
        'tagline' => [
          'extends' => 'pagewizard/fields/tagline',
          'when'    => ['toggleTagline' => true],
        ],
        'heading' => [
          'extends' => 'pagewizard/fields/heading',
          'when'    => ['toggleHeading' => true],
        ],
        'textQuote' => [
          'extends' => 'pagewizard/fields/text-quote'
        ],
        'author' => [
          'extends' => 'pagewizard/fields/author'
        ]
      ],
    ];

		$tabs['grid'] = pwGrid::layout('pwText', [
			'gridSizeSm'   => $defaults['grid-size-sm'],
			'gridOffsetSm' => $defaults['grid-offset-sm'],
			'gridSizeMd'   => $defaults['grid-size-md'],
			'gridOffsetMd' => $defaults['grid-offset-md'],
			'gridSizeLg'   => $defaults['grid-size-lg'],
			'gridOffsetLg' => $defaults['grid-offset-lg'],
			'gridSizeXl'   => $defaults['grid-size-xl'],
			'gridOffsetXl' => $defaults['grid-offset-xl'],
		]);

		$tabs['properties'] = [
      'label'  => 'pw.tab.properties',
      'fields' => [
				'headlineProperties' => ['extends' => 'pagewizard/headlines/blockproperties'],
        'fragment' => [
          'extends' => 'pagewizard/fields/fragment'
        ]
      ]
    ];

		$tabs['settings'] = [
      'label'  => 'pw.tab.settings',
      'fields' => [
        'headlineFieldsettings' => ['extends' => 'pagewizard/headlines/fieldsettings'],
        'toggleTagline' => [
          'extends' => 'pagewizard/fields/field-visibility',
          'label'   => 'pw.field.toggle.tagline',
          'default' => (bool)$defaultTagline,
          'help'    => 'The default setting for Tagline is: <code>' . ($defaultTagline ? t('pw.option.enabled') : t('pw.option.disabled')) . '</code>',
        ],
        'toggleHeading' => [
          'extends' => 'pagewizard/fields/field-visibility',
          'label'   => 'pw.field.toggle.heading',
          'default' => (bool)$defaultHeading,
          'help'    => t('pw.field.toggle.heading.help') . ' <code>' . ($defaultHeading ? t('pw.option.enabled') : t('pw.option.disabled')) . '</code>'
        ],
				'toggleGrid' => [
          'extends' => 'pagewizard/fields/field-visibility',
          'label'   => 'pw.field.toggle.grid',
          'default' => (bool)$defaultGrid,
          'help'    => t('pw.field.toggle.grid.help') . ' <code>' . ($defaultGrid ? t('pw.option.enabled') : t('pw.option.disabled')) . '</code>'
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