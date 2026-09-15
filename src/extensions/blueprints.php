<?php return [
	'blocks/pwquote' => pwBlueprint::main('pwquote', fn($cfg) => [
		'name' => 'kirbyblock-quote.name',
		'icon' => 'quote',
		'contentFields' => [
			'quote' => [
				'extends'      => 'pagewizard/fields/quote',
				'label'        => 'pw.field.quote',
				'placeholder'  => 'pw.field.quote.placeholder',
				'align'        => $cfg['fields']['align-quote'],
				'size'         => $cfg['fields']['size-quote'] ?? null,
				'sizeOptions'  => $cfg['field-options']['quote']['sizes'] ?? null,
				'alignOptions' => $cfg['field-options']['quote']['align'] ?? null,
			],
			'author' => [
				'extends' => 'pagewizard/fields/author',
				'align'   => $cfg['fields']['align-author'],
			],
		],
	]),
];
