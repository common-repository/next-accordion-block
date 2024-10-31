<?php
/**
 * Plugin Name:       Next Accordion
 * Plugin URI:        https://nextblocks.net/next-accordion/
 * Description:       A simple Accordion Block for Gutenberg for adding beautiful accordion sections or pages to your posts, pages, or widgets.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            NextBlocks
 * Author URI:        https://nextblocks.net/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Domain Path:       /languages
 * Text Domain:       next-accordion-block
 *
 * @package           Next_Accordion_Block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/**
 * Define constants
 */
define( 'NEXT_ACCORDION_BLOCK_VERSION', '1.0.0' );
define( 'NEXT_ACCORDION_BLOCK_URL', plugin_dir_url( __FILE__ ) );
define( 'NEXT_ACCORDION_BLOCK_PATH', plugin_dir_path( __FILE__ ) );
define( 'NEXT_ACCORDION_BLOCK_INCLUDES', NEXT_ACCORDION_BLOCK_PATH . '/includes' );

/**
 * Included required files.
 *
 * @return void
 */
require_once NEXT_ACCORDION_BLOCK_INCLUDES . '/updates.php';

/**
 * Blocks Initialization
 */
function next_accordion_block_init() {
	// register single block.
	next_accordion_block_register( 'accordion' );
	next_accordion_block_register( 'accordion-item' );
}
add_action( 'init', 'next_accordion_block_init' );

/**
 * Enqueue block assets
 *
 * @return void
 */
function next_accordion_block_assets() {
	// Enqueue styles.
	wp_enqueue_style(
		'next-accordion-font-awesome-css',
		NEXT_ACCORDION_BLOCK_URL . 'assets/css/font-awesome.min.css',
		array(),
		NEXT_ACCORDION_BLOCK_VERSION,
		'all'
	);
	wp_enqueue_style(
		'next-accordion-css',
		NEXT_ACCORDION_BLOCK_URL . 'assets/css/accordion.css',
		array(),
		NEXT_ACCORDION_BLOCK_VERSION,
		'all'
	);

	// Enqueue scripts.
	wp_enqueue_script(
		'next-accordion-custom-collapse-js',
		NEXT_ACCORDION_BLOCK_URL . 'assets/js/custom-collapse.js',
		array(),
		NEXT_ACCORDION_BLOCK_VERSION,
		true
	);
	wp_enqueue_script(
		'next-accordion-script-js',
		NEXT_ACCORDION_BLOCK_URL . 'assets/js/script.js',
		array(),
		NEXT_ACCORDION_BLOCK_VERSION,
		true
	);
}
add_action( 'enqueue_block_assets', 'next_accordion_block_assets' );

/**
 * Block register
 *
 * @param string $name block name.
 * @param array  $options block data.
 * @return void
 */
function next_accordion_block_register( $name, $options = array() ) {

	register_block_type( __DIR__ . '/build/' . $name, $options );
}

/**
 * Register Block Category
 *
 * @param array  $categories Block categories.
 * @param object $post Block Post.
 */
if ( ! function_exists( 'next_block_register_block_category' ) ) {
	function next_block_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'next-blocks',
					'title' => __( 'NextBlocks', 'next-accordion-block' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Blocks category.
	 */
	if ( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
		add_filter( 'block_categories', 'next_block_register_block_category', 10, 2 );
	} else {
		add_filter( 'block_categories_all', 'next_block_register_block_category', 10, 2 );
	}
}
