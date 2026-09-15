<?php

// Config
$config   = pwConfig::load('pwquote');
$settings = $config['content'];

// Custom Background
pwSnippet::customCss($block);

// Section + Grid open
echo pwSnippet::sectionOpen('quote', $block, $settings);
echo pwSnippet::gridOpen($block);

// Quote
snippet('quote', ['content' => $block]);

// Close
echo pwSnippet::gridClose();
echo pwSnippet::sectionClose();
