<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_imgs']);
    hide($content['group_more_details']);
    hide($content['field_product_status']);
    ?>
    <div class="left">
      <?php print render($content['field_imgs']); ?>
      <div class="similar-product">
      <?php 
        global $user;
        if ( $user->uid ) { ?>
       <a href="/node/<?php print $node->nid?>/clone/confirm">רוצה ליצור מוצר דומה?</a>
       <?php } ?>
      </div>
    </div>
    <div class="right">
      <?php
      print render($content);
      ?>
    </div>


</article>
  <div class="bottom-wrapper">
    <div class="bottom-content">
      <div class="bottom-right">
        <?php
        print render($content['group_more_details']);
        ?>
      </div>
      <?php if($content['field_product_status']['#items']['0']['value']==6):?>
        <div class="bottom-left">
          <?php
            $my_block = module_invoke('views', 'block_view', 'reviews_product_page-block');?>
            <h2 class="title-comment"><?php print render($my_block['subject']);?></h2>
            <?php print render($my_block['content']); 
          ?>
        </div>
      <?php endif; ?>
    </div>
  </div>