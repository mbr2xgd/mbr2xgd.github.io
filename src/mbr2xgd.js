
/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/

class WebPage{

	constructor(){

		//Debug...--------------------
		console.log("Debug::class WebPage");
		//Debug...--------------------
	}

	test(){

		console.log("Done!");
	}

	home_desc(){
		let desc_t  =
			"Meu nome é Milton, sou desenvolvedor C/C++, C#, Python, Lua<br>" + 
			"e desenvolvimento em Games usando Unreal, Unity e Blender";

		document.getElementById("home_desc").innerHTML = desc_t;

	}

		

};


/*file: mbr2xgd.js -----------------------------------------------------------------------------------------------------*/
