$(document).ready(function () {
    //博文图片蒙版的出现与消失
    $(".topicShow").on("mouseenter",".topic-item",function(){
        $(this).find(".hover").css("display","none");
    });
    $(".topicShow").on("mouseleave",".topic-item",function(){
        $(this).find(".hover").css("display","inherit");
    });
    var siteurl = $("#siteurl").val();
    var authorpath = "/authors.json";
    var authors = "";
    $.ajaxSettings.async = false; //设置getJson同步
    $.getJSON(authorpath,function (data) {
        authors = data;
    })
      $.ajaxSettings.async = true;//设置getJson异步
    
    	//人气博主
  	//var blogerpath = siteurl+"/blogerdetails.json";
  	var blogerpath = "/blogerdetails.json";                	//博主详情（姓名，头像，博文数，博主页面地址）　ｊｓｏｎ文件地址
		var blogercontent = "";																	//人气博主栏ＨＴＭＬ代码
		
		$.getJSON(blogerpath,function(data) {
												//读取数据
			var blogers = data;																		//对象元素的数组
			for(var i = 0; i < 5 ;i++){																				//选择排序选出博文数最高前五
				var indexMax = i;
				for(var j = i;j < blogers.length;j++){
						if(blogers[indexMax].articles < blogers[j].articles){
							indexMax = j;
						}
				}
				var bloger = blogers[indexMax];
				blogers[indexMax] = blogers[i];
				blogers[i] = bloger;
			}																												//拼接ＨＴＭＬ代码
			for(var k = 0 ;k < 5;k++){
				var blogeritem = '<li class="list-group-item margin-top-3 margin-top-5px ">'+
       '<a href="'+siteurl+blogers[k].path+'"><img class="blogers-img vertical-align-bottom" src="'+siteurl+blogers[k].image+'"></a>'+
      	'<div class="inline-block blogers-info"><a class="a-black-noline" href="'+siteurl+blogers[k].path+'"><span >'+blogers[k].name+'</span></a>'+
      	'<br><span class="line-height-25">上传:&nbsp;<a href="#">'+blogers[k].articles+'</a>&nbsp;&nbsp;人气:&nbsp;999</span></div>'+
      	'</li>  ';
      	blogercontent += blogeritem;
			}
																														//生成HTML内容
			$("#blogers-tags").html(blogercontent);
		})
		
		
		
		/*博客区域的拼接函数*/
    function contactitem(array,image,siteurl,authorpath){
    	
    	//拼接该篇博客HTML代码							
			var blogitem = '<div class="col-xs-12 col-sm-6 col-md-4 "> ' +
			    '<div class="list-group topic-item">'+
			    '<div class="list-group-item image-item">'+
			    '<a href="'+siteurl+array[4]+'" target="_blank" title="'+array[0]+'"> <img class="border-radius img-size-percent " src="'+siteurl+image+'"> </a>'+
					'<div class="hover"></div>'+
			    '<div class="topic-title ">'+array[0]+'</div>'+
					'</div>'+
					'<div class="list-group-item info-item">'+
					'<span><a href="'+siteurl+authorpath+'">'+array[2]+'</a></span>'+
					'<span class="pull-right"> <span class="glyphicon glyphicon-tag">&nbsp;<a href="'+siteurl+'/categories/'+array[1]+'">'+array[1]+'</a></span></span>'+
					'<div class="line-div"></div>'+
			    '</div> <div class="list-group-item info-item container-fluid ">'+
			    '<div class="row">'+
			    '<span class="col-xs-4"><img src="/images/readcount.png">33</span>'+
			    '<span class="col-xs-4 col-xs-offset-1"><img src="/images/message.png">33</span>'+
			    '<span class="col-xs-2 col-xs-offset-1"><img src="/images/unknowlike.png"></span>'+
			    '</div> </div> </div> </div>';
					return blogitem;
    	}	
  		//遍历所有用户信息，选取该用户博客路径	
  		function getBlogerPath(authors,array){
  			var authorPath = "";
  			 $.each(authors,function (i, item) {
						if (array[2] == item.name){
			  			authorPath =  item.path;
						}
				 }) ;
				return  authorPath;
  			
  		}	
  		//确定博文图片
  		function getBlogImage(array){
  			var image = "";
  			if(array[3] == ""){
					image = "/images/blogways.png";
				}
				else{
					image =array[3];
				}
				return image;
  		}		
  		
  			
  			/*
  			*   显示所有博客
  			*/
  			function getAllBlogs(array){
  				var content = "";
					//获取用户图片地址
					var image = getBlogImage(array);							
					//获取用户分类路径
					var authorpath = getBlogerPath(authors,array);
					content += contactitem(array,image,siteurl,authorpath);						
					content += "  ";
					return content;	
  			}
  			
  			/*
  			*    显示某一年度所有博客
  			*/
  			function getBlogsByYear(array,time){
					var content = "";
					if(year == array[5]) {
						//获取用户图片地址
						var image = getBlogImage(array);							
						//获取用户分类路径
						var authorpath = getBlogerPath(authors,array);
						content += contactitem(array,image,siteurl,authorpath);						
						content += "  ";
					}	
					return content;		
  			}
  			
  			/*
  			*		显示某一类别所有博客
  			*/
  			function getBlogsByCategory(category,array){
  			var content = ""; 
								if(category.toLowerCase() == array[1].toLowerCase()) {
									//获取用户图片地址
									var image = getBlogImage(array);							
									//获取用户分类路径
									var authorpath = getBlogerPath(authors,array);
									content += contactitem(array,image,siteurl,authorpath);						
									content += "  ";
								}	
				return content;		
  			}
  			
  			/*
  			*		显示某一类别某一年度的所有博客
  			*/
  			function getBlogsByCT(category,array,time){
  			var content = "";
  			 //选取该类别博客  
								if(category.toLowerCase() == array[1].toLowerCase() & time == array[5] ) {
									//获取用户图片地址
									var image = getBlogImage(array);							
									//获取用户分类路径
									var authorpath = getBlogerPath(authors,array);
									content += contactitem(array,image,siteurl,authorpath);						
									content += "  ";
								}	
				return content;		
  			}
  			
  			
  		//生成HTML代码
  		function contactHTML(data,category,time){
  			var content = "";
  			//选取指定类型博客，拼接至content中
  			if(category == "ALL" ){
  					if(time == 0)
  					{
  						$.each(data,function (i,array) {
								content +=  getAllBlogs(array)	;									
							})
  					}
  					else
  					{
  						$.each(data,function (i,array) {
								content +=  getBlogsByYear(array,time);									
							})
  								
  					}

  			}
  			else 
  			{
  					if(time == 0)
  					{
  						$.each(data,function (i,array) {
								content +=  getBlogsByCategory(category,array);									
							})
  					}
  					else
  					{
  							$.each(data,function (i,array) {
								content +=  getBlogsByCT(category,array,time);									
							})
  							
  							
  					}				
  			}					
  			return content;
  		}
		var datapath = "/postdetails.json";		
		function getUserSelect(category,time){
			 var content = "";  
      //获取所有博客信息，获得该类别博客
      $.getJSON(datapath,function (data) {    	
				content = contactHTML(data,category,time);		
        $(".topicShow").html(content);
      });
		}
		/*根据分类 查询*/
																	    
    $("#typeselect-s").change(function () {  
    	var category = $(this).val();
     	var time     =  $("#timeselect-s").val();																																		 //该类别所有博客
      getUserSelect(category,time) ;                     //index页面的异步刷新  																																		 //获取类别    
        
    })
    
    /*根据时间 查询*/
    $("#timeselect-s").change(function () {  
    	var time     = $(this).val();
     	var category = $("#typeselect-s").val();																																		 //该类别所有博客
      getUserSelect(category,time) ;                     //index页面的异步刷新  																																		 //获取类别    
        
    })
    

    //搜索
  $(".search-text").change(function(){
  	$("#searchtest").html("dsafa");
  	})
  	
  

})