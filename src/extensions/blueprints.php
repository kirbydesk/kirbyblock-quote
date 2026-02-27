<?php return [ 'blocks/pwquote' => function () {

	/* -------------- Config --------------*/
	$config      = pwConfig::load('pwquote');
	$settings    = $config['settings'];
	$tabSettings = $config['tabs'];
	$defaults    = $config['defaults'];
	$fields      = $config['fields'];

	/* -------------- Tabs --------------*/
	$tabs = [];

	/* -------------- Content Tab --------------*/
	$contentFields = [
		'headlineContent' => ['extends' => 'pagewizard/headlines/content'],
	];

	/* -------------- Quote --------------*/
	$contentFields['quote'] = [
		'extends'      => 'pagewizard/fields/quote',
		'align'        => $fields['align-quote'],
	];
	/* -------------- Author --------------*/
	$contentFields['author'] = [
		'extends' => 'pagewizard/fields/author',
		'align'   => $fields['align-author'],
	];

	$tabs['content'] = [
		'label'  => 'pw.tab.content',
		'fields' => $contentFields,
	];

	/* -------------- Layout Tab --------------*/
	pwConfig::addTab($tabs, 'layout', $tabSettings['layout'] ?? true, pwLayout::options('pwquote', $defaults));

	/* -------------- Style Tab --------------*/
	pwConfig::addTab($tabs, 'style', $tabSettings['style'] ?? true, pwStyle::options('pwquote', $defaults));

	/* -------------- Grid Tab --------------*/
	pwConfig::addTab($tabs, 'grid', $tabSettings['grid'] ?? false, pwGrid::layout('pwquote', $defaults));

	/* -------------- Settings Tab --------------*/
	pwConfig::addTab($tabs, 'settings', $tabSettings['settings'] ?? true, pwSettings::options('pwquote', $defaults));

	/* -------------- Blueprint --------------*/
	return [
		'name'	=> 'kirbyblock-quote.name',
		'icon'  => 'quote',
		'tabs'	=> $tabs
	];
}
];
