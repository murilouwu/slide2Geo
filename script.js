function mudPage(btn, info, es, limit){
	let divs = [
		document.querySelector(info[0]),
		document.querySelector(info[1])
	];

	if(es[0] == 0){
		let fun = (es[1] + 1)>=limit? 0: es[1] + 1;
		divs[1].innerHTML = (fun + 1)+'/'+limit;
		var configWhile = [0, false];

		while(configWhile[1] == false){
			let id = info[2]+''+configWhile[0];
			let slide = document.querySelector(id);
			if(slide){
				if(configWhile[0] == fun){
					slide.style.display = 'flex';
				}else{
					slide.style.display = 'none';
				}
				configWhile[0]++;
			}else{
				configWhile[1] == true;
				break;
			}
		}
		let click = "mudPage(this, ['"+info[0]+"','"+info[1]+"','"+info[2]+"'], [ 0, "+fun+"], "+limit+")";
		btn.setAttribute('onclick', click);

		let click2 = "mudPage(this, ['#BtnProx','"+info[1]+"','"+info[2]+"'], [ 1, "+fun+"], "+limit+")";
		divs[0].setAttribute('onclick', click2);
	}else{
		
		let fun = (es[1] - 1)<0? 9: es[1] - 1;
		divs[1].innerHTML = (fun+1)+'/'+limit;
		var configWhile = [0, false];

		while(configWhile[1] == false){
			let id = info[2]+''+configWhile[0];
			let slide = document.querySelector(id);
			if(slide){
				if(configWhile[0] == fun){
					slide.style.display = 'flex';
				}else{
					slide.style.display = 'none';
				}
				configWhile[0]++;
			}else{
				configWhile[1] == true;
				break;
			}
		}
		let click = "mudPage(this, ['"+info[0]+"','"+info[1]+"','"+info[2]+"'], [ 1, "+fun+"], "+limit+")";
		btn.setAttribute('onclick', click);

		let click2 = "mudPage(this, ['#BtnAnt','"+info[1]+"','"+info[2]+"'], [ 0, "+fun+"], "+limit+")";
		divs[0].setAttribute('onclick', click2);
	}
}