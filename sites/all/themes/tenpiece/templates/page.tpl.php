<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<?php print render($page['cart']); ?>


<div class="open-menu-wrapper">
  <div id="open-menu" class="hide">
        <?php
            $my_block = module_invoke('views', 'block_view', 'menu_store-block');
            print render($my_block['content']); 
          ?>
  </div>
</div>
<div class="menu-button">
  <span class="line1"></span>
  <span class="line2"></span>
  <span class="line3"></span>
</div>
    <div id="navigation" class="hide-mobile">

      <?php if ($main_menu): ?>
        <nav id="main-menu" role="navigation" tabindex="-1">
          <?php
          // This code snippet is hard to modify. We recommend turning off the
          // "Main menu" on your sub-theme's settings form, deleting this PHP
          // code block, and, instead, using the "Menu block" module.
          // @see https://drupal.org/project/menu_block
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
        </div>
  <header class="header" id="header" role="banner">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php print render($page['header']); ?>
      <?php endif; ?>
      <?php print render($page['navigation']); ?>
      <div class="shoping-icon top-icons">
          <?php
            $my_block = module_invoke('views', 'block_view', 'shopping_top_manu-block_1');
            print render($my_block['content']); 
          ?>
      </div>
      <?php
        global $user;
        if ( $user->uid ) { ?>
          <div class="user-menu-icon hide">
            <div class="man-icon top-icons">
              <div class="number-man-icon">
              <?php
                $my_block = module_invoke('views', 'block_view', 'tender_product-block_2');
                print render($my_block['content']); 
              ?>
              </div>
            </div>
            <div class="menu">
              <?php
                $my_block = module_invoke('views', 'block_view', 'menu_user-block');
                print render($my_block['content']); 
              ?>
              </div>
          </div>
      <?php } ?>

      
  </header>
  <?php if ($breadcrumb || render($page['filter'])): ?>

    <div class="gray-area-wrapper">
      <div class="gray-area">
        <?php print $breadcrumb; ?>
        <?php print render($page['filter']); ?>
       </div>
     </div>
    <?php endif ?>
<div id="page">



  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>

      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print render($page['content_bottom']); ?>
      <?php print $feed_icons; ?>
    </div>

 </div>

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

<div class="wrapper-footer">
  <?php print render($page['footer']); ?>
</div>
</div>
<div class="wrapper-bottom">
  <?php print render($page['bottom']); ?>
</div>

