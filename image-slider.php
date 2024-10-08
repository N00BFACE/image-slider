<?php
/**
 * Plugin Name:       Image Slider
 * Description:       Image Slider is a simple and easy to use WordPress block. It allows you to create beautiful sliders and add them to your website using a simple block.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       image-slider
 *
 * @package           image-slider
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function image_slider_image_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'image_slider_image_slider_block_init' );
