
/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/

//Class WebPage(corpo da página)... ------------------------------------------------------------
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
			"Meu nome é Milton, sou desenvolvedor C/C++, C#, Python, Lua<br>" + 
			"e desenvolvimento em Games usando Unreal, Unity e Blender";

		document.getElementById("home_desc").innerHTML = desc_t;

	}
	//descricao na home page... -------------------
	//method... -----------------------------------
};
//Class WebPage(corpo da página)... ------------------------------------------------------------


/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/
