

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
   import {mapState} from 'vue'
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

## 22、动态生成进入推荐图片

 1. 首先自定义mock文件生成模拟图片的json文件

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

   