function atk4_version_check(id){
	$(function(){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + 1);
		var c_value="1; expires="+exdate.toUTCString();
		document.cookie=id + "_4.0.2=" + c_value;
	});
}
