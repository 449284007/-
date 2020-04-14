<template>
  <div>
       <div class="obj"
	   v-for="(item,index) in home" :key='index'>
		 <!--  这里是左边货车 -->
		   <div class="Left">
			   <div class="mok">
			  	<img src="../../../assets/1.jpg" style="height: 100%;border-radius: 15px;" />
			   </div>
			   <div class="bottOm">{{item.car.loadingType.value}} {{item.car.loadingType.desc}}</div>
		   </div>
		    <!--  这里是中间部分 -->
			<div class="Middle">
				 <div class="hidde">
					 <div style="width: 100%; height: 50%; display: flex;">
						 <div class="omkh">{{item.startAddress.province.name}}</div>
						 <div class="dle">
							 <div style="font-size: 12px; height: 33.3333%; text-align: center;">{{item.hoursLength}}h</div>
							  <div class="iconfont icon-jiantou" style="height: 33.3333%; font-size: 20px; text-align: center;"></div>
							   <div style="font-size: 12px;height: 33.3333%; text-align: center;">{{item.distance}}km</div>
						 </div>
						 <div class="Right">{{item.endAddress.province.name}}</div>
					 </div>
					  <div style="width: 100%; height: 50%;  display: flex;">
						  <div class="omkh">
							  载货体积:{{item.car.carLong}}*{{item.car.carWidth}}*{{item.car.carHeight}}m
							  </div>
						  <div class="dle"></div>
						  <div class="Right">载货重量:{{item.car.carLoad}}吨</div>
					  </div>
				 </div>
			</div>
			 <!--  这里是右边部分 -->
			 <div class="ght">
				 <div style="width: 40%; height: 60%;">
					 <div style="color: #B65611;">一口价:$60</div>
					<div style="font-size: 12px;">累计发车:{{item.usageCount}}车</div>
				 </div>
				 <div style="width: 100px; height: 40px; background: #B65611; border-radius: 5px; margin-left: 15px; color: #FFFFFF;
				 text-align: center; line-height: 40px;">
					 立即用车
				 </div>
			 </div>
	   </div>
	   
	   <!--  这是第二题 -->
	   <div class="mink">
		   <ul>
			<li v-for=" i in 5" :key='i'>{{i}}</li>
		   	</ul>
	   </div>
			
			<div class="prompt_text"><span id="num">{{count}}</span>秒后自动跳转</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			buttonName: "发送短信",
			isDisabled: false,
			count:'',
       home:[
		   {
		         "id" : 1,
		         "lineNo" : "10000000000000",
		         "distance" : 0.63,
		         "hoursLength" : 0.37,
		         "price" : 11122.32,
		         "usageCount" : 0,
		         "startAddress" : {
		           "province" : {
		             "name" : "山西省",
		             "code" : "140000",
		             "level" : {
		               "value" : "first",
		               "desc" : "first level"
		             },
		             "postCode" : "",
		             "longitude" : "112.549248",
		             "latitude" : "37.857014"
		           },
		           "city" : {
		             "name" : "太原市",
		             "code" : "140100",
		             "level" : {
		               "value" : "second",
		               "desc" : "second level"
		             },
		             "postCode" : "030082",
		             "longitude" : "112.549248",
		             "latitude" : "37.857014"
		           },
		           "district" : {
		             "name" : "晋源区",
		             "code" : "140110",
		             "level" : {
		               "value" : "third",
		               "desc" : "third level"
		             },
		             "postCode" : "030025",
		             "longitude" : "112.47985",
		             "latitude" : "37.72479"
		           },
		           "street" : null,
		           "detailAddress" : null
		         },
		         "endAddress" : {
		           "province" : {
		             "name" : "内蒙古自治区",
		             "code" : "150000",
		             "level" : {
		               "value" : "first",
		               "desc" : "first level"
		             },
		             "postCode" : "",
		             "longitude" : "111.670801",
		             "latitude" : "40.818311"
		           },
		           "city" : {
		             "name" : "包头市",
		             "code" : "150200",
		             "level" : {
		               "value" : "second",
		               "desc" : "second level"
		             },
		             "postCode" : "014025",
		             "longitude" : "109.840405",
		             "latitude" : "40.658168"
		           },
		           "district" : {
		             "name" : "东河区",
		             "code" : "150202",
		             "level" : {
		               "value" : "third",
		               "desc" : "third level"
		             },
		             "postCode" : "014040",
		             "longitude" : "110.0462",
		             "latitude" : "40.58237"
		           },
		           "street" : null,
		           "detailAddress" : null
		         },
		         "car" : {
		           "id" : 3,
		           "typeName" : "小微货",
		           "typeDesc" : "≤80km运输，可在日用品、生鲜、建材、小家具、纺织品",
		           "loadingType" : {
		             "value" : "low_bar",
		             "desc" : "低栏"
		           },
		           "carLong" : 2.70,
		           "carLoad" : 1500.00,
		           "carHeight" : 1.50,
		           "carWidth" : 1.70,
		           "loadVolume" : 6.88,
		           "carTypeImage" : null
		         }
		       }
	   ]
    }
  },
  mounted(){
	  this.goGrdoupRecor()
  },
  methods:{ 
	  goGrdoupRecor(){
	      const TIME_COUNT = 60;
	      if(!this.timer){
	        this.count = TIME_COUNT;
	        this.show = false;
	        this.timer = setInterval(()=>{
	          if(this.count > 0 && this.count <= TIME_COUNT){
	            this.count--;
	          }else{
	            this.show = true;
	            clearInterval(this.timer);
	            this.timer = null;
	            //跳转的页面写在此处
	              this.$router.push('/list');
	          }
	        },1000)
	      }
  }
},
}
</script>

<style>
.obj{
	height: 110px;
	width: 800px;
	margin: 0 auto;
	margin-top: 50px;
	background: #C0C0C0;
	overflow: hidden;
	display: flex;
}
.Left{
	width: 120px;
	height: 100%;
	overflow: hidden;
	margin-left: 20px;
}
.mok{
	width: 115px;
	height: 80px;
	border-radius: 10px;
	background: #FFFFFF;
	border: #222222 solid 1px;
	margin-top: 5px;
}
.bottOm{
	width: 115px;
	height: 25px;
	text-align: center;
	line-height: 25px;
	font-size: 14px;
}
.Middle{
	width: 400px;
	height: 100%;
	margin-left: 50px;
}
.hidde{
	width: 100%;
	height: 70%;
	margin-top: 5px;
}
.omkh{
	width: 40%;
	height: 100%;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.dle{
	width: 20%;
	height: 100%;
}
.Right{
	width: 40%;
	height: 100%;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.ght{
	width: 210px;
	height: 70%;
	margin-top: 5px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.mink{
	width: 1100px;
	height: 300px;
	margin:  0 auto;
	margin-top:60px !important;
}
ul{display: block;}
ul li{
    transition: transform 0.25s ease;
    float: left;width: 200px;
    height: 200px;line-height: 200px; 
	text-align: center;margin: 10px; 
	background-color: #00b5e1;list-style: none;
}    
ul li:hover{
	transform: scale(1.2,1.2);
	box-shadow: 0 0 10px #0000ff;
	cursor: pointer;
}
</style>