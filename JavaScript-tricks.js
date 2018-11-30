// This file includes JavaScript and Jquery tricks I faced
<script>
{/* disabling a bootstrap modal to close in certain cases. */}
// bootstrap 3
$('#pushToGitModal').data('bs.modal').options.backdrop = 'static';
$('#pushToGitModal').data('bs.modal').options.keyboar = false;

// bootstrap 4
$('#pushToGitModal').data('bs.modal')._config.backdrop = 'static';
$('#pushToGitModal').data('bs.modal')._config.keyboar = false;



</script>
