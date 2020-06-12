

# 【shop项目操作步骤】 

## 1、使用脚手架搭建好基础项目结构
```
	npm i -g @vue/cli	安装脚手架（已安装忽略）
```

## 2、创建vue项目
```
	vue create 项目名称	（默认和自定义随意，这里选择默认）
```

## 3、安装router
```javascript
	npm i vue-router --save	 (注意是在项目目录下安装)
```

## 4、安装完测试能否正常运行
```
	npm run serve		(能正常打开提供的网址即可)
```

## 5、测试打包能否正常（静态资源服务包）
```
	npm run build		(能正常出现dist文件夹即可)
```

```javascript
	如果需要测试静态资源服务包需要安装静态服务
	npm i -g serve		全局安装静态服务
	serve dist -p 8888	设置静态服务端口
```
## 6、在项目的src目录下创建以下文件
```javascript
	App.vue			（在App.vue中编写好模版）
	pages或者views文件夹	
	store文件夹		（vuex）
	router文件夹		（路由）
	api文件夹		（发ajax请求）
```

## 7、找到main.js，在里面部署好代码
```javascript
	import Vue from 'vue'
	import App from './App.vue'
```

```javascript
  	new Vue({		
?		el:"#app",
  		render: h => h(App),
?	})
```

## 8、配置eslint
1. 局部设置：注释配置

   ```js
   比如：/* eslint-disable no-unused-vars */
   ```

2. 全局设置：单个规则设置
    ` 找到package.json文件，找到rules属性,设置规则`

  ``` js
  比如：
  "rules":{
  "no-unused-vars" : "off"
  }
  ```

3. 全局设置：所有规则设置【选择这个方式】
   	`在项目根目录下创建vue.config.js,编写代码`

   ```js
   module.exports = {
   	lintOnSave : false  		// 全部关闭（二选一）
   	lintOnSave : 'warning'		//提示错误，但不影响项目运行（二选一）
   }
   ```

   

## 9、git管理
1. 首先最好删除脚手架创建的.git文件

2. 使用命令git初始化 

   ```
   	git init 			(创建本地仓库)
   	git add -A			(提交到暂存区)
   	git commit -m "初始化"	 	(提交到提交区)
   ```

3.  到github官网创建一个自己的远程仓库

4.  git remote add origin 远程仓库地址	(连接远程仓库)

5.  git push -u origin master		(推送到远程仓库)

   ```
   如果想要记住远程密码输入   git config --global credential.helper store
   编写代码推送到远程仓库	 	git push origin master 		（将本地的master分支推送到远程）
   将远程的代码更新到本地		git pull origin master		（将远程的master分支推送到本地）
   ```

6.  创建开发分支

   ```
   git checkout -b dev		创建一个dev分支并且换到该分支
   如果想拉取远程的分支到本地	git checkout -b dev origin/dev
   ```

7. 推送到远程

   ```js
   git push
   ```

## 10、搭建router模块
1. 在pages或views文件夹下创建以下文件夹
   `Home  Search  Login  Register`

2. 在这些文件夹下都创建一个index.vue文件，并编写好模版

   ```vue
   <template>
       <div>Home</div>
   </template>
   
   <script>
   	export default {
   		name:"Home"
   	}
   </script>
   
   <style lang="less" scoped>
   </style>
   ```

3. 在router文件夹下再创建一个routes.js文件，示例模版如下

   ```js
   import Home from '../pages/Home'
   	import Search from '../pages/Search'
   	export default[
       {
           path:'/',
           component:Home 
       },
       {
           path:'/search',
           component:Search
       }
   ]
   ```

4. 注册路由,在router文件夹下创建index.js文件，编写好以下模版

   ```js
   import Vue from "vue"
   import VueRouter from "vue-router"
   import routes from './routes'
   
   Vue.use(VueRouter)
   
   export default new VueRouter({
       routes
   })
   ```

5. 找到main.js,导入router路由器

   ```js
   import router from './router'
   ```

6. 找到App.vue文件，在template中引人路由，通过<router-view></router-view>标签

7. 在compontents文件夹下创建Header和Footer文件夹，并在这些文件夹下创建index.vue文件

8. 在App.vue中引人Header和Footer，并注册

9. 找到router文件夹，在index.js文件中将路由模式改成history模式	

   ```js
   mode:'history'	
   ```

## 11、 渲染头部和底部样式
1. 找到头部和底部的静态代码，

   ```
   将header静态代码拷贝到components文件夹下的Header组件中
   将footer静态代码拷贝到components文件夹下的Footer组件中
   将css中对应的less代码拷贝到对应的组件中
   在public文件夹下创建一个css文件夹，把reset.css文件拷贝进去
   将图片文件放到组件下的创建一个images文件夹中
   ```

2. 需要安装less包

   ```
   npm i -D less less-loader
   ```

3. 头部中的logo跳转

   ```
   将logo的图片标签用<router-link to="/"></router-link>包围
   ```

4. 注册和登入的a标签也换成<router-link></router-link>

5. 登入和注册界面不显示Header和Footer组件

   ```js
   // 找到routes.js文件，在注册和登入路由下添加一个属性
   	meta:{
   		isHide:true
   	}
   // 在App.vue组建中找到Header和Footer组件，用v-if来判断是否显示
   ```

## 12、在Header中设置搜索框为编程式跳转
1. 给search标签添加一个点击事件

2. 然后添加一个函数，进行编程式跳转

   ```js
   methods:{
   	search(){
   	this.$router.push('./search')
   	}
   }
   ```

   ?	【编程式跳转传参方式】
   ?		1、直接拼串带参数

   ```js
   methods:{
   	search(){
   		let {value} = this
   		this.$router.push('./search'+value+'?valueq=【test-query】')
   	}
   }
   ```

   ?		2、对象语法带参数

   ```js
   methods:{
   	search(){
   		let {value} = this
   		this.$router.push({
   			name:'search',
   			params:{value:value},
   			query:{valueq:"【test-query】"}
   		})
   	}
   }
   ```

3. 接收参数需要在router文件夹下的routes.js文件，找到对应的路由规则，

   ```js
   //如果接收的是params参数，则在path路径后面加一个 :参数名
   	{
   		path:'/search/:value',
   		component:Search
   	}
   //如果发送数据采用的是对象传参，则一定要加一个name属性
   	{
   		path:'/search/:value',
   		component:Search，
   		name:'search'
   	}
   ```

4. 为了测试搜索的功能，可以在search路由中引入参数，并显示到页面上

   ```vue
   <template>
   	<div>
   		接收的params参数是:{{$route.params.value}}
   		接收的query参数是:{{$route.query.valueq}}
   	</div>
   </template>
   ```

5. 为了防止提交空字符串导致路径显示不正常，首先找到对应路由，在path路径后加一个？

   ```js
   //然后在Header组件中找到点击提交函数，在里面通过判断来发送对应的对象
   		methods:{      
   		        search(){
   		            let {value} = this
   		            let location = {
   		                name : 'search'
   		            } 
   		            if(value){
   		                location.params = {value:value}
   		                location.query = {valueq:"【test-query】"}
   		            }
   		            this.$router.push(location)
   		        }
   		}
   ```

6.  解决重复提交相同内容出错
   `找到路由器，重写push，replace`

   ```js
   //【示例修改push】
   const originPush = VueRouter.prototype.push
   
   VueRouter.prototype.push = function(location,onComplete,onAbort){
       if(!onComplete && !onAbort){
           return originPush.call(this,location).catch(err =>{
               console.log(err.message);        
           })
       }else{
           originPush.call(this,location,onComplete,onAbort)
       }
   }
   ```

7. 将路由参数映射成props , 在路由规则routes.js文件中，找到对应路由，设置props参数

   ```js
   {
   	path:'/search/:value?',
   	component:Search,
   	name :'search',
   	props:route => ({
   		value3 : "测试第3个值",
   		value4 : "测试第4个值"
   	})
   }
   //在Search组件中必须通过props接收上面的props对象参数
   ```

## 13、Home组件及组件进行拆分
1. 找到Home路由，将静态页面的Home内容全部粘贴到路由中

2.  创建各个组件，名字随意，导入对应的css和图片文件

3. 为了渲染效果好，建议注释掉轮播图的其他图片，只留一张

## 14、进行ajax与后台进行交互
1. 下载依赖 npm i -S axios nprogress

2. 在api文件夹下创建一个ajax.js文件

3. 配置通用的基础的路径和超时时间

   ```js
   //导入axios
   //import axios from "axios"
   
   //创建axios新实例，修改两个属性 ，baseURL 是修改请求的路径以/api开头，timeout设置超时时间15秒
   const instance = axios.create({
       baseURL : '/api',
       timeout : 15000
   })
   ```

4. 显示请求进度条

   ```js
   //导入进度条组件
   import NProgress from 'nprogress'
   
   //注册请求拦截器
   instance.interceptors.request.use(config => {
       NProgress.start()
       return config
   })
   
   //注册响应拦截器
   instance.interceptors.response.use(
       response =>{
           NProgress.done()
       },
       error =>{
           NProgress.done()
       }
   )
   ```

5. 处理成功返回data

   ```js
   //导入进度条组件
   import NProgress from 'nprogress'
   //注册请求拦截器
   instance.interceptors.request.use(config => {
      NProgress.start()
      return config
   })
   
   //注册响应拦截器
   instance.interceptors.response.use(
       response =>{
           NProgress.done()
          return response.data 
       },
       error =>{
           NProgress.done()
       }
   )
   ```

6. 处理失败

   ```js
   //导入进度条组件
   import NProgress from 'nprogress'
   //注册请求拦截器
   instance.interceptors.request.use(config => {
     NProgress.start()
     return config
   })
   
   //注册响应拦截器
   instance.interceptors.response.use(
       response =>{
           NProgress.done()
           return response.data
       },
       error =>{
           NProgress.done()
           // 1、抛出异常
   		// throw error
   
   		// 2、返回错误的promise
   		return  Promise.reject(error)
   	}
   )
   ```

7. 在api文件夹下创建一个index.js文件，为了包含所有的api

   ```js
   //首先导入自定义的axios
   import ajax from './ajax'
   
   //可以在这个index.js中设置多个api请求，比如登入api请求
   export function reqLogin(mobile,password){
       return ajax({
           url:'/user/passport/login',
           method:'POST',
           data:{
               mobile,password
           }
       })
   }
   ```

8. 获取首页三级分类，示例采用箭头函数写法

   ```js
   export const reqCategorys = () => ajax('/product/getBaseCategoryList')
   ```

9. 这里因为涉及到请求的向远程服务器发送，本地服务器无法处理，所以，我们需要在vue.config.js文件中添加一个跨域配置

   ```js
   devServer:{
   	proxy:{
   		'/api':{
   			target:"http://182.92.128.115",
   			changeOrigin:true,
   		}
   	}
   }
    //除了这种方式，还可以直接在ajax.js文件中直接修改baseURL地址为远程地址 - baseURL : 'http://182.92.128.115/api',【不推荐】
   ```

10. 为了测试以上的操作，可以在App.vue文件中导入这个api，通过monted()来调用api接口

    ```js
    //首先导入 import {reqCategorys} from './api'   获取首页三级分类的api
    
    //然后直接调用这个api接口
    async mounted(){
        await reqCategorys()
    }
    ```

    

?	

## 15、使用vuex管理组件数据
1. 下载依赖 npm i -S vuex

2. 在src目录下的store文件夹下创建index.js文件

   ``` js
   //这个文件需要导入vue 和 vuex ,通过use（vuex）来使用vuex，并暴露出去
   const mutations = { }
   const actions = { }
   const getters = { }
   
   export default new Vuex.Store({
       mutations,
       actions,
       getters,
       modules:{
       }
   })
   ```

3. 分别管理数据，在store目录下创建modules文件夹，在modules文件夹下创建单独的数据管理文件比如专门管理home组件数据的，home.js 

4. 在modules文件夹下的home.js文件中，首先我们要先导入之前我们定义的获取三级分类的api
   	`import {获取三级分类的函数名} from '你的api路径'`

5. 并暴露vuex数据管理对象

   ```js
   export default {
   	state : {  
   	},
   
       mutations :{
       },
   
       actions:{   
       },
   
       getters:{
       }
   }
   ```

6. 在actions对象中使用获取三级分类的api，并讲获取到的数据交给mutations处理

   ```js
   async getCategroyList({commit}){
   	const result = await reqCategoryList()
   
   	if(result.code === 200){
   		const categroyList = result.data
   		commit('mutations对应的函数名',categroyList)
   	}
   }
   ```

7. 在state对象中创建一个属性用来接收三级分类的数据

   ```js
   state : {
   	categroyList:[]
   }
   ```

8. 在mutations对象中处理actions提交发过来的数据

   ```js
   mutations :{
   	receive_category_list(state,categroyList){
   		state.categroyList = categroyList
   	}
   },
   ```

9. 在store文件夹下的index.js文件中导入刚写好的home数据管理文件，并添加到modules对象中	

## 16、导航栏动态数据
1. 找到components文件夹下的TypeNav组件，在里面导入通过后台获取到的三级分类数据

   ```js
   async mounted() {
   	this.$store.dispatch('getCategroyList');
   },
   ```

2. 通过计算方式获取三级分类对象，并将数据引入到html结构中

   ```js
   computed:{
   	categroyList(){
   		return this.$store.state.home.categroyList
   	},
   },
   ```

## 17、TypeNav交互效果
1. 实现js鼠标移入移出切换效果，首先定义一个变量默认值为-1，表示子分类不显示

   ```js
   data() {
   	return {
   		currentIndex:-1,
   	}
   },
   ```

2. 然后在1级标签位置设置一个移入移出事件@mouseenter/@mouseleave,
   `鼠标移入的时候将currentIndex的值设置为对应的下标，然后在对应的标签中添加一个类名，这个类名item_on决定这个移入的子分类是否显示`

   ```html
   <div :class="{item_on: 标签的下标 === currentIndex}"></div>
   ```

   ```js
   methons:{
   	showSubScategorys(){
   		this.currentIndex = index
   	},
   }
   ```

   `鼠标移出的时候将currentIndex的值设置为-2,表示鼠标移出，-1代表鼠标在移入之前`

   ```js
   methons:{
   	hideCate(){
   		this.currentIndex = -2
   	},
   }
   ```

   `鼠标移入的时候添加一个设置，，判断currentIndex是否是-2，如果鼠标移出（-2），则不需要显示子分类`

   ```js
   methons:{
   	showSubScategorys(){
   		if(this.currentIndex!==-2){
   			this.currentIndex = index
   		}
   	},
   }
   ```

3. 进行节流设置，导入lodash的throttle方法

   ```js
   import throttle  from "lodash/throttle"
   
   //然后在鼠标移入的时候进行200毫秒节流设置
   showSubScategorys:throttle(function (index){
   	if(this.currentIndex!==-2){
   		this.currentIndex = index
   	}
   },200)
   ```

4. 设置分类栏只有在home首页显示，在搜索组件中只有通过鼠标移入才会显示

   ```js
   //定义一个变量isShow来判断是否是主页
   data() {
   	return {
   		isShow : this.$route.path === '/'
   	}
   },
   ```

5. 设置鼠标移入导航的时候显示分类栏

   ```html
   <div @mouseenter="showCate">
       导航栏
       <div  v-show="isShow">分类栏</div>
   </div>
   ```

   ```js
   showCate(){
   	this.isShow = true
   	this.currentIndex=-1
   }
   ```

## 18、设置点击分类提交参数并跳转到搜索组件，
1. 使用事件委派方法，在所有分类的共同祖先元素设置一个点击事件

   ```HTML
   <div @click="toSearch" ></div>
   ```

2. 在点击事件中通过事件对象event的target.dataset方法可以获取点击标签的对应的属性值，所以我们把需要传递的参数以自定义属性添加

   ```html
   <a :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{c1.categoryName}}</a>
   ```

   ```js
   methons:{
   	toSearch(event){
   		const {
   			categoryname,
   			category1id,
   			category2id,
   			category3id
   		} = event.target.dataset
   	}
   }
   
   //这样就能传递categoryname和category1id，category1id，category3id属性的值
   ```

3. 判断点击的标签是否能获取到categoryname的值，如果不能则不做任何操作

   ```js
   if(!categoryname) return
   ```

4. 我们在事件中获取后，进行判断category1id，category1id，category3id中哪个是有值的，如果有值则存储到一个变量中

   ```js
   const query = {
   	catagoryName : categoryname
   }
   if(category1id){
   	query.category1Id = category1id
   }else if(category2id){
   	query.category2Id = category2id
   }else if(category3id){
   	query.category3Id = category3id
   }
   ```

5. 定义一个参数对象，并向指定路由发送数据

   ```js
   const location = {
   	name : "search",
   	query
   }
   this.$router.push(location)
   ```

6. 处理头部搜索框搜索数据的参数和点击分类搜索的数据进行合并
   `在分类栏中发送路由请求前进行判断搜索框的参数是否有值，如果有，则保存`

   ```js
   if(value){
   	location.params = {value}
   }
   this.$router.push(location)
   ```

   `发送数据后，将分类栏进行隐藏`

   ```js
   this.hideCate()
   ```

   `在头部输入框输入数据后，发送路由请求前，也将分类栏的参数保存`

   ```js
   location.query = this.$route.query
   this.$router.push(location)
   ```

## 19、mock模拟
1. 安装依赖 npm i -S mockjs

2. 在src目录下创建一个mock目录，并导入准备好的banner.json/data.json/floors.json三个文件放进去

3. 在mock目录下创建一个mockServer.js文件

4. 在文件中导入mock插件

   ```js
   import Mock from 'mockjs'
   ```

5. 导入banner.json和floors.json两个文件

   ```js
   import banners from './banners.json'
   //banners里面存放了4张图片的地址，需要将这4个图片找到并放到public文件夹下的images文件夹里
   
   import floors from './floors.json'
   ```

6. 调用mock 的mock的方法，进行数据的随机处理，并设置路由拦截

   ```js
   Mock.mock('/mock/banners',{
   	code : 200,
   	data : banners
   })
   
   Mock.mock('/mock/floors',{
   	code : 200,
   	data : floors
   })
   ```

7. 在api目录下创建一个mockAjax.js文件专门处理mock请求

   ```js
   import axios from "axios"
   	const instance = axios.create({
   	baseURL : '/',
   	timeout : 15000
   })
   
   instance.interceptors.request.use(config => {
   	return config
   })
   
   instance.interceptors.response.use(
   	response =>{
   		return response.data
   	},
   	error =>{
   		return  Promise.reject(error)
   	}
   )
   
   export default instance	
   ```

8. 在api目录下的index.js文件中导入mockAjax

   ```js
   import mockAjax from './mockAjax'
   ```

9. 定义一个获取banner图片的api接口和获取楼层数据的api接口		

   ```js
   export const reqBanners = () => mockAjax('/mock/banners')
   export const reqFloors = () => mockAjax('/mock/floors')
   ```

10. 在store文件夹中的modules里的home.js文件中，定义获取banner和floors数据的函数

    ```js
    import {reqBanners,reqFloors} from '../../api'
    
    export default {
        state : {
            banners:[],
            floors:[]
        },
    
        mutations :{
            receive_banners(state,banners){
                state.banners = banners
            },
            receive_floors(state,floors){
                state.floors = floors
            }
        },
    
        actions:{
            async getBanners({commit}){
                const result = await reqBanners()
                if(result.code === 200){
                    const banners = result.data
                    commit('receive_banners',banners)
                }
            },
    
            async getFloors({commit}){
                const result = await reqFloors()
                if(result.code === 200){
                    const floors = result.data
                    commit('receive_floors',floors)
                }
            }
        },
}
    ```
    
    

## 20、实现轮播图效果
1. 安装swiper组件 npm i -S swiper

2. 找到home组件下的ListContainer组件，导入swiper和swiper.min.css

   ```js
   import Swiper from 'swiper'
   import from 'swiper/css/swiper.min.css'
   ```

3. 参考swiper官方文档将ListContainer的结构和编写好，js代码需要在页面数据加载完成后才有效果

   ```js
   mounted() {
   	new Swiper ('.swiper-container', {
   		loop: true, 
   		autoplay : true,
   		pagination: {
   			el: '.swiper-pagination',
   		},
   
   		navigation: {
   			nextEl: '.swiper-button-next',
   			prevEl: '.swiper-button-prev',
   		},
   	})   
   },
   ```

4. 解决轮播图影响到floors的图片轮播

   `单独为banner模块的swiper-container类名标签添加一个ref属性，然后通过vue对象refs来获取`

   ```html
   <div class="swiper-container" ref="swiper"></div>
   ```

   ```js
   mounted() {
       new Swiper (this.$refs.swiper, {
           loop: true, // 循环模式选项
           autoplay : true,
           // 如果需要分页器
           pagination: {
               el: '.swiper-pagination',
           },
           
           // 如果需要前进后退按钮
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
       })   
   },
   ```

5. 动态获取banner图片的数据，通过banner的api与store是数据结合,在ListContainer组件加载完成后，用计算方式获取banner图片数据

   `在Home组件下的index.vue中通过调用接口发送banners和floors的请求`

   ```js
   mounted() {
   	this.$store.dispatch('getBanners')
   	this.$store.dispatch('getFloors')
   },
   ```

   `然后在ListContainer组件中通过计算属性获取banner`

   ```js
   import {mapState} from 'vuex'
   computed: {
   	...mapState({
   		banners : state => state.home.banners
   	})
   },
   ```

   `直接在Home组件下的index.vue文件中通过计算属性得到floors数据`

   ```js
   import {mapState} from 'vuex'
   computed: {
       ...mapState({
           floors : state => state.home.floors
       })
   },
   ```

6. 通过v-for将获取的banner数据动态显示

7. 解决banner轮播图不自动轮播

   1. 首先我们将swiper的轮播js代码封装起来

      ```js
      mounted:{
          srollImg(){
              new Swiper (this.$refs.swiper, {
              // new Swiper ('.swiper-container', {
                  loop: true, // 循环模式选项
                  autoplay : true,
                  // 如果需要分页器
                  pagination: {
                      el: '.swiper-pagination',
                  },
                  
                  // 如果需要前进后退按钮
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
              })  
          } 
      },
      ```

   2. 然后添加监听属性，调用vue的nextTick方法，效果是当时页面数据改变后页面并加载完成则调用swiper

      ```js
      watch:{
          banners(value){
              this.$nextTick(() =>{
                  this.srollImg()
              })
          }
      },
      ```

8. 将轮播组件单独抽离方便复用，在components目录下创建一个Carousel组件，并修改数据为通用对象，声明props参数用来接收一个数组

   ```vue
   <template>
     <div class="swiper-container" ref="swiper">
       <div class="swiper-wrapper">
         <div v-for="(item, index) in carouseList" :key="item.id" class="swiper-slide">
           <img :src="item.imgUrl" />
         </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
   
       <!-- 如果需要导航按钮 -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>
     </div>
   </template>
   
   <script type="text/ecmascript-6">
   import Swiper from 'swiper'
   
   export default {
     name: "Carousel",
     props:{
           carouseList : Array,
           autoplay:true        
     },
     watch:{
           carouseList(value){
               this.$nextTick(() =>{
                   this.srollImg()
               })
           }
       },
       mounted:{
           srollImg(){
               new Swiper (this.$refs.swiper, {
               // new Swiper ('.swiper-container', {
                   loop: true, // 循环模式选项
                   autoplay : true,
                   // 如果需要分页器
                   pagination: {
                       el: '.swiper-pagination',
                   },
                   
                   // 如果需要前进后退按钮
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                   },
               })  
           } 
       },
   };
   </script>
   ```

9. 将Carousel组件做一个全局暴露,找到main.js入口文件，导入并注册

   ```js
   import Carousel from './components/Carousel'
   Vue.component('Carousel',Carousel)
   ```

10. 然后将全局Carousel组件放到对应需要轮播图的组件中，并传入一个数组参数，如果需要设置是否自动轮播也可以通过参数传入

    ```js
    <Carousel :carouselList="banners" autoplay/>
    ```

11. 实现Floors组件动态生成，首先在Home组件下通过v-for获取Floors的动态数据，然后再向子组件传递单个对象数据

    ```html
    <Floor v-for="(floor, index) in floors" :key="floor.id" :floor="floor"/>
    ```

12. 然后在floor组件中获取父组件传递进来的对象数据，将数据动态显示在页面中

    ```js
    export default {
        props:['floor']
    }
    ```

13. 解决floors轮播图初始化不能滚动方法

    ```js
    watch: {
        carouselList: {
          // 监视的回调
          handler(value) {
            if (this.carouseList.length === 0) return;
            this.$nextTick(() => {
              this.srollImg();
            })
          },
          immediate: true
        }
    }
    ```

## 21、search组件动态数据展示

 1. 首先找到静态组件中的search目录，将已经写好的images、SearchSelector文件夹，和index.vue粘贴到我们的search组件下

 2. 在api目录下的index.js文件下定义一个获取search列表的数据接口,需要接收一个参数 options

    ```js
    export function reqProductList(options){
        return ajax({
            url:'/list',
            method:'POST',
            data:options
        })
    }
    ```

3. 在stroe目录下的modules文件夹中创建一个管理search组件的vuex文件search.js

   ```js
   import {reqProductList} from '../../api'
   
   export default {
           state:{
                   productList : {}
           },
           mutations :{
                   receive_product_list(state,productList){
                           state.productList = productList
                   }
           },
           actions:{
                   async getProductList({commit},options){
                           const result = await reqProductList(options)
                           if(result.code === 200){
                                   const productList = result.data
                                   commit('receive_product_list',productList)
                           }
                   }
           },
       	getters:{
                 trademarkList(state){
                       return state.productList.trademarkList  || []
                 }  ,
                 attrsList(state){
                         return state.productList.attrsList || []
                 }
           }
   }
   ```

4. 然后再store目录下的index.js文件中导入刚才的vuex管理对象

   ```js
   import search from '@/store/modules/search'
   
   export default new Vuex.Store({
       mutations,
       actions,
       getters,
       modules:{
           home,users,search
       }
   })
   ```

5. 在search组件中通过dispatch来获取后台发送的数据

   ```js
   import {mapState} from 'vuex'
   export default {
     data() {
       return {
         options:{
           category1Id:'',
           category2Id:'',
           category3Id:'',
           categoryName:'',
           keyword:'',
           props:[],
           trademark:'',
           order:'1:desc',
           pageNo:1,
           pageSize:5
         }
       }
     },
     mounted() {
       this.getProductList()
     },
     computed: {
       ...mapState({
         productList : state => state.search.productList
       })
     },
     methods: {
       getProductList(){
         this.$store.dispatch('getProductList',this.options)
       }
     },
   }
   ```

6. 在Search组件下通过后台获取的数据动态展示goodsList数据，在子组件SearchSelector中通过后台获取的数据动态展示attrsList和trademarkList数据

7. 实现点击三级分类列表项和搜索框发送请求，把路由的参数一同发送到后台，首先我们在页面加载完成后，将路由的参数更新到option对象中，然后直接发送option对象

   ```js
   beforeMount() {
     const {category1Id='',category2Id='',category3Id='',categoryName=''} = this.$route.query
     const keyword = this.$route.params.value
     this.options = {
       ...this.options,
       category1Id,
       category2Id,
       category3Id,
       categoryName,
       keyword
     }
   }
   ```

8. 因为在相同路由下不会再次调用mount，导致无法再次发送请求，所以我们需要监视参数是否发生变化，一旦变化再次发生请求

   ```js
   watch: {
       $route() {
         	const {category1Id='',category2Id='',category3Id='',categoryName=''} = this.$route.query
     		const keyword = this.$route.params.value
     		this.options = {
       		...this.options,
       		category1Id,
       		category2Id,
       		category3Id,
       		categoryName,
       		keyword
       	}
           this.getProductList()
   	}
   }
   ```

   

## 22、动态生成进入推荐图片

 1. 首先自定义mock文件生成模拟图片的json文件,取名叫recommed.json

    ```json
    [
            {
                    "id": "1",
                    "imgUrl": "/images/today01.png"
            },
            {
                    "id": "2",
                    "imgUrl": "/images/today02.png"
            },
            {
                    "id": "3",
                    "imgUrl": "/images/today03.png"
            },
            {
                    "id": "4",
                    "imgUrl": "/images/today04.png"
            }
    ]
    ```

2. 在mockServer.js文件中定义recommend的路由

   ```js
   import recommend from './recommend.json'
   Mock.mock('/mock/recommend',{
           code:200,
           data:recommend
   })
   ```

3. 在api目录下的index.js文件中定义获取图片数据的接口

   ```js
   export const reqRecommend = () => mockAjax('/mock/recommend')
   ```

4. 在store目录下的home管理数据文件中添加对recommend管理的代码

   ```js
   import {reqRecommend} from '../../api'
   export default {
       state : {
           recommend:[]
       },
   
       mutations :{
           receive_recommend_list(state,recommend){
               state.recommend = recommend
           }
       },
   
       actions:{
           async getRecommend({commit}){
               const result = await reqRecommend()
               if(result.code === 200){
                   const recommend = result.data
                   commit('receive_recommend_list',recommend)
               }
           }
       },
   
       getters:{}
   }
   ```

5. 找到recommend组件，通过刚定义的接口发送请求，获取数据并动态显示到页面上

   ```html
   <ul class="recommend">
       <li class="clock">
           <div class="time">
               <img src="./images/clock.png" />
               <h3>今日推荐</h3>
           </div>
       </li>
       <li v-for="(item, index) in recommend" :key="item.id" class="banner">
           <img :src="item.imgUrl" />
       </li>
   </ul>
   ```

   ```js
   import {mapState} from 'vuex'
   export default {
       computed: {
           ...mapState({
               recommend : state => state.home.recommend
           })
       },
       mounted() {
           this.$store.dispatch('getRecommend')
       },
   }
   ```

## 23、search组件实现分页按钮效果

1. 首先在components文件夹下创建新的组件Pagination，然后把动态组件代码编写好

   ```vue
   <template>
     <div class="pagination">
       <!-- 当前页码等于1就不可操作 -->
       <button :disabled="mcPage===1" @click="changeCurrentPage(mcPage-1)">上一页</button>
       <!-- 只有start大于1 -->
       <button v-if="startEnd.start>1" @click="changeCurrentPage(1)">1</button>
       <!-- 只有start大于2 -->
       <button disabled v-if="startEnd.start>2">···</button>
       <!-- 连续页码 -->
       <button
         v-for="item in startEnd.end"
         v-if="item>=startEnd.start"
         :key="item"
         @click="changeCurrentPage(item)"
         :class="{active: mcPage===item}"
       >{{item}}</button>
       <!-- 只有end<totalPages-1才显示  -->
       <button disabled v-if="startEnd.end<totalPages-1">···</button>
       <!-- 只有end<totalPages才显示 -->
       <button v-if="startEnd.end<totalPages" @click="changeCurrentPage(totalPages)">{{totalPages}}</button>
       <!-- 当前页码等于总页码就不可操作 -->
       <button :disabled="mcPage===totalPages" @click="changeCurrentPage(mcPage+1)">下一页</button>
       <!-- 总记录数 -->
       <button style="margin-left: 30px">共 {{total}} 条</button>
     </div>
   </template>
   
   <script>
   export default {
     name: "Pagination",
     props: {
       currentPage: {
         type: Number, // 当前页码
         default: 1
       },
       pageSize: {
         type: Number, // 每页数量
         default: 5
       },
       total: {
         type: Number, // 总数量
         default: 0
       },
       showPageNo: {
         type: Number, // 连续页码数
         default: 5
       }
     },
   
     data() {
       return {
         mcPage: this.currentPage // 保存自己的当前页码
       };
     },
   
     computed: {
       /* 
         总页码数 依赖数据:  总数量: total  每页数量: pageSize  
         */
       totalPages() {
         const { total, pageSize } = this;
         return Math.ceil(total / pageSize);
       },
   
       startEnd() {
         const { mcPage, showPageNo, totalPages } = this;
         let start = mcPage - Math.floor(showPageNo / 2); 
         if (start < 1) {
           start = 1;
         }
         let end = start + showPageNo - 1; 
         if (end > totalPages) {
           end = totalPages;
           start = end - showPageNo + 1;
           if (start < 1) {
             start = 1;
           }
         }
   
         return { start, end };
       }
     },
   
     watch: {
       currentPage(value) {
         // 将当前页码指定为外部传入的值
         this.mcPage = value;
       }
     },
   
     methods: {
       changeCurrentPage(page) {
         // 修改当前页码
         this.mcPage = page;
         // 通知外部父组件
         this.$emit("currentChange", page);
       }
     }
   };
   </script>
   
   <style lang="less" scoped>
   .pagination {
     button {
       margin: 0 5px;
       background-color: #f4f4f5;
       color: #606266;
       outline: none;
       border-radius: 2px;
       padding: 0 4px;
       vertical-align: top;
       display: inline-block;
       font-size: 13px;
       min-width: 35.5px;
       height: 28px;
       line-height: 28px;
       cursor: pointer;
       box-sizing: border-box;
       text-align: center;
       border: 0;
   
       &[disabled] {
         color: #c0c4cc;
         cursor: not-allowed;
       }
   
       &.active {
         cursor: not-allowed;
         background-color: #409eff;
         color: #fff;
       }
     }
   }
   </style>
   
   ```

2. 在main.js中将Pagination组件注册为全局组件

   ```js
   import Pagination from './components/Pagination'
   Vue.component('Pagination',Pagination)
   ```

3. 在search组件中将全局组件Pagination放在指定的位置(代替之前的class为fr page标签)然后，然后传入子组件需要的参数，来修改分页显示的效果

   ```html
   <Pagination 
   :currentPage="options.pageNo" 
   :pagesize="options.pageSize" 
   :total="productList.total" 
   :showPageNo="3" 
   @currentChange="getProductList"/>
   ```

   `currentPage 表示分页的当前页码`

   `pagesize 表示每个分页显示多少商品`

   `total 表示一共有多少个商品`

   `showPageNo 表示分页按钮显示多少个`

   `@currentChange 是子组件分发给父组件的函数，可以通过这个函数点击更新分页`

4. 修改getProductList发生请求的函数，可让每次请求现在指定的页码，默认是第一页

   ```js
   methods: {
     getProductList(pageNo=1) {
       this.options.pageNo = pageNo
       this.$store.dispatch("getProductList", this.options);
     }
   }
   ```

## 24、优化根据分类和关键字进行搜索

1. 在search组件中定义一个函数，用来处理当分类或关键字发生变化时，修改options的值，这个函数在页面渲染前就触发

   ```js
   beforeMount() {
       this.updateOptions()
   },
   methods: {
     updateOptions(){
       const {
         category1Id = '',
         category2Id = '',
         category3Id = '',
         categoryName = ''
       } = this.$route.query;
       const keyword = this.$route.params.value;
       this.options = {
         ...this.options,
         category1Id,
         category2Id,
         category3Id,
         categoryName,
         keyword
       };
     },
   }
   ```

2. 监听路由参数发生变化后，获取最新的路由参数变化，调用updateOptions函数，并发送请求

   ```js
   watch: {
       $route() {
         this.updateOptions()
         this.getProductList()
       }
   },
   ```

3. 在页面上显示搜索的分类和关键字数据，在“全部结果”的下面ul标签中，将li里的数据动态展示,，使用v-if判断搜索的param值或query值有没有，没有则不显示

   ```html
   <ul class="fl sui-tag">
   	<li v-if="options.categoryName" class="with-x">
   		{{options.categoryName}}
   		<i>×</i>
   	</li>
   	<li v-if="options.keyword" class="with-x">
   		{{options.keyword}}
   		<i>×</i>
   	</li>
   </ul>
   ```

4. 创建一个删除条件的函数，并给 x 按钮绑定,这个删除条件的函数没执行后，将路由重新跳转

   ```html
   <ul class="fl sui-tag">
   	<li v-if="options.categoryName" class="with-x">
   		{{options.categoryName}}
   		<i @click="removeCategory">×</i>
   	</li>
   	<li v-if="options.keyword" class="with-x">
   		{{options.keyword}}
   		<i @click="removeKeyword">×</i>
   	</li>
   </ul>
   ```

   ```js
   methods:{
   	removeCategory(){
         this.options.categoryName = '',
         this.options.category1Id = '',
         this.options.category2Id = '',
         this.options.category3Id = '',
         this.$router.replace({name:'search',params:this.$router.params})   
       },
       removeKeyword(){
         this.options.keyword = ''
         this.$router.replace({name:'search',params:this.$router.query})
       },
   }
   ```

5. 删除关键字query参数后，实现输入框内的内容也同时删除，因为输入框的组件在header组件中，所以我们需要采用全局事件总线的方法来实现

   * 在main.js中创建一个事件总线

     ```js
     new Vue({
       el:"#app",
       render: h => h(App),
       router,
       store,
       beforeCreate(){
         Vue.prototype.$bus = this
       }
     })
     ```

   * 在search组件的删除关键字函数中定义总线函数，这样其他组件就能使用这个函数

     ```js
     methods:{
         removeKeyword(){
           this.options.keyword = ''
           this.$router.replace({name:'search',params:this.$router.query})
           this.$bus.$emit('removeKeyword')
         },
     }
     ```

   * 在header组件中绑定这个全局事件，当删除关键字的函数被处罚，header中的value也清空

     ```js
     mounted() {
         this.$bus.$on('removeKeyword',()=>{
             this.value = ''
         })
     },
     ```

6. 根据品牌进行搜索，因为品牌数据是在search子组件中，我们需要顶一个函数用来更新品牌的条件，然后传给子组件调用,并且判断每次点击的条件是否一样，如果是一样就不发请求

   ```html
   <SearchSelector :setTrademark="setTrademark" />
   ```

   ```js
   method:{
   	setTrademark(trademark){
         if(this.options.trademark === trademark) return
         this.options.trademark = trademark
         this.getProductList()
       }
   }
   ```

7. 然后在子组件中获取这个setTrademark函数，并点击调用这个函数，还需要传入对应的参数

   ```html
   <div class="value logos">
     <ul class="logo-list">
       <li v-for="(item, index) in trademarkList" :key="item.tmId" 		     @click="setTrademark(`${item.tmId}:${item.tmName}`)">{{item.tmName}}</li>
     </ul>
   </div>
   ```

   ```js
   export default {
       props:['setTrademark'],
   }
   ```

8. 定义一个删除删除品牌条件的函数

   ```
   removeTrademark(){
         this.options.trademark = ''
         this.getProductList()
   },
   ```

9. 根据属性条件进行搜索，因为设计到子组件，所以我们需要从子组件分发一个事件并传给父组件调用

   ```html
   <!-- 父组件接收 -->
   <SearchSelector :setTrademark="setTrademark" @addProp="addProp"/>
   ```

   ```html
   <!-- 子组件分发 -->
   <div v-for="(item, index) in attrsList" :key="item.attrId" class="type-wrap" >
   	<div class="fl key">{{item.attrName}}</div>
   	<div class="fl value">
   		<ul class="type-list">
   			<li v-for="(value, index) in item.attrValueList" :key="value" @click="$emit('addProp',`${item.attrId}:${value}:${item.attrName}`)">
   				<a>{{value}}</a>
   			</li>
   		</ul>
   	</div>
   	<div class="fl ext"></div>
   </div>
   ```

   ```html
   <!-- 父组件显示条件,点击x按钮删除对应的数组元素（条件） -->
   <ul class="fl sui-tag">
     <li v-for="(prop, index) in options.props" :key="prop" class="with-x">
       {{prop}}
       <i  @click="props.splice(index,1)">×</i>
     </li>
   </ul>
   ```

   ```js
   // 父组件定义一个添加条件的函数和删除条件的函数
   addProp(prop){
     if(this.options.props.indexOf(prop) >= 0) return
     this.options.props.push(prop)
     this.getProductList()
   },
   removeProp(index){
     this.options.props.splice(index,1)
     this.getProductList()
   }
   ```

## 25、排序显示商品

1. 首先在public的index文件中引入图标字体

   ```html
   <link rel="stylesheet" href="http://at.alicdn.com/t/font_1879958_lciznj8fphd.css">
   ```

2. 然后在search组件中找到排序的标签，并将显示背景红色的class通过options的属性动态生成

   ```html
   <ul class="sui-nav">
     <li :class="{active : options.order.indexOf('1') === 0}">
       <a href="javascript:;">综合</a>
     </li>
     <li>
       <a href="#">销量</a>
     </li>
     <li>
       <a href="#">新品</a>
     </li>
     <li>
       <a href="#">评价</a>
     </li>
     <li :class="{active : options.order.indexOf('2') === 0}">
       <a href="javascript:;">价格</a>
     </li>
   </ul>
   ```

3. 定义一个计算属性，用来判断是升序还是降序

   ```js
   computed:{
       iconClass(){
         return this.options.order.split(':')[1] === 'asc' ? 'icon-jiantou-copy-copy':'icon-jiantou'
       }
   }
   ```

4. 简化是否选择’综合‘或者’价格‘排序的类名，创建一个函数，isActive

   ```js
   method:{
   	isActive(num){
         return this.options.order.indexOf(num) === 0
       }
   }
   ```

   ```html
   <!-- 优化后 -->
   <ul class="sui-nav">
     <li :class="{active : isActive('1')}">
       <a href="javascript:;">综合
         <i class="iconfont" v-if="isActive('1')" :class="iconClass"></i>
       </a>
     </li>
     <li>
       <a href="#">销量</a>
     </li>
     <li>
       <a href="#">新品</a>
     </li>
     <li>
       <a href="#">评价</a>
     </li>
     <li :class="{active : isActive('2')}">
       <a href="javascript:;">价格
         <i class="iconfont" v-if="isActive('2')" :class="iconClass"></i>
       </a>
     </li>
   </ul>
   ```

5. 点击对应的排序项进行排序

   * 创建一个点击函数

     ```js
     method:{
     	setOrder(flag){
           let [orderFlag,orderType] = this.options.order.split(':')
           if(orderFlag === flag){
             orderType = orderType === 'asc' ? 'desc' : 'asc'
           }else{
             orderFlag = flag
             orderType = 'desc'
           }
           this.options.order = orderFlag + ':' + orderType
           this.getProductList()
         }
     }
     ```

   * 在综合和价格标签上添加这个点击事件，并传入标识的数据

     ```html
     <ul class="sui-nav">
       <li :class="{active : isActive('1')}">
         <a href="javascript:;" @click="setOrder('1')">综合
           <i class="iconfont" v-if="isActive('1')" :class="iconClass"></i>
         </a>
       </li>
       <li>
         <a href="#">销量</a>
       </li>
       <li>
         <a href="#">新品</a>
       </li>
       <li>
         <a href="#">评价</a>
       </li>
       <li :class="{active : isActive('2')}">
         <a href="javascript:;"  @click="setOrder('2')">价格
           <i class="iconfont" v-if="isActive('2')" :class="iconClass"></i>
         </a>
       </li>
     </ul>
     ```

## 26、实现商品详情页的渲染效果

1. 首先把老师的Detail静态组件放到views或pages文件夹下

2. 在router目录下的routers.js中定义关于detail组件的路由规则

   ```js
   import Detail from '../views/Detail'
   export default[
   	{
           path:'/detail/:id',
           component:Detail
   	}
   ]
   ```

3. 在router目录下的index.js文件中处理一个切换页面不是在页面最顶显示的问题

   ```js
   export default new VueRouter({
       mode:'history',
       routes,
       scrollBehavior(to,from,savadPosition){
           return {x : 0 ,y : 0}
       }
   })
   ```

4. 找到search组件，在index.vue文件中找到商品图标，将a标签换成router-Link,并传入商品id值作为params参数

   ```html
   <!-- 在class="list-warap"的div标签下 -->
   <div class="p-img">
     <router-link :to="`/detail/${goods.id}`">
       <img :src="goods.defaultImg" />
     </router-link>
   </div>
   ```

5. 定义访问后台的api接口，通过接口获取数据，在api目录下的index.js文件中暴露一个接口对象，这个接口需要传一个id参数

   ```js
   export const reqDetail = (skuId) => ajax(`/item/${skuId}`)
   ```

6. 然后定义一个管理detail后台管理数据的vuex文件，在store目录下的modules目录下，创建一个detail.js文件，在里面通过api将获取的数据进行管理

   ```js
   import {reqDetail} from '../../api'
   
   export default {
           state:{
                   detailItem : {}
           },
           mutations :{
                   receive_detail(state,detailItem){
                           state.detailItem = detailItem
                   }
           },
           actions:{
                   async getDetail({commit},detailItem){
                           const result = await reqDetail(detailItem)
                           if(result.code === 200){
                                   const detailItem = result.data
                                   commit('receive_detail',detailItem)
                           }
                   }
           },
           getters:{
                   skuInfo(state){
                           return state.detailItem.skuInfo ? state.detailItem.skuInfo : {}
                   }
           }
   }
   
   ```

   再将这个detail文件在store目录下的index.js文件中集中管理，并暴露出去

   ```js
   import detail from '@/store/modules/detail'
   export default new Vuex.Store({
       mutations,
       actions,
       getters,
       modules:{
           detail
       }
   })
   ```

7. 在detail组建中触发上面定义的接口，将获取的数据动态显示到页面上

   ```js
   // 在页面渲染完成后，调用接口将数据存储到vuex，传入的参数是从search组件点击商品，得到商品的id而来(上面第4步)
   mounted() {
   	this.$store.dispatch('getDetail',this.$route.params.id)
   },
   ```

   ```js
   //通过计算属性获取后台数据的值
   import {mapState} from 'vuex'
   import {mapGetters} from 'vuex'
   export default {
   	computed: {
   		...mapState({
   			detail : state => state.detail.detailItem
   		}),
           //通过vuex的getter处理，获取商品详细信息的数据
   		...mapGetters(['skuInfo'])
   	},
   }
   ```

   ```html
   <!-- 导航路径区域 -->
   <!-- 导航路径区域动态展示1级分类，2级分类，3级分类的数据，并通过v-if处理页面刷新时获取不到数据而报错 -->
   <div class="conPoin" v-if="detail.categoryView">
   	<span>{{detail.categoryView.category1Name}}</span>
   	<span>{{detail.categoryView.category2Name}}</span>
   	<span>{{detail.categoryView.category3Name}}</span>
   </div>
   ```

   ```html
   <!-- 右侧选择区域布局 -->
   <div class="InfoWrap">
   	<div class="goodsDetail">
   		<h3 class="InfoName">{{skuInfo.skuName}}</h3>
   		<p class="news">{{skuInfo.skuDesc}}</p>
   		<div class="priceArea">
   			<div class="priceArea1">
   				<div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
   				<div class="price">
   					<i>?</i>
   					<em>{{skuInfo.price}}</em>
   					<span>降价通知</span>
   ```

   ```html
   <!-- 规格选择模块动态展示 -->
   <div class="chooseArea">
     <div class="choosed"></div>
     <dl v-for="(attrList, index) in detail.spuSaleAttrList" :key="attrList.id">
       <dt class="title">{{attrList.saleAttrName}}</dt>
       <dd v-for="(item, index) in attrList.spuSaleAttrValueList" :key="item.id"  :class="item.isChecked === '1'? 'active':''">
         {{item.saleAttrValueName}}
       </dd>
     </dl>
   </div>
   ```

8. 动态展示商品图片区域，首先在store目录下的modules目录的detail.js文件中的getters对象内处理图片数据的值

   ```js
   getters:{
           skuImage(state){
                   const skuInfo = state.detailItem.skuInfo
                   return skuInfo ? skuInfo.skuImageList : []
           }
   
   }
   ```

   找到detail组建下的ImageList子组件，在组建中导入getters处理的数据，并动态展示到页面中

   ```js
   import {mapGetters} from 'vuex'
   export default {
       name: "ImageList",
       computed:{
         ...mapGetters(['skuImage'])
       }
   }
   ```

   ```html
   <template>
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(item,index)  in skuImage" :key="item.id">
           <img :src="item.imgUrl">
         </div>
       </div>
       <div class="swiper-button-next"></div>
       <div class="swiper-button-prev"></div>
     </div>
   </template>
   ```

   ```css
   /* 给img的css样式添加一个居中样式，为了渲染效果更好 */
   img{
   	margin : 0 auto ;
   }
   ```

   

9. 小图片列表利用swiper实现滑动效果

   ```js
   //首先通过数据监听，将swiper的函数调用
   watch: {
     skuImageList: {
       handler() {
         this.$nextTick(()=>{
           new Swiper(this.$refs.swiper, {
             slidesPerView:5,
             slidesPerGroup:2,
             navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev"
             }
           });
         })
       },
       immediate:true
     }
   }
   ```

   ```html
   <!-- 在最外层div中添加一个ref标识 -->
   <div class="swiper-container" ref="swiper"> ... </div>
   ```

10. 实现点击小图片进行标识效果

    ```js
    //创建一个数据用来保存图片的默认下标
    data(){
      return {
        currentIndex : 0
      }
    },
    ```

    ```html
    <!-- 给每个图片添加一个事件监听，点击修改当前点击的图片类名 -->
    <img :src="item.imgUrl" :class="{active: currentIndex === index}" @click="changeCurrent(index)"/>
    ```

    ```js
    methods:{
        changeCurrent(index){
          this.currentIndex = index
        }
    }
    ```

11. 实现点击小图片，在大图片上显示对应图片

    1. 首先找到Zoom子组建，里面需要接收中图和大图两个数据，并动态展示到页面上

       ```vue
       <template>
         <div class="spec-preview">
           <img :src="imgUrl" />
           <div class="event"></div>
           <div class="big">
             <img :src="bigImg" />
           </div>
           <div class="mask"></div>
         </div>
       </template>
       
       <script>
         export default {
           name: "Zoom",
           props:{
             imgUrl : String,
             bigImg : String 
           }
         }
       </script>
       ```

    2. 在父组件需要声明一个变量，用来标识图片的下标，默认是0，第一张，并通过下标将对应的图片地址传给子组建Zoom

       ```js
       data(){
       	return{
       		currentIndex : 0
       	}
       },
       computed: {
            ...mapGetters(['skuInfo','skuImage'])
       },
       ```

       ```vue
       <Zoom v-if="skuImage.length>0" :imgUrl="skuImage[currentIndex].imgUrl" :bigImg="skuImage[currentIndex].imgUrl"/>
       ```

    3. 在imageList子组件中定义的修改下标函数中，通知父组件下标发生变化了,并传入一个下标

       ```js
       methods:{
         changeCurrent(index){
           if(index === this.currentIndex) return
           this.currentIndex = index
           this.$emit('changeIndex',index)
         }
       }
       ```

    4. 然后在父组件中绑定这个事件，一旦触发则调用父组件中的函数updateIndex()

       ```html
       <ImageList @changeIndex="updateIndex" />
       ```

       ```js
       methods:{
         updateIndex(index){
           this.currentIndex = index
         }
       }
       ```

12. 商品详情页选择规格添加点击切换被选中的规格效果，在dd列表中添加一个点击事件，将当前的值和整个数组当作参数传入

    ```html
    <dd v-for="(item, index) in attrList.spuSaleAttrValueList" :key="item.id"  :class="item.isChecked === '1'? 'active':''"  @click="changeValue(item,attrList.spuSaleAttrValueList)"  >
    ```

    ```js
    methods:{
      changeValue(value,valueList){
        if(value.isChecked === '1') return
        valueList.forEach(element => element.isChecked = '0');
        value.isChecked = '1'
      }
    }
    ```

13. 实现鼠标移动到图片产生放大镜效果，找到Zoom子组建，在class="event"的标签上添加一个鼠标移动事件，然后通过ref获取图片和大图展示区的标签

    ```html
    <template>
      <div class="spec-preview">
        <img :src="imgUrl" />
        <div class="event" @mousemove="move"></div>
        <div class="big">
          <img :src="bigImg" ref="big"/>
        </div>
        <div class="mask" ref="mask"></div>
      </div>
    </template>
    ```

    鼠标移动事件

    ```js
    methods:{
      move(event){
        let left , top
        const maskDiv = this.$refs.mask
        const bigImg = this.$refs.big
        const {offsetX,offsetY} = event
        const maskW = this.$refs.mask.clientWidth
    
        left = offsetX - maskW/2
        top = offsetY - maskW/2
        if(left < 0) left = 0
        if(left>maskW) left = maskW
        if(top < 0) top = 0
        if(top>maskW) top = maskW
    
        maskDiv.style.left = left+'px'
        maskDiv.style.top = top+'px'
        bigImg.style.left =-2 * left+'px'
        bigImg.style.top =-2 * top+'px'
    
      }
    }
    ```

    使用节流方式来优化渲染，首先导入loadsh的throttle节流函数，将我们的移动函数进行节流，设置每50毫秒触发一次

    ```js
    import throttle from 'lodash/throttle' 
    methods:{
      move : throttle(function (event){
        let left , top
        const maskDiv = this.$refs.mask
        const bigImg = this.$refs.big
        const {offsetX,offsetY} = event
        const maskW = this.$refs.mask.clientWidth
    
        left = offsetX - maskW/2
        top = offsetY - maskW/2
        if(left < 0) left = 0
        if(left>maskW) left = maskW
        if(top < 0) top = 0
        if(top>maskW) top = maskW
    
        maskDiv.style.left = left+'px'
        maskDiv.style.top = top+'px'
        bigImg.style.left =-2 * left+'px'
        bigImg.style.top =-2 * top+'px'
    
      },50)
    }
    ```

    

    





