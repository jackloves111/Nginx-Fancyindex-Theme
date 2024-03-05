var updateIcons = function(){
	var trs = document.getElementsByTagName('tr');
	var iconHTML = '<svg class="icon" aria-hidden="true"><use xlink:href=""></use></svg>';
	$('tr').each(function(idx, val){
	    var td = $(this).children('td');
	    if(td.length >= 1){
		td = td.eq(0);
	        let a = td.children('a').eq(0);
        	let filename = a.attr('href').split('?')[0];
        	let ext = '';
        	if (/\/$/.test(filename)) {
        	    ext = 'icon-folder'
        	} else if (/\.(zip|7z|bz2|gz|tar|tgz|tbz2|cab|rar)$/.test(filename)) {
        	    ext = 'icon-file-zip'
        	} else if (/\.(jpg|png|bmp|gif|ico|webp)$/.test(filename)) {
        	    ext = 'icon-file-image'
        	} else if (/\.(flv|mp4|mkv|avi|mkv|rmvb|wmv)$/.test(filename)) {
        	    ext = 'icon-file-video'
        	} else if (/\.(doc|docx|)$/.test(filename)) {
        	    ext = 'icon-file-doc'
        	} else if (/\.(torrent)$/.test(filename)) {
        	    ext = 'icon-file-bt'
        	} else if (/\.(txt|md)$/.test(filename)) {
        	    ext = 'icon-file-txt'
        	} else if (/\.(mp3|wma|wav|ogg|ape|acc|m4a)$/.test(filename)) {
        	    ext = 'icon-file-music'
        	} else if (/\.(srt|ass|ssa)$/.test(filename)) {
        	    ext = 'icon-file-subtitles'
        	} else if (/\.(py|json|xml|js|php|h|aria2)$/.test(filename)) {
        	    ext = 'icon-file-code'
        	} else if (/\.(nfo)$/.test(filename)) {
        	    ext = 'icon-file-info'
        	} else if (/\.(pdf)$/.test(filename)) {
		    ext = 'icon-file-pdf'
        	} else if (/\.(ppt|pptx)$/.test(filename)) {
		   ext = 'icon-file-ppt' 
        	} else if (/\.(xls|xlsx)$/.test(filename)) {
		   ext = 'icon-file-excel'
        	} else if (/\.(part)$/.test(filename)) {
		   ext = 'icon-file-bin'
        	} else {
        	    ext = 'icon-file-unknown'
       		}

        	$svg = $(iconHTML);
        	$svg.children('use').attr('xlink:href', '#'+ext);
        	td.prepend($svg);
    	}
	})
}
$(document).ready(function(){
	updateIcons();
});