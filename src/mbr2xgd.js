
/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/

//Class WebPage(corpo da p�gina)... ------------------------------------------------------------
class WebPage{

	//begin... ------------------------------------
	constructor(){

		//Debug...--------------------
		console.log("Debug::class WebPage");
		//Debug...--------------------
	}
	//begin... ------------------------------------

	//method... -----------------------------------
	//debug... ------------------------------------
	test(){

		console.log("Done!");
	}
	//debug... ------------------------------------
	//descricao na home page... -------------------
	home_desc(){
		let desc_t  =
			"Meu nome &eacute; Milton, sou desenvolvedor C/C++, C#, Python, Lua<br>" + 
			"e desenvolvimento em Games usando Unreal, Unity e Blender<br>" + 
			"Link: <a href=\"media.html\" target=\"_top\">My Video</a>";

		document.getElementById("home_desc").innerHTML = desc_t;

	}
	//descricao na home page... -------------------
	//testando charset utf8... --------------------
	home_charset(){
		let charsetutf8 = 
		"<h3>testing word::nrm::aten��o and word::int::aten&ccedil;&atilde;o</h3>";

		document.getElementById("home_text").innerHTML = charsetutf8;
	}
	//testando charset utf8... --------------------
	//video test(ogg)... --------------------------
	media_desc(){
		let mevideo = 
		"<video width=\"320\" height=\"240\" controls>" + 
		"	<source src=\"media/mbr2xgd.ogg\"> type=\"video/ogg\">" + 
		"	Your browser does not support the video tag..." +
		"</video>" + 
		"<p><a href=\"index.html\" target=\"_top\">Home</a></p>";

		document.getElementById("media_video").innerHTML = mevideo;
	}
	//video test(ogg)... --------------------------
	//method... -----------------------------------
};
//Class WebPage(corpo da p�gina)... ------------------------------------------------------------


/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/
