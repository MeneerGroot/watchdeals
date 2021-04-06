var formShown = false;

$(function(){
	$('form.inline, form.box').each(function(){
		$(this).submit(function(event){
			event.preventDefault();

			form = $(this);

			valid = true;
			form.find(':input').each(function(){
				if ($(this).data('required') && !$(this).val())
					valid = false;
			});
      
			if (valid){
				form.find('[type="submit"]').attr('disabled',true);
				if (form.find(':file').length && $.ajaxSettings.xhr().upload){
					formData = new FormData(form[0]);
					formData.append('URL',location.protocol + "//" + location.hostname + location.pathname);
					$.ajax({
						url: 'https://schapi.schaapcitroen.nl/send/' + form.attr('id'),
						type: 'POST',
						xhr: function(){
							return $.ajaxSettings.xhr();
						},
						data: formData,
						cache: false,
						contentType: false,
						processData: false,
						success: function(data){
							form.html(data);
						}
					});
				} else {
					$.post (
						'https://schapi.schaapcitroen.nl/send/' + form.attr('id'),
						"URL=" + location.protocol + "//" + location.hostname + location.pathname + "&" + form.serialize(),
						function(data){
							form.html(data);
						}
					);
				}
			} else {
				alert ('Gelieve alle verplichte velden (correct) in te vullen');
			}
		});
	});

	$('.formClose').click(function(){
		$('#formBox, form.box').css('display','none');
		formShown = false;
	});
});

function formBox(id,width){
	if (formShown)
		return false;
	if ($('#' + id).data('html'))
		$('#' + id).html($('#' + id).data('html'));
	else
		$('#' + id).data('html',$('#' + id).html());
	$('#' + id).css('max-width',width);
	$('#' + id).css('left',Math.max(0,($(document).width() - width) / 2));
	$('#' + id).css('top',$(document).scrollTop() + 50);
	$('#formBox, #' + id).css('display','block');
	formShown = true;
}