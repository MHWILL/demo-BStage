window.onload=function(){
    var oStar = document.getElementById("star_M");
	var aLi = oStar.getElementsByTagName("li");
	var oUl = oStar.getElementsByTagName("ul")[0];
	var oSpan = oStar.getElementsByTagName("span")[0];
	var oP = oStar.getElementsByTagName("p")[0];
	var i = iScore = iStar = 0;
	var aMsg = [
				"一般关注",
				"普通关注",
				"很关注",
				"非常关注",
				"特别关注"
				]
	
	for (i = 1; i <= aLi.length; i++){
		aLi[i - 1].index = i;
		//点击后进行评分处理
		aLi[i - 1].onclick = function (){
			fnPoint(this.index);
			iStar = this.index;
			oP.style.display = "none";
			oSpan.innerHTML = "<strong>" + aMsg[this.index - 1] + " </strong> " ;
		}
	}
	
	//评分处理
	function fnPoint(iArg){
		//分数赋值
		iScore = iArg || iStar;
		for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";	
	}
}