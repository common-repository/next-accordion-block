<?php
/**
 * Fired during plugin updates
 *
 * @link       https://nextblocks.net/
 * @since      1.0.0
 *
 * @package    Next_Accordion_Block
 * @subpackage Next_Accordion_Block/includes
 */

// don't call the file directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Fired during plugin updates.
 *
 * This class defines all code necessary to run during the plugin's updates.
 */
class Next_Accordion_Block_Updates {

	/**
	 * DB updates that need to be run
	 *
	 * @var array
	 */
	private static $updates = array(
		// '1.0.1'  => 'updates/update-1.0.1.php',
	);

	/**
	 * Binding all events
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'plugins_loaded', array( $this, 'do_updates' ) );
	}

	/**
	 * Check if need any update
	 *
	 * @since 1.0.0
	 *
	 * @return boolean
	 */
	public function is_needs_update() {
		$installed_version = get_option( 'next_accordion_block_version' );
		$first_version     = get_option( 'next_accordion_block_first_version' );
		$activation_date   = get_option( 'next_accordion_block_activation_date' );

		if ( false === $installed_version ) {
			update_option( 'next_accordion_block_version', NEXT_ACCORDION_BLOCK_VERSION );
		}
		if ( false === $first_version ) {
			update_option( 'next_accordion_block_first_version', NEXT_ACCORDION_BLOCK_VERSION );
		}
		if ( false === $activation_date ) {
			update_option( 'next_accordion_block_activation_date', current_time( 'timestamp' ) );
		}

		if ( version_compare( $installed_version, NEXT_ACCORDION_BLOCK_VERSION, '<' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Do updates.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function do_updates() {
		$this->perform_updates();
	}

	/**
	 * Perform all updates
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function perform_updates() {
		if ( ! $this->is_needs_update() ) {
			return;
		}

		$installed_version = get_option( 'next_accordion_block_version' );

		foreach ( self::$updates as $version => $path ) {
			if ( version_compare( $installed_version, $version, '<' ) ) {
				include $path;
				update_option( 'next_accordion_block_version', $version );
			}
		}

		update_option( 'next_accordion_block_version', NEXT_ACCORDION_BLOCK_VERSION );

	}

}
new Next_Accordion_Block_Updates();
