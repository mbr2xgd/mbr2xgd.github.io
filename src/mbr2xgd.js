
/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/

//Class WebPage(corpo da página)... ------------------------------------------------------------
class WebPage{
	//Private links... ---------------------------
	#linkRocket = "https://mobjr.com?g=rocket";
	#linkRocket1 = "https://mobjr.com?g=rocket1";
	#linkBox = "https://mobjr.com?g=box";
	//Private links... ---------------------------
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
			"Link: <a href=\"media.html\" target=\"_top\">Links de test</a>";

		document.getElementById("home_desc").innerHTML = desc_t;

	}
	//descricao na home page... -------------------
	//links para os games test... -----------------
	media_games(){
		let desc_t = 
			"<h2>Link dos games (testing)...<br><br>" + 
			"Games: <a href=\"https://mobjr.com?g=box\" target=\"_top\">Demo Box</a><br>" + 
			"Games: <a href=\"https://mobjr.com?g=rocket\" target=\"_top\">Demo Rocket</a><br></h2>";

		document.getElementById("media_links").innerHTML = desc_t;
	}
	//links para os games test... -----------------
	//testando charset utf8... --------------------
	home_charset(){
		let charsetutf8 = 
		"<h3>testing word::nrm::atenção and word::int::aten&ccedil;&atilde;o</h3>";

		document.getElementById("home_text").innerHTML = charsetutf8;
	}
	//testando charset utf8... --------------------
	//video test(ogg)... --------------------------
	media_desc(){
		let mevideo = 
		"<video width=\"640\" height=\"480\" controls>" + 
		"	<source src=\"media/mbr2xgd.ogg\"> type=\"video/ogg\">" + 
		"	Your browser does not support the video tag..." +
		"</video>" + 
		"<p><a href=\"index.html\" target=\"_top\">Retornar a Home</a></p>";

		document.getElementById("media_video").innerHTML = mevideo;
	}
	//video test(ogg)... --------------------------
	//method... -----------------------------------
};
//Class WebPage(corpo da página)... ------------------------------------------------------------

/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/
