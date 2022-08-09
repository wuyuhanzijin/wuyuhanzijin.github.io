var oldy = 0,tem = 0,fullheight = document.body.clientHeight;
			//			window.onscroll = function() {
			//				var y = document.documentElement.scrollTop || document.body.scrollTop;
			//				console.log('this is y' + y);
			//				if (y > oldy) {
			//					location.href = '#item-4';
			//					console.log('向下翻');
			//					oldy = y;
			//				} else if (y < oldy) {
			//					//		document.body.scrollTop-=fullheight;console.log('向上翻');oldy=y;
			//				} else {
			//					console.log('翻你妹啊');
			//					console.log('xiangdeng');
			//				}
			//
			//				console.log('this is oldy' + oldy);
			//			}
					var scrollFunc = function(e) {
							ee = e || window.event;
							var t1 = document.getElementById("wheelDelta");
							var t2 = document.getElementById("detail");
							var y = document.documentElement.scrollTop || document.body.scrollTop;
							var fullheight = document.body.offsetHeight;
							if (e.wheelDelta) { //IE/Opera/Chrome 
								var a = e.wheelDelta;//向上为120，向下为-120
								if(a>0){//向上	
								document.body.scrollTop -= fullheight/2;
								} 
								if(a<0){//向下
									document.body.scrollTop += fullheight/2;
								}
							} else if (e.detail) { //Firefox 
								var a = e.detail;//向上为-3，向下为3
								if(a<0){//向上	
								document.documentElement.scrollTop -= fullheight/2;
								} 
								if(a>0){//向下
									document.documentElement.scrollTop += fullheight/2;
								}
							}
							
							
							
							
						}
						
						/*注册事件*/
					if (document.addEventListener) {
						document.addEventListener('DOMMouseScroll', scrollFunc, false);
					} //W3C 
					window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome